import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { RouterModule } from '@angular/router';
import { routes } from './emart.routes';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { TreeModule } from 'primeng/primeng';
import {RatingModule} from "ng2-rating";
import { CartComponent } from './cart/cart.component';
import { EmartService } from './emart.service';
import { CartUnitComponent } from './sub-components/cart-unit/cart-unit.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), 
    FormsModule, 
    AngularMaterialModule,
    TreeModule,
    RatingModule
  ],
  declarations: [CompositeComponent, 
    ProductComponent, 
    ProductDetailsComponent,
<<<<<<< HEAD
    HeaderComponent, CategoryComponent, FooterComponent, CartComponent, CartUnitComponent
  ],
  providers:[EmartService]
=======
    HeaderComponent, CategoryComponent, FooterComponent, CartComponent, FilterComponent
  ]
>>>>>>> 6dfea9f71f51ae4894db0b9ea13f4bb4b6d6e589
})
export class EmartModule { }
