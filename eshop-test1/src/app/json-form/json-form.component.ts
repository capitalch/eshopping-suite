import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() config: any = {};
  myFormGroup: FormGroup;
  builtinValidators: any = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.layouts = [{
      type: "text"
      , id: "firstName"
      , label: "First name:"
      , placeholder: "First name"
      , value: ""
      , validation: "required"
    }, {
      type: "text"
      , id: "lastName"
      , label: "Last name:"
      , placeholder: "Last name"
      , value: ""
      , validation: "required"
    }, {
      type: "text"
      , id: "email"
      , label: "Email:"
      , placeholder: "Email"
      , value: ""
      , validation: "email"
    }];
    this.config = {
      submitClass: "btn btn-primary"
    };

    let formControls = {};
    this.layouts.forEach(x => {
      formControls[x.id] = [x.value, x.validation ? Validators[x.validation] : null];
    });

    // formControls[this.layout.id] = [this.layout.value, this.layout.required ? this.builtinValidators.required : null];
    this.myFormGroup = this.fb.group(formControls);
  }

  submit() {
    console.log(this.myFormGroup.valid);
    console.log(this.myFormGroup.value);
  }

}
