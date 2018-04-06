import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'jx-stub',
  templateUrl: './jx-stub.component.html',
  styleUrls: ['./jx-stub.component.scss']
})
export class JxStubComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  @Input() parentType: string;
  constructor(private fb: FormBuilder, private jxFormService: JxFormService) { }

  ngOnInit() {
    let formControls = {};
    if (this.layout.type == 'groupArray') {

    } else if (this.layout.type == "checkboxGroup") {

    } else if (this.layout.type == "group") {

    }
    else {
      let allValidators = this.jxFormService.getValidators(this.layout);
      formControls[this.layout.id] = [this.layout.value, allValidators.validators, allValidators.asyncValidators];
    }
    if (this.parentType == "form") {
      this.parent = this.fb.group(formControls);
    } else if (this.parentType == "group") {
      let group1 = this.fb.group(formControls);
      this.parent.setControl(this.layout.id, group1)
    }

  }
}
