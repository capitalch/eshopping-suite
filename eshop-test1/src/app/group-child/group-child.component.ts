import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group-child.component.scss']
})
export class GroupChildComponent implements OnInit {
  @Input() layout:any;
  @Input() fb:FormBuilder;
  @Input() myForm:any;
  constructor() { }

  ngOnInit() {
    let i = 9;
  }

  ngAfterViewInit() {
  }

}
