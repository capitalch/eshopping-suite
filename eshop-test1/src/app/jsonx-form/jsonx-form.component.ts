import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';
// import { JsonFormService } from './json-form.service';

@Component({
  selector: 'jsonx-form',
  templateUrl: './jsonx-form.component.html',
  styleUrls: ['./jsonx-form.component.scss']
})
export class JsonxFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private formService: JsonFormService) {
    console.log('constructor form');
  }

  ngOnInit() {
    let formControls = {};
    formControls["child0"] = [""];
    // formControls["group1"] = this.fb.group(
    //   {
    //     child1: ["12345"]
    //   });
    this.myForm = this.fb.group(formControls);
  }

  submit() {
    console.log(this.myForm.value);
  }

}
