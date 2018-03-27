import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, Form, FormGroup  } from '@angular/forms';

@Component({
  selector: 'group-array',
  templateUrl: './group-array.component.html',
  styleUrls: ['./group-array.component.scss']
})
export class GroupArrayComponent implements OnInit {

  constructor() { }
  @Input() layout:any;
  @Input() fb:FormBuilder;
  @Input() myForm:FormGroup;
  // @Input() isNested:boolean;
  ngOnInit() {
    // let s = <any>this.myForm.get(this.layout.id).get('tags').get('0');
    // let s1 = s.controls;
    // let s2 = this.layout.controls['4'].group.controls;
  }

  removeGroupFromArray(j){
    let groupArray = <FormArray>this.myForm.get(this.layout.id);
    groupArray.removeAt(j);
  }
}
