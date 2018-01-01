import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrokerService } from '../../service/broker.service';
import { httpMessages } from '../../app.config';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  subs: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private brokerService: BrokerService) { }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.getProductsOnCategory).subscribe(d => {
      d.error ? console.log(d.error) : (console.log(d.data));
    });

    this.activatedRoute.params.subscribe(params => {
      let catId = params.catId;
      this.brokerService.httpPost(httpMessages.getProductsOnCategory, { params: [catId] })
    });
  }

  nav() {
    this.router.navigate(['emart/composite/productDetails'])
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
