import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {navUrls} from '../emart.config';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  nav(){
    window.history.back();
  }
}
