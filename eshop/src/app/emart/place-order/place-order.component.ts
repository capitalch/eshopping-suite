import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceOrderComponent implements OnInit {

  prop="";
  constructor() { }

  ngOnInit() {
  }

}
