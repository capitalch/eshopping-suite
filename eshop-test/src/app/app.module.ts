import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { Tree1Component } from './tree1/tree1.component';
import { TreeModule } from 'angular-tree-component';
=======
import {EshopService} from './eshop.service';
>>>>>>> e8c9e16490e13f92dcb44908ae2fb381c28c110c

@NgModule({
  declarations: [
    AppComponent,
    Tree1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
<<<<<<< HEAD
    TreeModule
=======
    HttpClientModule
>>>>>>> e8c9e16490e13f92dcb44908ae2fb381c28c110c
  ],
  providers: [EshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
