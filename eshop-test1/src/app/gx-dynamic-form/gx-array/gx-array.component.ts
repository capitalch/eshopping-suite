import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GxService } from '../gx.service';

@Component({
  selector: 'app-gx-array',
  templateUrl: './gx-array.component.html',
  styleUrls: ['./gx-array.component.scss']
})
export class GxArrayComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  constructor(
    private fb: FormBuilder
    , private gxService: GxService
  ) { }

  ngOnInit() {
    let group = this.fb.group({});
    this.parent.setControl(this.layout.id, this.fb.array([group]));
  }

  removeFromArray(j) {
    let groupArray = <FormArray>this.parent.get(this.layout.id);
    groupArray.removeAt(j);
  }

  addGroupInArray(layout) {
    let groupArray = <FormArray>this.parent.get(this.layout.id);
    let group = this.fb.group({});
    groupArray.push(group);
  }

}
