import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IbukiService } from '../../gx-dynamic-form/service/ibuki.service';
import { GxCustomService } from '../../service/gx-custom.service';
import { form1 } from '../form-json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title = 'app';
  myLayout: any = {};
  options: any = {};
  content: string;
  subs: any;
  constructor(
    private ibukiService: IbukiService
    , private httpClient: HttpClient
    , private gxCustomService: GxCustomService
  ) {

  }

  ngOnInit() {
    // this.options = {
    //   wrapperClass: "form-style-1"
    // };
    this.myLayout = form1;
    this.content = 'This is code';

  }

  // ngAfterViewInit() {
  //   this.brokerService.emit("userComponents", "test");
  // }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
