import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { JsonFormService } from './json-form.service';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];

  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService
  ) { }

  ngOnInit() {
    let formControls = {};
    this.layouts.forEach(x => {
      if (x.type == 'checkboxGroup' && x.options) {
        let childControls = {};
        x.options.forEach(y => {
          childControls[y.id] = y.value;
        });
        formControls[x.id] = this.fb.group(childControls, { validator: x.validation && x.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
      } else
        if (x.type == 'groupArray') {
          let childControls = {};
          x.group.controls && x.group.controls.forEach(c => {
            if ((c.type == 'checkboxGroup') && c.options) {
              let childControls1 = {};
              c.options.forEach(y => {
                childControls1[y.id] = y.value;
              });
              childControls[c.id] = this.fb.group(childControls1, { validator: c.validation && c.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
            } else {
              let allValidators = this.jsonFormService.getValidators(c);
              childControls[c.id] = [c.value, allValidators.validators, allValidators.asyncValidators]
            }
          });
          formControls[x.id] = <FormArray>this.fb.array([
            this.fb.group(childControls)
          ]);
        }
        else if (x.type == "group") {
          let childCtrls = {};
          x.controls && x.controls.forEach(c => {
            let allValidators = this.jsonFormService.getValidators(c);
            if ((c.type == 'checkboxGroup') && c.options) {
              let childControls = {};
              c.options.forEach(y => {
                childControls[y.id] = y.value;
              });
              childCtrls[c.id] = this.fb.group(childControls, { validator: c.validation && c.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
            } else if (c.type == 'groupArray') {
              let childControls1 = {};
              c.group.controls && c.group.controls.forEach(d => {
                if (d.type == 'checkboxGroup' && d.options) {
                  let childControls2 = {};
                  d.options.forEach(y => {
                    childControls2[y.id] = y.value;
                  });
                  childControls1[d.id] = this.fb.group(childControls2, { validator: d.validation && d.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
                } else {
                  let allValidators1 = this.jsonFormService.getValidators(d);
                  childControls1[d.id] = [d.value, allValidators1.validators, allValidators1.asyncValidators];
                }
              });
              let group1 = this.fb.group(childControls1);
              childCtrls[c.id] = <FormArray>this.fb.array([
                group1]);
            } else {
              childCtrls[c.id] = [c.value, allValidators.validators, allValidators.asyncValidators];
            }
          });
          formControls[x.id] = this.fb.group(childCtrls);
        }
        else {
          let allValidators = this.jsonFormService.getValidators(x);
          formControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];
        }
    });
    this.myForm = this.fb.group(formControls);
  }

  addGroupInArray(layout) {
    let childControls = {};
    layout.group.controls && layout.group.controls.forEach(c => {

      if (c.type == 'checkboxGroup' && c.options) {
        let childControls1 = {};
        c.options.forEach(y => {
          childControls1[y.id] = y.value;
        });
        childControls[c.id] = this.fb.group(childControls1, { validator: c.validation && c.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
      } else {
        let allValidators = this.jsonFormService.getValidators(c);
        childControls[c.id] = [c.value, allValidators.validators, allValidators.asyncValidators]
      }
    });
    let group = this.fb.group(childControls);
    let groupArray = <FormArray>this.myForm.get(layout.id);
    groupArray.push(group);
  }

  submit(actionName) {
    console.log(this.myForm.valid);
    this.validateAllFormFields(this.myForm);
    if (this.myForm.valid) {
      console.log('form submitting');
      this.jsonFormService.executeAction(actionName, this.myForm);
    } else {
      console.log("Invalid form");
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnDestroy() {
  }
}
