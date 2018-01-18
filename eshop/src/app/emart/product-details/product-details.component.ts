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
  product: any = {images:[]};
  qa:any=[];
  reviewResponse:any=[];
  subs: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) {
    this.activatedRoute.params.subscribe(param => {
      this.product.id = param.id;
      console.log(param.id);
    });
  }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.productDetailsOnId).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.product = d.data && d.data[0].rows[0],
        console.log('product:',this.product),
        this.qa = d.data && d.data[1].rows,
        console.log('qa:',this.qa),
        this.reviewResponse = d.data && d.data[2].rows,
        console.log('Review Response:',this.reviewResponse)
      );
    });
    this.brokerService.httpPost(httpMessages.productDetailsOnId, { id: null, params: [this.product.id,this.product.id, this.product.id] });
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
