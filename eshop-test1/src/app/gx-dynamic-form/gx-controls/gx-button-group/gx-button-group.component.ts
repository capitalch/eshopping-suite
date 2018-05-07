import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gxbutton-group',
  templateUrl: './gx-button-group.component.html',
  styleUrls: ['./gx-button-group.component.scss']
})
export class GxButtonGroupComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
