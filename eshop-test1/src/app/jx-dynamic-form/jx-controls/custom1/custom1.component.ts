import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom1',
  templateUrl: './custom1.component.html',
  styleUrls: ['./custom1.component.scss']
})
export class Custom1Component implements OnInit {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
