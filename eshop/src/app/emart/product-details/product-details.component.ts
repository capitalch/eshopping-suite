import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navUrls } from '../emart.config';
import { RatingModule } from "ng2-rating";
import { BrokerService } from '../../service/broker.service';
import { httpMessages } from '../../app.config';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  //productId:number;
  product: any = {};
  subs: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) {
    this.activatedRoute.params.subscribe(param => {
      this.product.id = param.id;
      console.log(param.id);
      // this.product = JSON.parse(param.product);
    });
  }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.productDetailsOnId).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.product = d.data[0]
      );
    });
    this.brokerService.httpPost(httpMessages.productDetailsOnId, { id: null, params: [this.product.id] });
  }

  changeDisplayImage(url) {
    // this.displayImage = url;
  }

  back() {
    window.history.back();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
