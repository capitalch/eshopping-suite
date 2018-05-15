import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../service/gx.service';

@Component({
  selector: 'app-gx-spec-group',
  templateUrl: './gx-spec-group.component.html',
  styleUrls: ['./gx-spec-group.component.scss']
})
export class GxSpecGroupComponent implements OnInit {
  
  @Input() parent: FormGroup;
  @Input() layout: any;
  thisGroup: FormGroup;
  counter: number = 1;

  constructor(private fb: FormBuilder, private gxService: GxService) 
  { }

  ngOnInit() {
    const groupValidators = this.gxService.getGroupValidators(this.layout);
    this.thisGroup = this.fb.group({}, { validator: groupValidators.validator, asyncValidator: groupValidators.asyncValidator });
    this.parent.setControl(this.layout.id, this.thisGroup);
  }

  addControl(layout)
  {
    console.log(layout);
    layout.controls.push({type:'specinput',subtype:'text', id: 'key'+this.counter , value:' ', validation: {required: { message: '$ is required' }}});
    layout.controls.push({type:'specinput',subtype:'text', id: 'value'+this.counter , value:' ', validation: {required: { message: '$ is required' }}});
    this.counter++;
  }
}
