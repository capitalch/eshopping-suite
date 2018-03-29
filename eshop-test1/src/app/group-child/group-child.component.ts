import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group-child.component.scss']
})
export class GroupChildComponent implements OnInit {
  @Input() layout: any;
  @Input() myForm: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  
  addGroupInArray(layout, controlInGroup) {
    let childControls = {};
    controlInGroup.group.controls && controlInGroup.group.controls.forEach(d => {
      childControls[d.id] = [d.value];
    });
    let group1 = this.fb.group(childControls);
    let groupArray = <FormArray>this.myForm.get(layout.id).get(controlInGroup.id);
    groupArray.push(group1);
  }

  removeGroupFromArray(layout, controlInGroup, j) {
    let groupArray = <FormArray>this.myForm.get(layout.id).get(controlInGroup.id);
    groupArray.removeAt(j);
  }

}
