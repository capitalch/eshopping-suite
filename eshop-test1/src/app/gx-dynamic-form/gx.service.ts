import { Injectable } from '@angular/core';
import { GxTextareaComponent, GxButtonComponent } from './gx-controls/gx-core/core.components';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Injectable()
export class GxService {
  customValidators: any = {};
  // components = {
  //   textarea: GxTextareaComponent
  //   , button: GxButtonComponent
  // }

  constructor(
    private fb: FormBuilder
  ) {
    console.log("gxService");
  }

  initCustomValidators(obj) {
    this.customValidators = obj;
  }

  createGenericControl(layout, parent) {
    let allValidators = this.getValidators(layout);
    let xControl = this.fb.control(layout.value || "", allValidators.validators, allValidators.asyncValidators);
    parent.setControl(layout.id, xControl);
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

  executeCustomValidation(name: string, arg: {}) {
    let f = this.customValidators[name].call(this, arg);
    return (f);
  }


  processForm(parent) {
    let myForm: any = parent;
    let meta = myForm.meta;
    let serverMeta = Object.assign({}, meta);
    delete serverMeta.client;
    let formValue = myForm.value
    formValue["meta"] = serverMeta;
    delete myForm.value.undefined;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        (<FormArray>control).controls.forEach(x => {
          this.validateAllFormFields(<FormGroup>x);
        })
      }
    });
  }

  // componentMapper(type): any {
  //   return (this.components[type]);
  // }
}
