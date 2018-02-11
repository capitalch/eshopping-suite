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
    this.itemsInCart=[];
    this.subs = this.brokerService.filterOn(httpMessages.addSubCart).subscribe(d => {
      let itemCount: number;
      d.error ? console.log(d.error) : (
        (d.data[1].rows.length > 0) ? itemCount = d.data[1].rows[0].productqty : itemCount = 0,
        this.itemsInCart[d.carryBag.index]
        && (this.itemsInCart[d.carryBag.index].qty = itemCount),
        this.grandTotal = (d.data[2].rows.length > 0) ? d.data[2].rows[0].totalqty : 0,
        console.log(d.data)
      );
    });

    let sub1 = this.brokerService.behFilterOn(localMessages.itemsInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.itemsInCart = d.data
      )
    });

    this.subs.add(sub1);

  }

  addSubCart(arrayIndex, productId, qty) {
    let payload = {
      user_id: this.appService.getUserId(),
      product_id: productId,
      qty: qty,
      isactive: true
    };
    this.brokerService.httpPost(httpMessages.addSubCart, { tableName: tables.shoppingCart, json: payload }, {}, { index: arrayIndex, productId: productId });
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
