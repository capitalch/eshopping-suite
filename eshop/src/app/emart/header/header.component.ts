import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { navUrls, httpMessages, localMessages } from '../emart.config';
import { AppService } from '../../service/app.service';
import { EmartService } from '../emart.service';
import { Pop } from './populate-test-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  subs: any;
  searchString: string = '';
  artifact = '';
  constructor(private emartService: EmartService, private brokerService: BrokerService, private appService: AppService, private router: Router) {
  }

  ngOnInit() {
  }

  doSearch() {
    this.searchString ?
      (this.artifact = httpMessages.searchProductsCategoriesOnCriteria)
      : (this.artifact = httpMessages.categoriesWithCount);
    this.brokerService.httpPost(httpMessages.headerToCategory, { id: this.artifact, params: [this.searchString, this.searchString] }, null, this.searchString);
  }

  populate() {
    Pop.doPopulate();
  }

  clearSearchString()
  {
    this.searchString = "";
    this. artifact = httpMessages.categoriesWithCount;
    this.brokerService.httpPost(httpMessages.headerToCategory, { id: this.artifact, params: [this.searchString, this.searchString] }, null, this.searchString);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
