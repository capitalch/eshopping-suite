import { BrowserModule } from '@angular/platform-browser';
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
// import { TreeNode } from '@angular/router/src/utils/tree';
@NgModule({
  declarations: [
    AppComponent,
    Tree1Component,
    ManualTreeComponent,
    UiTreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TreeModule, HttpClientModule, TreeModule
  ],
  providers: [EshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
