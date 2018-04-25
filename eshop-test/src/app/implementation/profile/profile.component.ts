import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { form1 } from '../form-json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title = 'Form Creator';
  myLayout: any = {};
  options: any = {};
  content: string;

  constructor() { }

  ngOnInit() {
    this.options = {
      wrapperClass: "form-style-1"
    };
    
    this.myLayout = form1;
  }

  myValidate(s) {
      let func = (control: FormControl) => {
        return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
      };
      return (func);
    }
  
    selectRequiredValidator(def) {
      let func = (control: FormControl) => {
        return ((control.value == def) ? { selectRequired: true } : null);
      }
      return (func);
    }

}
