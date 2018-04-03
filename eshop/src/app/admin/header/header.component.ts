import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { AppService } from '../../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subs: any;
  artifact = '';
  searchString: string = '';
  constructor(private brokerService: BrokerService, private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  doSearch() {
  
  }

  populate() {

  }

  clearSearchString()
  {
    this.searchString = "";
  }

  ngOnDestroy() {

  }
}
