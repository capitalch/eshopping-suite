import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'group-array',
  templateUrl: './group-array.component.html',
  styleUrls: ['./group-array.component.scss']
})
export class GroupArrayComponent implements OnInit {

  constructor() { }
  @Input() layout:any;
  @Input() fb:FormBuilder;
  @Input() myForm:any;
  ngOnInit() {
  }

  removeGroupFromArray(j){
    let groupArray = <FormArray>this.myForm.get(this.layout.id);
    groupArray.removeAt(j);
  }
}
