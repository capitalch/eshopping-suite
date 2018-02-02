import { Component } from '@angular/core';
import { AppService } from './service/app.service';

//import {}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private appService:AppService) { 
    console.log('app.component');
  }
}
