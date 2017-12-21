import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { JbodyComponent } from './jbody/jbody.component';
import { JcategoryComponent } from './jcategory/jcategory.component';
import { JproductComponent } from './jproduct/jproduct.component';
import { JproductDetailsComponent } from './jproduct-details/jproduct-details.component';

@NgModule({
  declarations: [
    AppComponent, JbodyComponent, JcategoryComponent, JproductComponent, JproductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
