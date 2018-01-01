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

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), 
    FormsModule, 
    AngularMaterialModule,
    TreeModule
  ],
  declarations: [CompositeComponent, 
    ProductComponent, 
    ProductDetailsComponent,
    HeaderComponent, CategoryComponent, FooterComponent
  ]
})
export class EmartModule { }
