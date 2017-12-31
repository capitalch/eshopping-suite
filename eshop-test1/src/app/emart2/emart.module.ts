import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TreeModule } from 'primeng/primeng';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from './emart.routes';
import { CompositeComponent } from './composite/composite.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    TreeModule
  ],
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    CategoryComponent,
    HeaderComponent,
    // EmartComponent,
    FooterComponent,
    CompositeComponent]
})

export class EmartModule { }
