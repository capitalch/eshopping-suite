import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ImplementationModule} from './implementation/implementation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,ImplementationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
