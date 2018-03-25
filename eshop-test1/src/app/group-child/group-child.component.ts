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
  @Input() idx:string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
