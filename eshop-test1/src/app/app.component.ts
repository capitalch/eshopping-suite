import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { form1 } from './app.config';
// import { BrokerService } from './broker.service';
import { GxCustomService } from './service/gx-custom.service';
// import { GxMapperService } from './gx-dynamic-form/service/gx-mapper.service';
// import { GxCustomService } from './gx-custom.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  myLayout: any = {};
  options: any = {};
  content: string;
  subs: any;
  constructor(private httpClient: HttpClient
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
