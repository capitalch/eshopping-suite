import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'jx-group',
  templateUrl: './jx-group.component.html',
  styleUrls: ['./jx-group.component.scss']
})
export class JxGroupComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  constructor(private fb: FormBuilder, private JxFormService: JxFormService) { }

  ngOnInit() {
    
  }

  init() {
    let childControls = {};
    this.layout.controls && this.layout.controls.forEach(e => {
      let allValidators = this.JxFormService.getValidators(e);
      childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
    });
    if (this.layout.type == "checkboxGroup") {

    } else if (this.layout.type == "groupArray") {

    }
    else {
      let group1 = this.fb.group(childControls);
      this.parent.setControl(this.layout.id, group1)
    }
  }
}
