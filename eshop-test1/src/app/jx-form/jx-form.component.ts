import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';

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
  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService) { }

  ngOnInit() {
    let formControls = {};
    this.layouts.forEach(x => {
      if (x.type == 'groupArray') {

      }  else if(x.type == "checkboxGroup"){

      }
      else {
        let allValidators = this.jsonFormService.getValidators(x);
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
}
