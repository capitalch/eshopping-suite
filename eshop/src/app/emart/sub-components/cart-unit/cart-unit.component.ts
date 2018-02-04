import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../../service/broker.service';
import { httpMessages } from '../../../app.config';
import { AppService } from '../../../service/app.service';

@Component({
  selector: 'app-cart-unit',
  templateUrl: './cart-unit.component.html',
  styleUrls: ['./cart-unit.component.scss']
})
export class CartUnitComponent implements OnInit {
  cartCount: number = 0;
  itemsInCart: any[] = [];
  constructor(private brokerService: BrokerService, private appService: AppService) { }

  ngOnInit() {
    this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => d.error ? console.log(d.error) : (
      this.setItemsInCart(d.data)
    ));

    this.brokerService.filterOn(httpMessages.addUpdateCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] })
      )
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
}
