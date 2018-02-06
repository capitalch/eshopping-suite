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
  cart: any;
  grandTotal: any;
  constructor(private brokerService: BrokerService, private appService: AppService) { 

  }

  ngOnInit() {
    this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => {d.error ? console.log(d.error) : 
    (
       this.cart = d.data,
       console.log(this.cart)
    )});
    this.brokerService.filterOn(httpMessages.addSubCart).subscribe(d => {
      let count: number;
      d.error ? console.log(d.error) : (
        this.cart = d.data
      );
    });
    this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] });
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

  removeItem(id)
  {
    this.cart.splice(this.cart.map(function(x) {return x.id; }).indexOf(id),1);
  }

  ngOnDestroy() {
    //this.subs.unsubscribe();
  }

}
