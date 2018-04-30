import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { throttle, debounce } from 'rxjs/operators';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/first";
import { interval } from 'rxjs/observable/interval';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormGroup } from '@angular/forms';
import { countries } from './options-bank';
import { BrokerService } from '../broker.service';
import * as moment from "moment";

@Injectable()
export class JxService {
  customValidators:any={};
  constructor(private httpClient: HttpClient, private brokerService: BrokerService) {
    console.log("jx.service");
  }

  getClasses(layout: any, parent: any) {
    let classes: any = {};
    if (layout.class) {
      if (typeof (layout.class) == "object") {
        classes.elementClass = layout.class.element || '';
        classes.labelClass = layout.class.label || '';
        classes.parentClass = layout.class.parent || ''
      } else {
        classes.elementClass = layout.class;
      }
    }
    return (classes);
  }

  initCustomValidators(obj) {
    this.customValidators = obj;
  }


  executeCustomValidation(name: string, arg: {}) {
    let f = this.customValidators[name].call(this, arg);
    return (f);
  }

  checkboxGroupRequiredValidator(group) {
    let valid = false;
    Object.values(group.controls).forEach((x: any) => {
      valid = x.value || valid;
    });
    return (valid ? null : { required: true });
  }

  // getGroupValidators(group) {

  // }

  getValidators(layout) {
    let allValidators = {
      validators: [],
      asyncValidators: []
    };

    layout.validation && Object.keys(layout.validation).map(x => {

      switch (x) {
        case 'required':
          (layout.type in { checkbox: '' }) ? allValidators.validators.push(Validators.requiredTrue)
            : allValidators.validators.push(Validators.required)
          break;
        case 'email':
          allValidators.validators.push(Validators.email);
          break;
        case 'minlength':
          allValidators.validators.push(Validators.minLength(layout.validation[x].value));
          break;
        case 'maxlength':
          allValidators.validators.push(Validators.maxLength(layout.validation[x].value));
          break;
        case 'pattern':
          allValidators.validators.push(Validators.pattern(layout.validation[x].value));
          break;
        default:
          let validatorName = x;
          let arg = layout.validation[x].arg;
          if (layout.validation[x].async) {
            allValidators.asyncValidators.push(this.executeCustomValidation(validatorName, arg));
          } else {
            allValidators.validators.push(this.executeCustomValidation(validatorName, arg));
          }
      }
    });
    return (allValidators);
  }

  options: {} = {
    countries: countries
    , countries1: () => countries
    , countries2: Observable.of(countries)
    , countries3: this.brokerService.httpPost$("http://localhost:3002/countries")
    , states: this.brokerService.httpPost$("http://localhost:3002/states")
  }

  getOption(optionName) {
    let opts = this.options[optionName];
    (typeof (opts) == 'function') && (opts = opts());
    return (opts);
  }
}
