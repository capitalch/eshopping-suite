import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../service/broker.service';
import { AppService } from '../../../service/app.service';
import { Router } from '@angular/router';
import { navUrls, httpMessages, localMessages } from '../../emart.config';

@Component({
  selector: 'app-cart-unit',
  templateUrl: './cart-unit.component.html',
  styleUrls: ['./cart-unit.component.scss']
})
export class CartUnitComponent implements OnInit {
  cartCount: number = 0;
  itemsInCart: any[] = [];
  subs: any;
  constructor(private brokerService: BrokerService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => d.error ? console.log(d.error) : (
      this.setItemsInCart(d.data)
    ));

    let sub1 = this.brokerService.filterOn(httpMessages.addSubCart).subscribe(d => {
      let count: number;
      d.error ? console.log(d.error) : (
        this.setItemsInCart(d.data[3].rows)
      );
    });

    let sub2 = this.brokerService.filterOn(httpMessages.resetCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.setItemsInCart([])
      );
    });

    let sub3 = this.brokerService.filterOn(httpMessages.deleteItemInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.setItemsInCart(d.data[1].rows)
      )
    });

    let sub4 = this.brokerService.filterOn(httpMessages.placeOrderFromCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.setItemsInCart([])
      )
    });

    this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] });
    this.subs.add(sub1).add(sub2).add(sub3).add(sub4);
  }

  setItemsInCart(items) {
    this.itemsInCart = items;
    let ret = 0;
    this.itemsInCart && (this.itemsInCart.length > 0) && (
      ret = this.itemsInCart.reduce((a, b) => {
        return a + (+b.qty);
      }, 0)
    );
    this.cartCount = ret;
    this.brokerService.behEmit(localMessages.itemsInCart, { items: this.itemsInCart, itemsCount: ret });
  }

  showCart() {
    this.router.navigate([navUrls.cart]);
  }

  showLogin()
  {
    this.router.navigate([navUrls.login]);
  }

  showSignup()
  {
    this.router.navigate([navUrls.signup]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
