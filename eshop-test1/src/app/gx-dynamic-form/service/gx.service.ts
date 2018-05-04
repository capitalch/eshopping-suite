import { Injectable } from '@angular/core';
import { GxTextareaComponent, GxButtonComponent } from '../gx-controls/gx-core/core.components';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
// import { components } from './gx-controls/gx-dynamic/gx-component-mapper';
import { GxGroupComponent } from '../gx-group/gx-group.component';
import { GxArrayComponent } from '../gx-array/gx-array.component';
import { GxButtonGroupComponent } from '../gx-controls/gx-button-group/gx-button-group.component';
import { BrokerService } from '../../broker.service';

@Injectable()
export class GxService {
  customValidators: any = {};
  // myComponents: any;

  //   components = {
  //     textarea: GxTextareaComponent
  //     , button: GxButtonComponent
  //     , group: GxGroupComponent
  //     , array: GxArrayComponent
  //     , buttongroup:GxButtonGroupComponent
  //     // , input:InputComponent
  // }

  constructor(
    private fb: FormBuilder
    , private brokerService: BrokerService
  ) {
    // this.myComponents = components;
    // this.brokerService.filterOn("gx-component-init").subscribe(d => {
    //   console.log(d.data);
    // });
  }

  registerCustomControls(comps) {
    // this.components = Object.assign(comps, components);
    // this.brokerService.behEmit("gx-component-init",comps);
  }

  registerCustomValidators(obj) {
    this.customValidators = obj;
  }

  createGenericControl(layout, parent) {
    let allValidators = this.getValidators(layout);
    let xControl = this.fb.control(layout.value || "", allValidators.validators, allValidators.asyncValidators);
    parent.setControl(layout.id, xControl);
  }

  // getMappedComponent(compName) {
  //   return (components[compName.toLowerCase()]);
  // }

  getGroupValidators(layout) {
    let validators = {
      validator: null
      , asyncValidator: null
    };
    if (layout.validation) {
      Object.keys(layout.validation).forEach(x => {
        if (layout.validation[x].async) {
          validators.asyncValidator = this.executeCustomValidation(x, layout.validation[x].arg);
        } else {
          validators.validator = this.executeCustomValidation(x, layout.validation[x].arg);
        }
      });
    }
    return (validators);
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
    let f = this.customValidators[name].call(this, arg, parent);
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

}