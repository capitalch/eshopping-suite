import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'gx-error',
  templateUrl: './gx-error.component.html',
  styleUrls: ['./gx-error.component.scss']
})
export class GxErrorComponent implements OnInit {
  @Input() layout: any = {};
  @Input() parent: FormGroup;
  control:any;
  constructor() { }

  ngOnInit() {
    this.control = this.parent.get(this.layout.id);
  }

  getMessages() {
    let messages = [];
    Object.keys(this.control.errors).forEach(x => {
      messages.push(this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label))
    });
    return (messages);
  }

}
