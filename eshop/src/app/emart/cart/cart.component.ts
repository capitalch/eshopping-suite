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
    // this.subs = this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => {
    //   d.error ? console.log(d.error) : (
    //     console.log(d.data),
    //     this.cart = d.data
    //   );
    // });
    // let sub1 = this.brokerService.filterOn(httpMessages.addUpdateCart).subscribe(d => {
    //   d.error ? console.log(d.error) : (
    //     console.log('product added')
    //   )
    // })
    // this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] })
    // this.subs.add(sub1);
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
