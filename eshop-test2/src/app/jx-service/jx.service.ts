import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormGroup } from '@angular/forms';
import { countries } from './options-bank';
import { BrokerService } from '../broker.service';
// import { BrokerService } from './broker.service';

@Injectable()
export class JxService {

  constructor(private httpClient: HttpClient, private brokerService: BrokerService) {
  }

  customValidators = {
    myValidate: (s) => {
      let func = (control) => {
        return (control.value.indexOf(s) >= 0 ? null : { myValidate: true });
      };
      return (func);
    },
    // selectRequired: (def) => {
    //   let func = (control) => {
    //     return ((control.value == def) ? { selectRequired: true } : null);
    //   }
    //   return (func);
    // },
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
    }

  }

  actions = {
    submit: (formValue) => {
      console.log(formValue);
    }
    , reset: (form) => {
      console.log("Form is done reset");
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

  executeAction(actionName: string, arg: {}) {
    this.actions[actionName].call(this, arg);
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
