import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { RouterModule } from '@angular/router';
import { routes } from './emart.routes';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { TreeModule } from 'primeng/primeng';
import {RatingModule} from "ng2-rating";
import { CartComponent } from './cart/cart.component';
import { EmartService } from './emart.service';
import { CartUnitComponent } from './sub-components/cart-unit/cart-unit.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), 
    FormsModule, 
    ReactiveFormsModule,
    AngularMaterialModule,
    TreeModule,
    RatingModule,
    NgxStripeModule.forRoot('pk_test_uEMw3BrgY65tm3LXQNVfWfUq')
  ],
  declarations: [CompositeComponent, 
    ProductComponent, 
    ProductDetailsComponent,
    HeaderComponent, CategoryComponent, 
    FooterComponent, CartComponent, CartUnitComponent, PlaceOrderComponent,FilterComponent, LoginComponent, SignupComponent
  ],
  providers:[EmartService]
})
export class EmartModule { }
