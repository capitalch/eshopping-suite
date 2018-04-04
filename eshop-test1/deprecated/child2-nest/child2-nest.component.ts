import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'child2-nest',
  templateUrl: './child2-nest.component.html',
  styleUrls: ['./child2-nest.component.scss']
})
export class Child2NestComponent implements OnInit {
  @Input() parentControl:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let group2 = this.fb.group(
      {
        child2: ["12345"]
      });
    this.parentControl.setControl("group2", group2);
  }

}
