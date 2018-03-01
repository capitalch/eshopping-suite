import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild("div1") div1;
  myDataObject: any = {};
  constructor(private appService: AppService) {
    console.log('app constructor');
    
  }

  ngOnInit() {
    console.log('app init');
    this.myDataObject={
      firstName:'',
      lastName:''
    }
  }

  onResize(e) {
    console.log('resize');
    let size = this.div1.nativeElement.getBoundingClientRect();
    console.log('Size:', size);
  }

  addToCart() {
    this.appService.addToCart();
  }
}
