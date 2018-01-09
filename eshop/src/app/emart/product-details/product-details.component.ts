import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {navUrls} from '../emart.config';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: any;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
      alert(this.productId);
    });
  }

  ngOnInit() {
  }

  back(){
    window.history.back();
  }
}
