import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() layout: any={};
  @Input() form: FormGroup;
  errorMessages: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  
  checkError() {
    let controlId = this.layout.id;
    this.errorMessages[controlId] = {};
    let control = this.form.controls[controlId];
    let isError = control.errors && (control.touched || control.dirty);
    isError && Object.keys(control.errors).forEach(x => {
      let errorObject = this.errorMessages[controlId];
      errorObject[x] = this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label);
    });
    return (isError);
  }

  getErrorMessages() {
    let errorObject = this.errorMessages[this.layout.id] || {};
    let messages = Object.values(errorObject) || [];
    return (messages);
  }

}
