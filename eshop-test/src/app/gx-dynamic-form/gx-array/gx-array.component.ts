import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GxService } from '../service/gx.service';

@Component({
  selector: 'app-gx-array'
  , templateUrl: './gx-array.component.html'
  , styleUrls: ['./gx-array.component.scss']
  // , changeDetection: ChangeDetectionStrategy.OnPush
})
export class GxArrayComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  constructor(
    private fb: FormBuilder
    , private gxService: GxService
  ) { }

  ngOnInit() {
    const groupValidators = this.gxService.getGroupValidators(this.layout.group);
    const group = this.fb.group({}, { validator: groupValidators.validator, asyncValidator: groupValidators.asyncValidator });
    const arrayValidators = this.gxService.getGroupValidators(this.layout);
    this.parent.setControl(this.layout.id, this.fb.array([group], arrayValidators.validator, arrayValidators.asyncValidator));
  }

  removeFromArray(j) {
    const groupArray = <FormArray>this.parent.get(this.layout.id);
    groupArray.removeAt(j);
  }

  addGroupInArray(layout) {
    const groupArray = <FormArray>this.parent.get(this.layout.id);
    const groupValidators = this.gxService.getGroupValidators(this.layout.group);
    const group = this.fb.group({}, { validator: groupValidators.validator, asyncValidator: groupValidators.asyncValidator });
    groupArray.push(group);
  }

}
