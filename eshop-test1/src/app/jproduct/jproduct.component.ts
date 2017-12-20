import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-jproduct',
  templateUrl: './jproduct.component.html',
  styleUrls: ['./jproduct.component.css']
})
export class JproductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log('jproduct');
  }

  showDetails(){
    this.router.navigate(['/jbody/jdetails',{name:'Sushant'}])
  }

}
