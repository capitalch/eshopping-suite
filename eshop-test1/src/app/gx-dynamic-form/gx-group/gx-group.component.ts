import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gx-group',
  templateUrl: './gx-group.component.html',
  styleUrls: ['./gx-group.component.scss']
})
export class GxGroupComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  thisGroup:FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.thisGroup = this.fb.group({});
    this.parent.setControl(this.layout.id, this.thisGroup);
  }

}
