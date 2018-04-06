import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'jx-form',
  templateUrl: './jx-form.component.html',
  styleUrls: ['./jx-form.component.scss']
})
export class JxFormComponent implements OnInit {

  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];
  constructor(private fb: FormBuilder, private JxFormService: JxFormService) { }

  ngOnInit() {

    console.log("init called");
    // setTimeout(() => {
    //   this.init();
    // }, 0);
    this.init();
  }

  init() {
    let formControls = {};
    this.layouts.forEach(x => {
      if (x.type == 'groupArray') {

      } else if (x.type == "checkboxGroup") {

      } else if (x.type == "group") {

      }
      else {
        let allValidators = this.JxFormService.getValidators(x);
        formControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];
      }
    });
    this.myForm = this.fb.group(formControls);
  }

  submit(actionName) {
    console.log(this.myForm.valid);
    this.validateAllFormFields(this.myForm);
    if (this.myForm.valid) {
      console.log('form submitting');
      this.JxFormService.executeAction(actionName, this.myForm);
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

  addGroupInArray(layout) {
    let childControls = {};
    layout.group.controls && layout.group.controls.forEach(e => {
      if (e.type == "checkboxGroup") {

      } else if (e.type == "group") {

      } else {
        let allValidators = this.JxFormService.getValidators(e);
        childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators];
      }
    });
    let group = this.fb.group(childControls);
    let groupArray = <FormArray>this.myForm.get(layout.id);
    groupArray.push(group);
  }

}
