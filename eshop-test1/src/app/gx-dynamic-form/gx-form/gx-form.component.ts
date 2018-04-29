import { Component, OnInit, Input } from '@angular/core';
import { GxService } from '../gx.service';
import * as _ from "lodash";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'gx-form',
  templateUrl: './gx-form.component.html',
  styleUrls: ['./gx-form.component.scss']
})
export class GxFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  myForm: FormGroup;
  meta: any;
  constructor(
    // private gxService: GxService
    // , 
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let metaIndex = this.layouts.findIndex(x => x.type == 'meta');
    this.meta = this.layouts[metaIndex];

    this.layouts.splice(metaIndex, 1);
    this.myForm = this.fb.group([]);
  }

}
