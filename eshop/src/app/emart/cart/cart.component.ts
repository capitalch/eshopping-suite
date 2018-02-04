import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { httpMessages } from '../../app.config';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  subs: any;
  cart: any;
  constructor(private brokerService: BrokerService, private appService: AppService) { }

  ngOnInit() {
  }

  addToCart(productId) {

  }

  subFromCart(product_id) {

  }

  resetCart() {

  }

  placeOrderFromCart() {

  }

  ngOnDestroy() {
    // this.subs.unsubscribe();
  }

}
