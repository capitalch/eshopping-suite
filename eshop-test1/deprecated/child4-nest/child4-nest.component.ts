import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'child4-nest',
  templateUrl: './child4-nest.component.html',
  styleUrls: ['./child4-nest.component.scss']
})
export class Child4NestComponent implements OnInit {
  @Input() parentControl: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let group1 = this.fb.group({
      check1: [false],
      check2: [true]
    });
    this.parentControl.setControl("myArray", this.fb.array([group1]));
  }

}
