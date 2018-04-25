import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { form1 } from './app.config';
import { JxService } from './jx-service/jx.service';
import { BrokerService } from './broker.service';
import { JxMainService } from './jx-main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myLayout: any = {};
  options: any = {};
  content: string;
  subs: any;
  constructor(private jxMainService:JxMainService, private JxFormService: JxService, private brokerService: BrokerService, private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.options = {
      wrapperClass: "form-style-1"
    };
    this.myLayout = form1;
    this.content = "This is code";
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];
}
