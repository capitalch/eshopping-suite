import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RatingModule} from "ng2-rating";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  star = 3.5;

  constructor(private router: Router, private rating:RatingModule) { }

  ngOnInit() {
  }

  nav() {
    this.router.navigate(['emart/composite/productDetails'])
  }
}
