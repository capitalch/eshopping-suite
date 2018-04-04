import { Component, OnInit, Input } from '@angular/core';
import { JxFormService } from '../json-form/json-form.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'groupx-array',
  templateUrl: './groupx-array.component.html',
  styleUrls: ['./groupx-array.component.scss']
})
export class GroupxArrayComponent implements OnInit {
  @Input() layout: any;
  @Input() myForm: any;
  @Input() controlInGroup: any;
  constructor(private formService: JxFormService, private fb:FormBuilder) {
    console.log('constructor array');
  }

  ngOnInit() {
    console.log('init array');
  }

}
