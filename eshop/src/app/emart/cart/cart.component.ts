import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { AppService } from '../../service/app.service';
import { tables, httpMessages, localMessages, navUrls } from '../emart.config';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsInCart: any;
  subs: any;
  itemsCount: number = 0;

  constructor(private brokerService: BrokerService, private appService: AppService, private router: Router) {

  }

  ngOnInit() {
    this.subs = this.brokerService.behFilterOn(localMessages.itemsInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.itemsInCart = d.data.items,
        this.itemsCount = d.data.itemsCount
      );
    });
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

  deleteItem(id) {
    this.brokerService.httpPost(httpMessages.deleteItemInCart, { params: [id, this.appService.getUserId()] });
  }
  placeOrderFromCart() {
    //this.brokerService.httpPost(httpMessages.placeOrderFromCart, { params: [this.appService.getUserId()] });
    this.router.navigate([navUrls.placeOrder]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
