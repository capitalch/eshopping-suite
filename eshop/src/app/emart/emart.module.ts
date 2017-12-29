import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TreeModule } from 'primeng/primeng';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { EmartComponent } from './emart.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from './emart.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    TreeModule
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
