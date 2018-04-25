import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { form1 } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Form Creator';
  // myLayout: any = {};
  // options: any = {};
  // content: string;

  constructor(){}

  ngOnInit() {
    // this.options = {
    //   wrapperClass: "form-style-1"
    // };
    
    // this.myLayout = form1;
    // this.content = "This is code"
  }

  // myValidate(s) {
  //   let func = (control: FormControl) => {
  //     return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
  //   };
  //   return (func);
  // }

  // selectRequiredValidator(def) {
  //   let func = (control: FormControl) => {
  //     return ((control.value == def) ? { selectRequired: true } : null);
  //   }
  //   return (func);
  // }

}
