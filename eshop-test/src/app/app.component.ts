import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BodyContentComponent} from './body-content/body-content.component';
import {HeaderContentComponent} from './header-content/header-content.component';
import { EshopService } from './eshop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  nodes: any;
  subscription: any;

  constructor(private router: Router, private eshopService: EshopService) {

  }
  
  ngOnInit() {
   
  }
}
