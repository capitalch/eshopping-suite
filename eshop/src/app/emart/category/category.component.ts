import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { AppService } from '../../service/app.service';
import { localMessages, httpMessages } from '../../app.config';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  subs: any;
  constructor(private brokerService: BrokerService, private appService: AppService) {

  }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.getCategoriesWithCount).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        console.log(d.data)
      );
    })
    let sub1 = this.brokerService.filterOn(localMessages.getsettings).subscribe(d => {
      console.log('categories init:');
      this.brokerService.httpPost(httpMessages.getCategoriesWithCount);
    });
    this.subs.add(sub1);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
