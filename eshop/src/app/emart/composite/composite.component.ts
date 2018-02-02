import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompositeComponent implements OnInit {

  collapseCategory = false;
  collapseFilter = true;
  constructor() { }

  ngOnInit() {
  }

  sideMenuClicked(menu)
  {
    switch(menu)
    {
      case 'category':
        this.collapseFilter = true;
        this.collapseCategory = !this.collapseCategory;
        break;
      case 'filter':
        this.collapseCategory = true;
        this.collapseFilter = !this.collapseFilter;
        break;
    }
  }
}
