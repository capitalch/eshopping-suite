import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JxFormService } from '../jx-form.service';


@Component({
  selector: 'jx-stub-group',
  templateUrl: './jx-stub-group.component.html',
  styleUrls: ['./jx-stub-group.component.scss']
})
export class JxStubGroupComponent implements OnInit {
  @Input() layouts: any;
  @Input() layout:any;
  @Input() parent: any;
  @Input() parentType: string;
  constructor(private fb: FormBuilder, private jxFormService: JxFormService) { }

  ngOnInit() {
    let childControls = {};
    this.layout.controls && this.layout.controls.forEach(e => {
      let allValidators = this.jxFormService.getValidators(e);
      childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
    });

    let group1 = this.fb.group(childControls);
    this.parent.setControl(this.layout.id, group1)
  }

}
