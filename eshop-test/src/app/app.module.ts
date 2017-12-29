import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { Tree1Component } from './tree1/tree1.component';
// import { TreeModule } from 'angular-tree-component';
import { EshopService } from './eshop.service';
import {TreeNode,TreeModule} from 'primeng/primeng';
import { ManualTreeComponent } from './manual-tree/manual-tree.component';
import { UiTreeComponent } from './ui-tree/ui-tree.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import {PaginationService} from './pagination.service';
// import { TreeNode } from '@angular/router/src/utils/tree';
@NgModule({
  declarations: [
    AppComponent,
    Tree1Component,
    ManualTreeComponent,
    UiTreeComponent,
    BodyContentComponent,
    HeaderContentComponent,
    CategoriesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes),
    TreeModule, HttpClientModule
  ],
  providers: [EshopService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
