import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  private sampleForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.sampleForm = new FormGroup(
      {
        'name': new FormControl(),
        'email': new FormControl(),
        'age': new FormControl(),
        'address': new FormGroup({
        'country': new FormControl(),
        'city': new FormControl()
        })
      }
    )
  }

  onSubmit(form){
    console.log(form);
  }

}
