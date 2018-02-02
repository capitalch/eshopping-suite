import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrokerService } from './broker.service';
import { localMessages, httpMessages } from '../app.config';
@Injectable()
export class AppService {
  itemsInCart: any[] = [];
  cartCount: number = 0;
  constructor(private httpClient: HttpClient
    , private brokerService: BrokerService
  ) {
    console.log('App service');
    //get settings file
    httpClient
      .get('assets/settings.json')
      .subscribe(d => {
        console.log(d);
        this.brokerService.init(d);
        this.brokerService.behEmit(localMessages.getsettings, d);
      }, err => {
        console.log(err);
      });
    this.init()
  }

  init() {
    this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => d.error ? console.log(d.error) : (
      this.setItemsInCart(d.data)
    ));

    this.brokerService.filterOn(httpMessages.addUpdateCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.getUserId()] })
      )
    })

    this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.brokerService.httpPost(httpMessages.itemsInCart, { params: [this.getUserId()] })
      )
    })
  }

  getUserId() {
    return (1);
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
