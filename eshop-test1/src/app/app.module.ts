import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppService } from './service/app.service';
import { BrokerService } from './service/broker.service';
import { AppComponent } from './app.component';
import { EmartModule } from './emart/emart.module';
import { routes } from './app.routes';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Composite1Component } from './composite1/composite1.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Composite1Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule,
    AngularMaterialModule, HttpClientModule
    // , EmartModule
  ],
  providers: [AppService, BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
