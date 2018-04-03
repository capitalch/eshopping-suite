import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TreeModule } from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule
  ],
  declarations: [CompositeComponent, LoginComponent, HeaderComponent, FooterComponent, CategoryComponent]
})
export class AdminModule { }
