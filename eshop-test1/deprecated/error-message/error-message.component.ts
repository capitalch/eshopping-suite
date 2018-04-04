import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jx-error',
  templateUrl: './jx-error.component.html',
  styleUrls: ['./jx-error.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() layout: any={};
  @Input() control:any;
  constructor() { }

  ngOnInit() {
  }

  getMessages(){
    let messages=[];
    Object.keys(this.control.errors).forEach(x=>{
      messages.push(this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label))
    });
    return(messages);
  }
}
