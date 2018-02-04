import { Injectable } from '@angular/core';

@Injectable()
export class EmartService {

  constructor() { 
    console.log('emart service');
  }

  test(){
    console.log('emart service test method');
  }
}
