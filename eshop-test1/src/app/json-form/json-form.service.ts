import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
@Injectable()
export class JsonFormService {

  constructor(private http: Http) { }
  customValidators = {
    myValidate: (s) => {
      let func = (control) => {
        return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
      };
      return (func);
    },
    selectRequiredValidator: (def) => {
      let func = (control) => {
        return ((control.value == def) ? { selectRequired: true } : null);
      }
      return (func);
    }
  }

  asyncValidators = {
    email1: () => {
      let func = (control) => {
        let obs = this.http.post("http://localhost:3002/email", "test")
          .map(res => res.json());
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

  executeAsyncValidation(name: string, arg: {}) {
    let f = this.asyncValidators[name].call(this, arg);
    return (f);
  }

}
