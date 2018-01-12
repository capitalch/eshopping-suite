import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TreeModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { routes } from './emart.routes';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import {RatingModule} from 'ng2-rating'

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),AngularMaterialModule,
    FormsModule,TreeModule,RatingModule
  ],
  declarations: [CompositeComponent, ProductComponent, ProductDetailsComponent, HeaderComponent, CategoryComponent]
})
export class EmartModule { }
