import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-form',
  templateUrl: './mat-form.component.html',
  styleUrls: ['./mat-form.component.scss']
})
export class MatFormComponent implements OnInit {
  form:any;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({});
  }

}
