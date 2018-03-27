import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group-child.component.scss']
})
export class GroupChildComponent implements OnInit {
  @Input() layout: any;
  @Input() fb: FormBuilder;
  @Input() myForm: any;
  @Input() idx: string;
  // @Input() isNested:boolean;
  constructor() { }

  ngOnInit() {
    // let x = this.layout
    // let formControls = {}
    // if (x.type == 'groupArray') {
    //   let childControls = {};
    //   x.group.controls && x.group.controls.forEach(c => {
    //     // let allValidators = this.getValidators(c);
    //     childControls[c.id] = [c.value]//, allValidators.validators, allValidators.asyncValidators]
    //   });
    //   formControls[x.id] = <FormArray>this.fb.array([
    //     this.fb.group(childControls)
    //   ]);
    // }
  }

  ngAfterViewInit() {
  }

}
