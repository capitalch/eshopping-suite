import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonFormCreatorModule} from './json-form-creator/json-form-creator.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonFormCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
