import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() schema: any = {};
  @Input() config: any = {};
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    console.log('form constructor');
  }

  ngOnInit() {
    console.log('form init');
    // this.myForm = this.fb.group({
    //   firstName: ''
    // });

    this.myForm = this.fb.group(this.schema);
    // console.log(this.dataObject);
  }

  doSubmit() {
    this.config.onSubmit(this.myForm.value);
    // console.log('submit');
    // console.log(this.myForm.valid);
    // console.log(this.myForm.value);
  }

}
