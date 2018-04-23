import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { form1 } from './app.config';
import { JxService } from './jx-service/jx.service';
import { BrokerService } from './broker.service';
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
  constructor(private JxFormService: JxService, private brokerService: BrokerService, private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.options = {
      wrapperClass: "form-style-1"
    };
    this.myLayout = form1;
    this.content = "This is code";
    this.handleChildEvents();
    this.initCustomValidators();
  }

  handleChildEvents() {
    this.subs = this.brokerService.filterOn("submit1").subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    );
    let sub1 = this.brokerService.filterOn("submit").subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    )
    let sub2 = this.brokerService.filterOn("submit2").subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    )
    this.subs.add(sub1).add(sub2);
  }

  initCustomValidators() {
    let customValidators = {
      myValidate: (s) => {
        let func = (control) => {
          return (control.value.indexOf(s) >= 0 ? null : { myValidate: true });
        };
        return (func);
      }
      , email2: () => {
        let func = (control) => {
          let val = control.value;
          if (val.indexOf('@') == -1) {
            return ({ email2: true });
          } else {
            return (null);
          }
        };
        return (func);
      }
      , email1: (arg) => {
        let func = (control) => {
          let body = { value: control.value };
          let obs = this.httpClient.post(arg.url, body);
          return (obs);
        };
        return (func);
      }
      , groupValidator1: () => {
        let func = (control) => {
          let ret;
          control.value.firstName ? ret = null : ret = { groupValidator1: false };
          return (ret);
        };
        return (func);
      }
      , groupAsyncValidator1: (arg) => {
        let func = (group) => {
          let obs = Observable.of(null);
          if (group.valueChanges) {
            let body = { value: group.value };
            obs = group.valueChanges
              .debounceTime(arg.delay || 3000)
              .switchMap(() => this.httpClient.post(arg.url, body))
              .first();
          }
          return (obs);
        }
        return (func);
      }
    }
    this.JxFormService.initCustomValidators(customValidators);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
