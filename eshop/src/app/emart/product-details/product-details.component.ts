import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {navUrls} from '../emart.config';
import {RatingModule} from "ng2-rating";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(param => {
      this.product = JSON.parse(param.product);
    });
  }

  ngOnInit() {
  }

  back(){
    window.history.back();
  }
}
