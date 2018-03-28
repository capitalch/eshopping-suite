import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class JsonFormService {
  ee: EventEmitter<any>;
  Event
  constructor(private http: HttpClient) { 
    this.ee = new EventEmitter();
  }
  customValidators = {
    myValidate: (s) => {
      let func = (control) => {
        return (control.value.indexOf(s) >= 0 ? null : { myValidate: true });
      };
      return (func);
    },
    selectRequired: (def) => {
      let func = (control) => {
        return ((control.value == def) ? { selectRequired: true } : null);
      }
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
        // const headers = new HttpHeaders().set('content-type', 'application/json');
        let body = { value: control.value };
        let obs = this.http.post(arg.url, body);
        return (obs);
      };
      return (func);
    }

  }

  actions = {
    submitForm: (form) => {
      console.log(form.value);
    }
    , resetForm: (form) => {
      console.log("Form is done reset");
    }
  }

  executeCustomValidation(name: string, arg: {}) {
    let f = this.customValidators[name].call(this, arg);
    return (f);
  }

  executeAction(actionName: string, arg: {}) {
    this.actions[actionName].call(this, arg);
  }

  // executeAsyncValidation(name: string, arg: {}) {
  //   let f = this.asyncValidators[name].call(this, arg);
  //   return (f);
  // }

}
