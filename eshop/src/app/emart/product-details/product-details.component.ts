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
  // productId:number;
  product: any;
  subs:any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(param => {
      // console.log(param.id);
      // this.product = JSON.parse(param.product);
    });
  }

  ngOnInit() {
    //this subs = 
  }

  changeDisplayImage(url)
  {
    // this.displayImage = url;
  }

  back(){
    window.history.back();
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
