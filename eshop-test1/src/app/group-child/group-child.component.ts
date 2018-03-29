import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group-child.component.scss']
})
export class GroupChildComponent implements OnInit {
  @Input() layout: any;
  @Input() myForm: any;
  constructor() { }

  ngOnInit() {
  }

}
