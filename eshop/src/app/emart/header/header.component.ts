import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { httpMessages } from '../../app.config';
import { BrokerService } from '../../service/broker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {
  subs: any;
  searchString: string = '';
  constructor(private brokerService: BrokerService) { }

  ngOnInit() {
  }

  doSearch() {
    this.brokerService.httpPost(httpMessages.searchCategoriesProductsOnInput, { params: [this.searchString,this.searchString] });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
