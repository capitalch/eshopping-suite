import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrokerService } from '../../service/broker.service';
import { httpMessages, localMessages } from '../../app.config';
import { settings, navUrls } from '../emart.config';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  subs: any;
  catId: any;
  searchString: any;
  pageObject: {
    length: number,
    pageIndex: number,
    pageSize: number,
    pageSizeOptions: [number]
  } = {
      length: 0,
      pageIndex: 0,
      pageSize: +settings.productPageSize,
      pageSizeOptions: [5, 10, 20, 50]
    }
  pageNo: number = 1;
  products: any;

  constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageObject.pageIndex = 0;
      this.catId = params.catId;
      this.pageObject.length = params.count;
      (params.searchString && (params.searchString != "undefined"))
        ? this.searchString = params.searchString : this.searchString = undefined;
      this.pageChange();
    });

    this.subs = this.brokerService.filterOn(httpMessages.products).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.products = d.data
      );
    });

    let sub1 = this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {
      this.activatedRoute.params.subscribe(params => {
        this.pageObject.pageIndex = 0;
        this.catId = params.catId;
        this.pageObject.length = params.count;
        (params.searchString && (params.searchString != "undefined"))
          ? this.searchString = params.searchString : this.searchString = undefined;
      });
    });

    // let sub2 = this.brokerService.filterOn(httpMessages.addUpdateCart).subscribe(d => {
    //   console.log(d);
    //   d.error ? console.log(d.error) : (
    //     this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] })
    //   );
    // });

    this.subs.add(sub1);//.add(sub2);
  }

  pageChange() {
    let offSet = this.pageObject.pageIndex * this.pageObject.pageSize;
    let artifact: string, params: any[];
    (this.catId == 0) && (this.catId = "%")
    this.searchString
      ? (artifact = httpMessages.searchProductsOnCriteria
        , params = [this.catId, this.searchString, offSet, this.pageObject.pageSize])
      : (artifact = httpMessages.productsOnCategory
        , params = [this.catId, offSet, this.pageObject.pageSize]);
    this.brokerService.httpPost(httpMessages.products, {
      id: artifact, params: params
    })
  }

  pageSelected(e) {
    this.pageObject.pageIndex = e.pageIndex;
    this.pageObject.pageSize = e.pageSize;
    this.pageChange();
  }

  showProductDetails(selectedProduct) {
    this.router.navigate([navUrls.productDetails, { id: selectedProduct.id }]);
  }

  addToCart(product) {
    let item = product.label && (product.label = JSON.parse(product.label)) && product.label.toString();
    let payload = {
      user_id: this.appService.getUserId(),
      product_id: product.id,
      qty: 1,
      isactive: true
    };    
    this.brokerService.httpPost(httpMessages.addUpdateCart, { tableName: 'shopping_cart', json: payload });
  }

  getProductLabel(product){
    let label = product && product.label && product.label.toString();
    return(label);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
