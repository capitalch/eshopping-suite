import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import { Tree1Component } from './tree1/tree1.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    Tree1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
