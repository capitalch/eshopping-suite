import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navUrls, httpMessages } from '../emart.config';
import { RatingModule } from "ng2-rating";
import { BrokerService } from '../../service/broker.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  qa:any=[];
  reviewResponse:any=[];
  imageUrl: string;
  subs: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) {
    this.activatedRoute.params.subscribe(param => {
      this.product.id = param.id;
    });
  }

  ngOnInit() {
    let index = 0;
    this.subs = this.brokerService.filterOn(httpMessages.productDetailsOnId).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.product = d.data && d.data[0] && d.data[0].rows[0],

        this.product && this.product.product_info && (index = this.product.product_info.findIndex(p=>p.name=="label")),
        (index >=0) && this.product && this.product.product_info && this.product.product_info.splice(index,1),

        this.imageUrl = this.product && this.product.images && this.product.images[0],
        this.qa = d.data && d.data[1] && d.data[1].rows,
        
        this.reviewResponse = d.data && d.data[2] && d.data[2].rows
      );
    });
    this.brokerService.httpPost(httpMessages.productDetailsOnId, { id: null, params: [this.product.id,this.product.id, this.product.id] });
  }

  changeDisplayImage(url) {
    this.imageUrl = url;
  }

  back() {
    window.history.back();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
