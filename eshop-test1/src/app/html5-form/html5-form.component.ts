import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-html5-form',
  templateUrl: './html5-form.component.html',
  styleUrls: ['./html5-form.component.scss']
})
export class Html5FormComponent implements OnInit {
  myForm: FormGroup;
  mat:string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mat="mat-raised-button";
    this.myForm = this.fb.group(
      {
        myName: ""
        , food: this.fb.group(
          {
            starter: false
            , mainCourse: false
            , desert: false
          })
      });
  }

  submit() {
    // console.log(f);
  }
  isError:boolean=true;
  toggle(){
    this.isError= !this.isError;
  }
}
