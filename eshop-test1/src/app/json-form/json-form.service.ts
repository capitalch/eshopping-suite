import { Injectable } from '@angular/core';

@Injectable()
export class JsonFormService {

  constructor() { }
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

  executeAction(actionName:string, arg:{}){
    this.actions[actionName].call(this,arg);
  }

}
