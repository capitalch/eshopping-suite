import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { EshopService } from '../eshop.service';
import * as _ from 'underscore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  products: any[];
  productSub: any;
  productDetails: any;

  productContainerClass:any = "productContainerDisable";
  productDetailsClass:any = "productDetailsDisable";
  
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private eshopService: EshopService, private paginationService: PaginationService) { }

  ngOnInit() {
    this.productSub = this.eshopService.filterOn('post:query:products:on:category').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.products = d.data,
        this.productContainerClass = "productContainer",
        // initialize to page 1
        this.setPage(1)
      );
    });
  }

  showDetails(id)
  {
    alert("ProductID - "+ id);

    //change class
    this.productContainerClass = "productContainerDisable";
    this.productDetailsClass = "productDetails";

    //getting product details
    this.productDetails = this.products.filter(p=>p.id == id);
    
  }

  showProducts()
  {
    this.productContainerClass = "productContainer";
    this.productDetailsClass = "productDetailsDisable";
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.paginationService.getPager(this.products.length, page);

    // get current page of items
    this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnDestroy()
  {
    this.productSub.unsubscribe();
  }
}
