import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() layout: any={};
  @Input() control:any;
  constructor() { }

  ngOnInit() {
    let i=0;
  }

  getMessages(){
    let messages=[];
    Object.keys(this.control.errors).forEach(x=>{
      messages.push(this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label))
    });
    return(messages);
  }
}
