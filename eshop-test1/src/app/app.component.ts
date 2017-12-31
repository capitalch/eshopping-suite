import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router, private appService:AppService) {

  }
  nav(){
    console.log('Nav');
  }
}
