import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../service/gx.service';

@Component({
  selector: 'app-gx-group'
  , templateUrl: './gx-group.component.html'
  , styleUrls: ['./gx-group.component.scss']
  // , changeDetection: ChangeDetectionStrategy.OnPush
})
export class GxGroupComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  thisGroup: FormGroup;
  constructor(
    private fb: FormBuilder
    , private gxService: GxService
  ) { }

  ngOnInit() {
    const groupValidators = this.gxService.getGroupValidators(this.layout);
    this.thisGroup = this.fb.group({}, { validator: groupValidators.validator, asyncValidator: groupValidators.asyncValidator });
    this.parent.setControl(this.layout.id, this.thisGroup);
  }

}
