import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  itemsInCart:any[]=[];
  cartCount:number=0;
  constructor() { }

  addToCart(){
    this.cartCount++;
  }

  getCartCount(){
    return(this.cartCount);
  }


}
