import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GxService } from '../service/gx.service';
// import * as _ from "lodash";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gx-form',
  templateUrl: './gx-form.component.html'
  , styleUrls: ['./gx-form.component.scss']
  // , changeDetection: ChangeDetectionStrategy.OnPush
})
export class GxFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  myForm: FormGroup;
  meta: any;
  constructor(
    private gxService: GxService
    , private fb: FormBuilder
  ) { }

  ngOnInit() {
    const metaIndex = this.layouts.findIndex(x => x.type === 'meta');
    this.meta = this.layouts[metaIndex];

    this.layouts.splice(metaIndex, 1);
    const allValidators = this.gxService.getValidators(this.meta.client);
    this.myForm = this.fb.group({}, { validator: allValidators.validators, asyncValidator: allValidators.asyncValidators });
  }

}
