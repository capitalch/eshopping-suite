import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './service/app.service';
import { BrokerService } from './service/broker.service';
import { AppComponent } from './app.component';
import { EmartModule } from './emart/emart.module';
import { routes } from './app.routes';
// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent
    // ,TestComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
    // , EmartModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AppService, BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
