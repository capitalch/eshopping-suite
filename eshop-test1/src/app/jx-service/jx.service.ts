import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { throttle, debounce } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormGroup } from '@angular/forms';
import { countries } from './options-bank';
import { BrokerService } from '../broker.service';
import * as moment from "moment";
// import { BrokerService } from './broker.service';

@Injectable()
export class JxService {

  constructor(private httpClient: HttpClient, private brokerService: BrokerService) {
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

  customValidators = {
    myValidate: (s) => {
      let func = (control) => {
        return (control.value.indexOf(s) >= 0 ? null : { myValidate: true });
      };
      return (func);
    },
    email2: () => {
      let func = (control) => {
        let val = control.value;
        if (val.indexOf('@') == -1) {
          return ({ email2: true });
        } else {
          return (null);
        }
      };
      return (func);
    },
    email1: (arg) => {
      let func = (control) => {
        let body = { value: control.value };
        let obs = this.httpClient.post(arg.url, body);
        return (obs);
      };
      return (func);
    },
    groupValidator1: () => {
      let func = (control) => {
        let ret;
        control.value.firstName ? ret=null : ret={groupValidator1:false};
        return (ret);
      };
      return (func);
    }
    , groupAsyncValidator1: (arg) => {
      let func = (group) => {
        // let obs = Observable.of({groupAsyncValidator1:false});
        let body = "test";
        let obs = this.httpClient.post(arg.url, body);
        // let obs1 = obs.pipe(debounce(()=>interval(3000)));
        return(obs);
      }
      return (func);
    }

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

  getGroupValidators(group) {

  }

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
  }

  getOption(optionName) {
    let opts = this.options[optionName];
    (typeof (opts) == 'function') && (opts = opts());
    return (opts);
  }
}
