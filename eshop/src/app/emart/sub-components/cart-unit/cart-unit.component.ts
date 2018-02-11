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
  constructor(private brokerService: BrokerService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => d.error ? console.log(d.error) : (
      this.setItemsInCart(d.data)
    ));

    this.brokerService.filterOn(httpMessages.addSubCart).subscribe(d => {
      let count: number;
      d.error ? console.log(d.error) : (
        this.cartCount = d.data && d.data[2] && d.data[2].rows && d.data[2].rows[0] && (+d.data[2].rows[0].totalqty)
      );
    });

    this.brokerService.filterOn(httpMessages.resetCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        console.log(d.data),
        this.cartCount = 0,
        this.itemsInCart = []
      );
    });

    this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] });
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
  }

  showCart() {
    this.brokerService.behEmit(localMessages.itemsInCart,this.itemsInCart);
    this.router.navigate([navUrls.cart]);
  }
}
