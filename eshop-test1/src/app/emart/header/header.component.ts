import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { httpMessages, localMessages } from '../../app.config';
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
    let httpMessage = httpMessages.getCategoriesWithCount;
    this.searchString && (httpMessage = httpMessages.searchCategoriesProductsOnInput);
    this.brokerService.httpPost(httpMessages.searchSpecificOrReturnAll, { id: httpMessage, params: [this.searchString, this.searchString] });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
