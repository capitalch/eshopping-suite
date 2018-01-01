import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrokerService } from '../../service/broker.service';
import { httpMessages, localMessages } from '../../app.config';
import { settings } from '../emart.config';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  subs: any;
  pageNo: number = 1;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) { }

  ngOnInit() {
    // console.log('product init');
    this.subs = this.brokerService.filterOn(httpMessages.getProductsOnCategory).subscribe(d => {
      d.error ? console.log(d.error) : (console.log(d.data));
    });

    let sub1 = this.brokerService.filterOn(localMessages.getsettings).subscribe(d => {
      this.activatedRoute.params.subscribe(params => {
        let catId = params.catId;
        let pageSize = +settings.productPageSize;
        let offSet = (this.pageNo - 1) * pageSize  ;
        this.brokerService.httpPost(httpMessages.getProductsOnCategory, { params: [catId, offSet, pageSize] })
      });
    });

    this.subs.add(sub1);
    // this.activatedRoute.params.subscribe(params => {
    //   let catId = params.catId;
    //   this.brokerService.httpPost(httpMessages.getProductsOnCategory, { params: [catId] })
    // });
    // MatPaginator
  }

  nav() {
    this.router.navigate(['emart/composite/productDetails'])
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
