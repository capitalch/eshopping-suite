import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  myForm: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   text1:["text1"]
    // });
    // this.myForm = this.fb.group({
    //   t1:["test1"]
    // });
    this.myForm = this.fb.group([]);
  }

}
