import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {EshopService} from './eshop.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [EshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
