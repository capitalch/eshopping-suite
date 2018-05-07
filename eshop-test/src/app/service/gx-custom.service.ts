import { Injectable, ChangeDetectorRef } from '@angular/core';
import { IbukiService } from '../gx-dynamic-form/service/ibuki.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GxService } from '../gx-dynamic-form/service/gx.service';
import { components } from '../custom-controls/custom-controls-mapper';
import { GxMapperService } from '../gx-dynamic-form/service/gx-mapper.service';
// import {countries} from './options-set';
@Injectable()
export class GxCustomService {
  subs: any;
  myComponents: any;
  constructor(
    private ibukiService: IbukiService
    , private httpClient: HttpClient
    , private gxService: GxService
    , private gxMapperService: GxMapperService
  ) {
    // this.myComponents = components;
    this.registerCustomEvents();
    this.registerCustomValidators();
    this.registerCustomControls();
    this.registerSelectOptions();
    console.log('gx-custom-service');
  }

  registerSelectOptions(){

  }

  registerCustomControls() {
    this.gxMapperService.mapComponents(components)
  }

  registerCustomEvents() {
    this.subs = this.ibukiService.filterOn("submit1").subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        console.log(d.data.value);
      }
    });

    let sub3 = this.ibukiService.filterOn("mySubmit").subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        console.log(d.data.value);
      }
    });
    let sub1 = this.ibukiService.filterOn("reset").subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    )
    let sub2 = this.ibukiService.filterOn("submit2").subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    )
    this.subs.add(sub1).add(sub2).add(sub3);
  }

  registerCustomValidators() {
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
          if (group.valueChanges && group.value) {
            let body = { value: group.value };
            obs = group.valueChanges
              .debounceTime(arg.delay || 3000)
              .switchMap(() => this.httpClient.post(arg.url, body))
              .first();
          }
          // this.ref.tick();
          return (obs);
        }
        return (func);
      }
    }
    this.gxService.registerCustomValidators(customValidators);
  }
}
