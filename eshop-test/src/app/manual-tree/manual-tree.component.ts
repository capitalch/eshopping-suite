import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UiTreeComponent} from '../ui-tree/ui-tree.component';
@Component({
  selector: 'app-manual-tree',
  templateUrl: './manual-tree.component.html',
  styleUrls: ['./manual-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManualTreeComponent implements OnInit {
  name:string;
  key: string = 'categories';
  data: Array<Object> = [
    {
      name: "Beverages",
      categories: [
          {
            name: "Pepsi",
            categories: []
          },
          {
            name: "CocaCola",
            categories: [
                {
                  name: "Coke Diet",
                  categories: []
                },
                {
                  name: "Coke Zero",
                  categories: []
                }
              ]
          }
        ]
    },
    {
      name: "Footwear",
      categories: [
          {
            name: "Sneakers",
            categories: []
          }
        ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
