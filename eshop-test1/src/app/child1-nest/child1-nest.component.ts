import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'child1-nest',
  templateUrl: './child1-nest.component.html',
  styleUrls: ['./child1-nest.component.scss']
})
export class Child1NestComponent implements OnInit {
  @Input() myForm: FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    // let formControls = {};
    let group1 = this.fb.group(
      {
        child1: ["12345"]
      });
    this.myForm.setControl("group1", group1);
  }

}
