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
  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private formService: JsonFormService) {
    console.log('constructor form');
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    let formControls = {};
    this.layouts.forEach(x => {

      if (x.type == "group") {
        let childCtrls = {};
        x.controls && x.controls.forEach(c => {
          // let allValidators = this.getValidators(c);
          if (c.type == 'groupArray') {
            let childControls1 = {};
            c.group.controls && c.group.controls.forEach(d => {
              childControls1[d.id] = [d.value];
            });
            let group1 = this.fb.group(childControls1);
            childCtrls[c.id] = <FormArray>this.fb.array([
              group1]);
          } else {
            childCtrls[c.id] = [c.value];
          }
        });
        formControls[x.id] = this.fb.group(childCtrls);
      }
    })
    this.myForm = this.fb.group(formControls);
  }

  ngAfterViewInit() {
  }

  addGroupInArray(layout, controlInGroup) {
    let childControls1 = {};
    controlInGroup.group.controls && controlInGroup.group.controls.forEach(d => {
      childControls1[d.id] = [d.value];
    });
    let group1 = this.fb.group(childControls1);
    let groupArray = <FormArray>this.myForm.get(layout.id).get(controlInGroup.id);
    groupArray.push(group1);
  }

  removeGroupFromArray(layout, controlInGroup, j) {
    let groupArray = <FormArray>this.myForm.get(layout.id).get(controlInGroup.id);
    groupArray.removeAt(j);
  }
}
