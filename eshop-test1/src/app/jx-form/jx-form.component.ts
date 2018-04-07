import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxFormService } from '../jx-form.service';
import { BrokerService } from '../broker.service';

@Component({
  selector: 'jx-form',
  templateUrl: './jx-form.component.html',
  styleUrls: ['./jx-form.component.scss']
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class JxFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];
  constructor(private fb: FormBuilder, private jxFormService: JxFormService, private brokerService: BrokerService) { }

  ngOnInit() {
    this.init();
    // this.myForm = this.fb.group({});
  }

  init() {
    let formControls = {};
    this.layouts.forEach(x => {
      let allValidators = this.jxFormService.getValidators(x);
      formControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];

    });
    this.myForm = this.fb.group(formControls);
  }

  submit(actionName) {
    console.log(this.myForm.valid);
    this.validateAllFormFields(this.myForm);
    if (this.myForm.valid) {
      console.log('form submitting');
      this.jxFormService.executeAction(actionName, this.myForm);
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
        let allValidators = this.jxFormService.getValidators(e);
        childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators];
      }
    });
    let group = this.fb.group(childControls);
    let groupArray = <FormArray>this.myForm.get(layout.id);
    groupArray.push(group);
  }
}
