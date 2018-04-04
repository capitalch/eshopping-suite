import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { JxFormService } from '../json-form/json-form.service';
// import { JxFormService } from './json-form.service';

@Component({
  selector: 'jsonx-form',
  templateUrl: './jsonx-form.component.html',
  styleUrls: ['./jsonx-form.component.scss']
})
export class JsonxFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private formService: JxFormService) {
    console.log('constructor form');
  }

  ngOnInit() {
    let formControls = {};
    formControls["child0"] = [""];
    formControls["child00"] = [""];
    this.myForm = this.fb.group(formControls);
  }

  submit() {
    console.log(this.myForm.value);
  }

}
