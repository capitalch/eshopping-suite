import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EshopService } from '../eshop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  products: any[];
  productSub: any;

  constructor(private eshopService: EshopService) { }

  ngOnInit() {
    this.productSub = this.eshopService.filterOn('post:query:products:on:category').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.products = d.data,
        console.log(this.products)
      );
    });
  }

  productDetails(id)
  {
    alert("ProductID - "+ id);
  }

  ngOnDestroy()
  {
    this.productSub.unsubscribe();
  }
}
