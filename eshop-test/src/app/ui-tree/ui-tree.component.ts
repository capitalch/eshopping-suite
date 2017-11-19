import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ui-tree',
  templateUrl: './ui-tree.component.html',
  styleUrls: ['./ui-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiTreeComponent implements OnInit {
  @Input('data') items: Array<Object>;
  @Input('key') key: string;
  constructor() { }

  ngOnInit() {
  }

}
