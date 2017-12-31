import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss']
})
export class CompositeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  nav(){
    this.router.navigate(['emart/composite/product'])
  }
}
