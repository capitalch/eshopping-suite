import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';

@Component({
  selector: 'jx-array',
  templateUrl: './jx-array.component.html',
  styleUrls: ['./jx-array.component.scss']
})
export class JxArrayComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  @Input() idx: string = "";
  constructor(private fb: FormBuilder, private jxService: JxService) { }

  ngOnInit() {
    let childControls = {};
    this.layout.group.controls && this.layout.group.controls
      .forEach(e => {
        let allValidators = this.jxService.getValidators(e);
        childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators];
      });
    let group = this.fb.group(childControls);
    this.parent.setControl(this.layout.id, this.fb.array([group]));
  }

  removeFromArray(j) {
    let groupArray = <FormArray>this.parent.get(this.layout.id);
    groupArray.removeAt(j);
  }

}
