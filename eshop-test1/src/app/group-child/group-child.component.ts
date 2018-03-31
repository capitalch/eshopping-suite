import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';

@Component({
  selector: 'group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group-child.component.scss']
})
export class GroupChildComponent implements OnInit {
  @Input() layout: any;
  @Input() myForm: any;
  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService) { }

  ngOnInit() {

  }

  // test(controlInGroup, controlInGroupOfArray) {
  //   let v = this.myForm.get(this.layout.id).get(controlInGroup.id).controls[0].get(controlInGroupOfArray.id).valid
  // }

  addGroupInArray(layout, controlInGroup) {
    let childControls = {};

    controlInGroup.group.controls && controlInGroup.group.controls.forEach(d => {
      if (d.type == 'checkboxGroup' && d.options) {
        let childControls1 = {};
        d.options.forEach(y => {
          childControls1[y.id] = y.value;
        });
        childControls[d.id] = this.fb.group(childControls1, { validator: d.validation && d.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
      } else {
        let allValidators = this.jsonFormService.getValidators(d);
        childControls[d.id] = [d.value, allValidators.validators, allValidators.asyncValidators];
      }
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
