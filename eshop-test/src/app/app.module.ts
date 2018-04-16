import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonFormCreatorModule} from './json-form-creator/json-form-creator.module';
import { AppComponent } from './app.component';
// import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonFormCreatorModule
    // ,AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
