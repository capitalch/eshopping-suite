import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrokerService } from '../../service/broker.service';
import { httpMessages, localMessages } from '../../app.config';
import { settings, navUrls } from '../emart.config';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) { }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.getEmartDefault).subscribe(d => {
      d.error ? console.log(d.error) : (
        console.log(d.data),
        this.products = d.data
      );
    });

    let sub1 = this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {      
      this.activatedRoute.params.subscribe(params => {
        this.pageObject.pageIndex=0;
        this.catId = params.catId;
        this.pageObject.length = params.count;
        (params.searchString && (params.searchString != "undefined"))
          ? this.searchString = params.searchString : this.searchString = undefined;
        this.pageChange();
      });
    });
    this.subs.add(sub1);
  }

  pageChange() {
    let offSet = this.pageObject.pageIndex * this.pageObject.pageSize;
    let httpMessage: string, params: any[];
    (this.catId == 0) && (this.catId = '%')
    this.searchString
      ? (httpMessage = httpMessages.searchProductsOnlyOnInput
        , params = [this.catId, this.searchString, offSet, this.pageObject.pageSize])
      : (httpMessage = httpMessages.getProductsOnCategory
        , params = [this.catId, offSet, this.pageObject.pageSize]);
    this.brokerService.httpPost(httpMessages.getEmartDefault, {
      id: httpMessage, params: params
    })
  }

  pageSelected(e) {
    this.pageObject.pageIndex = e.pageIndex;
    this.pageObject.pageSize = e.pageSize;
    this.pageChange();
    console.log(e);
  }

  showProductDetails(id)
  {
    this.router.navigate([navUrls.productDetails,{productId:id}]);
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
