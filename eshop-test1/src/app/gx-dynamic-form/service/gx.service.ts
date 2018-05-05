import { Injectable } from '@angular/core';
import { GxTextareaComponent, GxButtonComponent } from '../gx-controls/gx-core/core.components';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GxGroupComponent } from '../gx-group/gx-group.component';
import { GxArrayComponent } from '../gx-array/gx-array.component';
import { GxButtonGroupComponent } from '../gx-controls/gx-button-group/gx-button-group.component';
import { IbukiService } from './ibuki.service';
import { Observable } from 'rxjs/Observable';
// import { BrokerService } from '../../broker.service';

@Injectable()
export class GxService {
  customValidators: any = {};
  options: any;

  constructor(
    private fb: FormBuilder
    , private ibukiService: IbukiService
  ) {
  }

  registerOptions(opts) {
    this.options = opts;
  }

  registerCustomValidators(obj) {
    this.customValidators = obj;
  }

  createGenericControl(layout, parent) {
    const allValidators = this.getValidators(layout);
    const xControl = this.fb.control(layout.value || '', allValidators.validators, allValidators.asyncValidators);
    parent.setControl(layout.id, xControl);
  }

  createCheckboxGroupControl(layout, parent, options) {
    const childControls = {};
    options.forEach(e => {
      childControls[e.id] = e.value;
    });
    parent.setControl(layout.id, this.fb.group(childControls,
      {
        validator: layout.validation && layout.validation.required
          && this.checkboxGroupRequiredValidator
      }));

    // const f = (opts) => {
    //   opts.forEach(e => {
    //     childControls[e.id] = e.value;
    //   });
    //   parent.setControl(layout.id, this.fb.group(childControls,
    //     {
    //       validator: layout.validation && layout.validation.required
    //         && this.checkboxGroupRequiredValidator
    //     }));
    // };
    // if (options instanceof Observable) {
    //   const sub = options.subscribe(d => {
    //     f(d);
    //   });
    // } else {
    //   f(options);
    // }
  }

  getOptions1(layout) {
    let ret;
    if (typeof (layout.options) === 'string') {
      const optionsName = layout.options;
      const temp = this.options[optionsName];
      if (typeof (temp) === 'function') {
        ret = temp();
      } else {
        ret = temp;
      }
    } else {
      ret = layout.options;
    }
    return (ret);
  }

  getOptions(layout) {
    let ret;
    if (typeof (layout.options) === 'string') {
      const optionsName = layout.options;
      const temp = this.options[optionsName]; // this.gxService.getOptions(layout.options);
      if (temp instanceof Observable) {
        temp.subscribe(x => {
          ret = x;
          // this.ref.markForCheck(); //forceful change detector
        });
      } else if (typeof (temp) === 'function') {
        ret = temp();
      } else {
        ret = temp;
      }
    } else {
      ret = layout.options;
    }
    return (ret);
  }

  checkboxGroupRequiredValidator(group) {
    let valid = false;
    Object.values(group.controls).forEach((x: any) => {
      valid = x.value || valid;
    });
    return (valid ? null : { required: true });
  }

  getGroupValidators(layout) {
    const validators = {
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
    const allValidators = {
      validators: [],
      asyncValidators: []
    };

    const a = layout.validation && Object.keys(layout.validation).map(x => {

      switch (x) {
        case 'required':
          (layout.type in { checkbox: '' }) ? allValidators.validators.push(Validators.requiredTrue)
            : allValidators.validators.push(Validators.required);
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
          const validatorName = x;
          const arg = layout.validation[x].arg;
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
    const f = this.customValidators[name].call(this, arg, parent);
    return (f);
  }

  processForm(parent) {
    const myForm: any = parent;
    const meta = myForm.meta;
    const serverMeta = Object.assign({}, meta);
    delete serverMeta.client;
    const formValue = myForm.value;
    formValue['meta'] = serverMeta;
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
        });
      }
    });
  }

}
