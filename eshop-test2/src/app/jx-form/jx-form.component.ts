import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { BrokerService } from '../broker.service';
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
  errorMessages: any[] = [];
  constructor(private fb: FormBuilder, private jxService: JxService) { }

  ngOnInit() {
    let formControls = {};
    //handle the meta element
    let metaIndex = _.findIndex(this.layouts, (x) => x.type == 'meta');
    const meta = this.layouts[metaIndex];
    
    this.layouts.splice(metaIndex, 1);
    this.layouts.forEach(x => {
      let allValidators = this.jxService.getValidators(x);
      formControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];
    });
    this.myForm = this.fb.group(formControls);
    this.myForm["meta"] = meta;
    // this.jxService.setForm(this.myForm);
  }
}
