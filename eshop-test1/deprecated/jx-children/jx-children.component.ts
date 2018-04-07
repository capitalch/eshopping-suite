import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jx-children',
  templateUrl: './jx-children.component.html',
  styleUrls: ['./jx-children.component.scss']
})
export class JxChildrenComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
