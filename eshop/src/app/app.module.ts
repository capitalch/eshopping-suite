import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './angular-material/angular-material.module';
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
    // , AngularMaterialModule
    , HttpClientModule
  ],
  providers: [AppService, BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
