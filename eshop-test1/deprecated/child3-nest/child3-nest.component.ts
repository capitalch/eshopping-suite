import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'child3-nest',
  templateUrl: './child3-nest.component.html',
  styleUrls: ['./child3-nest.component.scss']
})
export class Child3NestComponent implements OnInit {
  @Input() parentControl:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    let group3 = this.fb.group(
      {
        child3: ["abcdef"]
      });
    this.parentControl.setControl("group3", group3);
  }

}
