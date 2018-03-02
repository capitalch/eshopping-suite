import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  @Input() layout: any = {};
  myFormGroup:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.layout = [
    //   {
    //     type:'text'
    //     , id:'firstname'
    //     , label:'First name'
    //     , placeHolder:'First name'
    //     , value:''
    //     , balidation:[]
    //   }
    // ]
    this.myFormGroup = this.fb.group(this.layout);
  }

}
