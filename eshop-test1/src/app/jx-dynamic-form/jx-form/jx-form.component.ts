import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import * as _ from "lodash";

@Component({
  selector: 'jx-form',
  templateUrl: './jx-form.component.html',
  styleUrls: ['./jx-form.component.scss']
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class JxFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  meta:any;
  errorMessages: any[] = [];
  constructor(private fb: FormBuilder, private jxService: JxService) { }

  ngOnInit() {
    let formControls = {};
    //handle the meta element
    let metaIndex = _.findIndex(this.layouts, (x) => x.type == 'meta');
    this.meta = this.layouts[metaIndex];
    
    this.layouts.splice(metaIndex, 1);
    this.layouts.forEach(x => {
      let allValidators = this.jxService.getValidators(x);
      formControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];
    });
    
    let allValidators = this.jxService.getValidators(this.meta.client);
    this.myForm = this.fb.group(formControls,{validator:allValidators.validators, asyncValidator:allValidators.asyncValidators});
    
    this.myForm["meta"] = this.meta;
  }
}
