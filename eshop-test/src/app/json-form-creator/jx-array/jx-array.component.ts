import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'app-jx-array',
  templateUrl: './jx-array.component.html',
  styleUrls: ['./jx-array.component.scss']
})
export class JxArrayComponent implements OnInit {

  @Input() layout: any;
  @Input() parent: FormGroup;
  constructor(private fb: FormBuilder, private JxFormService: JxFormService) { }

  ngOnInit() {

    let childControls = {};
    this.layout.group.controls && this.layout.group.controls
      .forEach(e => {
        if ((e.type == "checkboxGroup") && e.options) {

        } else {
          let allValidators = this.JxFormService.getValidators(e);
          childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
        }

      });
    let group1 = this.fb.group(childControls);
    this.parent.setControl(this.layout.id, this.fb.array([group1]));
  }

  removeFromArray(j) {
    let groupArray = <FormArray>this.parent.get(this.layout.id);
    groupArray.removeAt(j);
  }

}