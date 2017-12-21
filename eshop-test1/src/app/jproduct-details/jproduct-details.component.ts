import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jproduct-details',
  templateUrl: './jproduct-details.component.html',
  styleUrls: ['./jproduct-details.component.css']
})
export class JproductDetailsComponent implements OnInit {
sub1:any;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('jdetails');
    this.activatedRoute.data.subscribe(d=>console.log(d));
    this.activatedRoute.params.subscribe(d=>console.log(d));
    // console.log(this.activatedRoute.data)
  }

}
