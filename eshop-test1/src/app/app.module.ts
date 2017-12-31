import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppService } from './service/app.service';
import { BrokerService } from './service/broker.service';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
// import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent
    // ,CategoryComponent
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
