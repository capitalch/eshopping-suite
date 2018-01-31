import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { httpMessages, localMessages } from '../../app.config';
import { BrokerService } from '../../service/broker.service';
import { Router } from '@angular/router';
import { navUrls } from '../emart.config';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {
  subs: any;
  searchString: string = '';
  constructor(private brokerService: BrokerService, private router:Router,private appService:AppService) { 
    console.log('header');
  }

  ngOnInit() {
    // this.appService.getCartCount();
  }

  doSearch() {
    let artifact;
    this.searchString ?
      (artifact = httpMessages.searchProductsCategoriesOnCriteria)
      : (artifact = httpMessages.categoriesWithCount);
    this.brokerService.httpPost(httpMessages.headerToCategory, { id: artifact, params: [this.searchString, this.searchString] },null, this.searchString);
  }

  showCart(){
    this.router.navigate([navUrls.cart]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
