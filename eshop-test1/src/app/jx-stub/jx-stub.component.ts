import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'jx-stub',
  templateUrl: './jx-stub.component.html',
  styleUrls: ['./jx-stub.component.scss']
})
export class JxStubComponent implements OnInit {
  @Input() layouts: any;
  @Input() layout:any;
  @Input() parent: any;
  @Input() parentType: string;
  constructor(private fb: FormBuilder, private jxFormService: JxFormService) { }

  ngOnInit() {
    this.init();
    // let childControls = {};

    // let allValidators = this.jxFormService.getValidators(this.layout);
    // childControls[this.layout.id] = [this.layout.value, allValidators.validators, allValidators.asyncValidators];

    // if (this.parentType == "form") {
    //   this.parent = this.fb.group(formControls);
    // } else if (this.parentType == "group") {
    // let group1 = this.fb.group(childControls);
    // this.parent.setControl(this.layout.id, group1)
    // }

  }
  init() {
    let childControls = {};
    if (this.parentType == "form") {
      
      this.layouts.forEach(x => {
        let allValidators = this.jxFormService.getValidators(x);
        childControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];
      });
      this.parent = this.fb.group(childControls);
    } else {
      this.layout.controls && this.layout.controls.forEach(e => {
        let allValidators = this.jxFormService.getValidators(e);
        childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
      });

      let group1 = this.fb.group(childControls);
      this.parent = <FormGroup> this.parent;
      this.parent.setControl(this.layout.id, group1)
    }

    // this.layout.controls && this.layout.controls.forEach(e => {
    //   let allValidators = this.jxFormService.getValidators(e);
    //   childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
    // });
    // let group1 = this.fb.group(childControls);
    // this.parent.setControl(this.layout.id, group1)
  }
}
