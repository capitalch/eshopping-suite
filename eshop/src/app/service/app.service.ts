import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrokerService } from './broker.service';
import { localMessages } from '../app.config';
@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient
    , private brokerService: BrokerService
  ) {
    console.log('App service called');
    //get settings file
    httpClient
      .get('assets/settings.json')
      .subscribe(d => {
        console.log(d);
        this.brokerService.init(d);
        this.brokerService.emit(localMessages.getsettings, d);
      }, err => {
        console.log(err);
      });
  }

}
