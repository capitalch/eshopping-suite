import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AppService } from './service/app.service';
import { BrokerService } from './service/broker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
    , BrowserAnimationsModule
    , HttpClientModule
  ],
  providers: [AppService, BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
