import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { httpMessages, localMessages } from '../../app.config';
import { BrokerService } from '../../service/broker.service';
import { navUrls } from '../emart.config';
import { AppService } from '../../service/app.service';
import { EmartService } from '../emart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {
  subs: any;
  searchString: string = '';
  constructor(private emartService: EmartService, private brokerService: BrokerService, private appService: AppService) {
  }

  ngOnInit() {
  }

  doSearch() {
    let artifact;
    this.searchString ?
      (artifact = httpMessages.searchProductsCategoriesOnCriteria)
      : (artifact = httpMessages.categoriesWithCount);
    this.brokerService.httpPost(httpMessages.headerToCategory, { id: artifact, params: [this.searchString, this.searchString] }, null, this.searchString);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
