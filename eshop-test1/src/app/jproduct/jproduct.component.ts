import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jproduct',
  templateUrl: './jproduct.component.html',
  styleUrls: ['./jproduct.component.css']
})
export class JproductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('jproduct');
  }

}
