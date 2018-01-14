import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild("div1") div1;
  onResize(e){
    console.log('resize');
    let size = this.div1.nativeElement.getBoundingClientRect();
    console.log('Size:',size);
  }
}
