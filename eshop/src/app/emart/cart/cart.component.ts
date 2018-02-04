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

  addSubCart(productId,qty) {
    let payload = {
      user_id: this.appService.getUserId(),
      product_id: productId,
      qty: qty,
      isactive: true
    };
    this.brokerService.httpPost(httpMessages.addSubCart, { tableName: 'shopping_cart', json: payload });
  }

  resetCart() {
    this.brokerService.httpPost(httpMessages.resetCart,{params:[this.appService.getUserId()]});
  }

  placeOrderFromCart() {

  }

  ngOnDestroy() {
    // this.subs.unsubscribe();
  }

}
