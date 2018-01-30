import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrokerService } from './broker.service';
import { localMessages, httpMessages } from '../app.config';
@Injectable()
export class AppService {
  itemsInCart: any[] = [];
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
    // this.init()
  }

  // init() {
  //   this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {
  //     d.error ? console.log(d.error) : (
  //       this.brokerService.filterOn(httpMessages.itemsInCart).subscribe(d => {
  //         this.itemsInCart = d.data
  //       })
  //       // ,this.brokerService.httpPost(httpMessages.itemsInCart,{params:this.getUserId()})
  //     )
  //   })
  // }

  getUserId() {
    return (1);
  }

  setItemsInCart(items) {
    this.itemsInCart = items;
  }

  getCartCount() {
    let ret = 0;
    // this.itemsInCart = [{ name: 'xxx', qty: 1 }, { name: 'yyy', qty: 10 }];
    this.itemsInCart && (this.itemsInCart.length > 0) && (
      ret = this.itemsInCart.reduce((a, b) => {
        return a + (+b.qty);
      }, 0)
    );
    return (ret);
  }

}
