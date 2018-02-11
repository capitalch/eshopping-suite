import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { AppService } from '../../service/app.service';
import { tables, httpMessages, localMessages } from '../emart.config';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsInCart: any;
  subs: any;
  grandTotal: number = 0;

  constructor(private brokerService: BrokerService, private appService: AppService) {

  }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.addSubCart).subscribe(d => {
      let count: number;
      d.error ? console.log(d.error) : (
        this.itemsInCart = d.data
      );
    });

    let sub1 = this.brokerService.behFilterOn(localMessages.itemsInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.itemsInCart = d.data
      )
    });

    this.subs.add(sub1);

  }

  addSubCart(productId, qty) {
    let payload = {
      user_id: this.appService.getUserId(),
      product_id: productId,
      qty: qty,
      isactive: true
    };
    this.brokerService.httpPost(httpMessages.addSubCart, { tableName: tables.shoppingCart, json: payload });
  }

  resetCart() {
    this.brokerService.httpPost(httpMessages.resetCart, { params: [this.appService.getUserId()] });
  }

  placeOrderFromCart() {

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
