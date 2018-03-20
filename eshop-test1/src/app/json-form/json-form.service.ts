import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class JsonFormService {

  constructor(private http: Http) { }
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
    email2:()=>{
      let func = (control)=>{
        let val = control.value;
        if(val.indexOf('@') == -1){
          return({email2:true});
        } else{
          return(null);
        }
      };
      return(func);
    },
    email1: () => {
      let func = (control) => {
        let obs = this.http.post("http://localhost:3002/email", "test")
          .map(res => res.json());
        // let obs1 = Observable.of({email1:true});
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
