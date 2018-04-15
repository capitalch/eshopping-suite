import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
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
  subs: any;
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
    this.content = "This is code";
    this.handleChildEvents();
  }

  handleChildEvents() {
    this.subs = this.brokerService.filterOn("submit1").subscribe(d =>
      d.error ? (console.log(d.error)) : (console.log(d.data.value))
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
