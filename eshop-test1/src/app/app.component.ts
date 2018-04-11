import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { form1 } from './app.config';
import { JxService } from './jx-service/jx.service';
import { BrokerService } from './broker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myLayout: any = {};
  options: any = {};
  content: string;

  constructor(private JxFormService: JxService, private brokerService: BrokerService) {
    
  }

  /*
  class property
  class:{group:"class for group", label:"class for label", element:"class for element"}
  */

  ngOnInit() {
    this.options = {
      wrapperClass: "form-style-1"
    };
    this.myLayout = form1;
    this.content = "This is code"
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
