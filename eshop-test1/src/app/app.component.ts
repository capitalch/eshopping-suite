import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myLayout: any = {};
  content:string;
  ngOnInit() {
    this.myLayout = {
      firstName: ''
    };
    this.content = "This is code"
  }
}
