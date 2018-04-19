import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';

@Component({
  selector: 'jx-group',
  templateUrl: './jx-group.component.html',
  styleUrls: ['./jx-group.component.scss']
})
export class JxGroupComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  @Input() idx:string="";
  constructor(private fb: FormBuilder, private jxService: JxService) { }

  ngOnInit() {
    let childControls = {};
    this.layout.controls && this.layout.controls.forEach(e => {
      let allValidators = this.jxService.getValidators(e);
      childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
    });
    let validator = ()=>{
      return({groupValidation:false});
    }
    let allValidators = this.jxService.getValidators(this.layout);
    let group = this.fb.group(childControls,{validator:allValidators.validators, asyncValidator:allValidators.asyncValidators});
    // let group = this.fb.group(childControls);
    this.parent.setControl(this.layout.id, group);
  }
}
