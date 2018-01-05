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
  catId: number;
  searchString:String;
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
    this.subs = this.brokerService.filterOn(httpMessages.getProductsOnCategory).subscribe(d => {
      d.error ? console.log(d.error) : (
        console.log(d.data),
        this.products = d.data
        // ,d.data && d.data.length && (d.data.length > 0) && (this.pageObject.length = d.data[0].count)
      );
    });

    let sub1 = this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {
      this.activatedRoute.params.subscribe(params => {
        this.catId = params.catId;
        this.pageObject.length = params.count;
        this.searchString = params.searchString;
        this.pageChange();
      });
    });
    this.subs.add(sub1);
  }

  pageChange() {
    let offSet = this.pageObject.pageIndex * this.pageObject.pageSize;
    let httpMessage = this.searchString ? httpMessages.searchProductsOnlyOnInput :httpMessages.getProductsOnCategory
    this.brokerService.httpPost(httpMessage, { params: [this.catId, offSet, this.pageObject.pageSize, this.searchString
    ] })
  }

  pageSelected(e) {
    this.pageObject.pageIndex = e.pageIndex;
    this.pageObject.pageSize = e.pageSize;
    this.pageChange();
    console.log(e);
  }

  itemSelected(e) {
    this.router.navigate([navUrls.productDetails])
  }

  nav() {
    this.router.navigate(['emart/composite/productDetails'])
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
