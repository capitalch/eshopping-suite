import { Injectable, ChangeDetectorRef } from '@angular/core';
// import { BrokerService } from '../broker.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/delay';
import { GxService } from '../gx-dynamic-form/service/gx.service';
import { components } from '../custom-controls/custom-controls-mapper';
import { GxMapperService } from '../gx-dynamic-form/service/gx-mapper.service';
import { countries, genders1, food1 } from './options-set';
import { IbukiService } from '../gx-dynamic-form/service/ibuki.service';
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
    this.registerOptions();
    console.log('gx-custom-service');
  }

  options = {
    countries: countries
    , countries1: () => countries
    , countries2: Observable.of(countries)
    , countries3: this.ibukiService.httpPost$('http://localhost:3002/countries')
    , genders1: genders1
    , genders2: () => genders1
    , genders3: Observable.of(genders1)
    , genders4: this.ibukiService.httpPost$('http://localhost:3002/genders1')
    , food1: food1
    , food2: () => food1
    , food3: Observable.of(food1).delay(100)
    , food4: this.ibukiService.httpPost$('http://localhost:3002/food1')
  };

  registerOptions() {
    this.gxService.registerOptions(this.options);
  }

  registerCustomControls() {
    this.gxMapperService.mapComponents(components);
  }

  registerCustomEvents() {
    this.subs = this.ibukiService.filterOn('submit1').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        console.log(d.data.value);
      }
    });

    const sub3 = this.ibukiService.filterOn('mySubmit').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        console.log(d.data.value);
      }
    });
    const sub1 = this.ibukiService.filterOn('reset').subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    );
    const sub2 = this.ibukiService.filterOn('submit2').subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    );
    this.subs.add(sub1).add(sub2).add(sub3);
  }

  registerCustomValidators() {
    const customValidators = {
      myValidate: (s) => {
        const func = (control) => {
          return (control.value.indexOf(s) >= 0 ? null : { myValidate: true });
        };
        return (func);
      }
      , email2: () => {
        const func = (control) => {
          const val = control.value;
          if (val.indexOf('@') === -1) {
            return ({ email2: true });
          } else {
            return (null);
          }
        };
        return (func);
      }
      , email1: (arg) => {
        const func = (control) => {
          const body = { value: control.value };
          const obs = this.httpClient.post(arg.url, body);
          return (obs);
        };
        return (func);
      }
      , groupValidator1: () => {
        const func = (control) => {
          let ret;
          control.value.firstName ? ret = null : ret = { groupValidator1: false };
          return (ret);
        };
        return (func);
      }
      , groupAsyncValidator1: (arg) => {
        const func = (group) => {
          let obs = Observable.of(null);
          if (group.valueChanges && group.value) {
            const body = { value: group.value };
            obs = group.valueChanges
              .debounceTime(arg.delay || 3000)
              .switchMap(() => this.httpClient.post(arg.url, body))
              .first();
          }
          // this.ref.tick();
          return (obs);
        };
        return (func);
      }
    };
    this.gxService.registerCustomValidators(customValidators);
  }
}
