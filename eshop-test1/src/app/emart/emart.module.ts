import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { EmartComponent } from './emart.component';
import { FooterComponent } from './footer/footer.component';
// import { BodyComponent } from './body/body.component';
import {routes} from './emart.routes';
// import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ],
  exports: [
    EmartComponent
  ],
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    CategoryComponent,
    HeaderComponent,
    EmartComponent,
    FooterComponent]
})
export class EmartModule { }
