import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gx-error'
  , templateUrl: './gx-error.component.html'
  , styleUrls: ['./gx-error.component.scss']
})
export class GxErrorComponent implements OnInit {
  @Input() layout: any = {};
  @Input() parent: FormGroup;
  @Input() control: any = {};
  constructor() { }

  ngOnInit() {
    if (this.parent && this.layout.id) {
      this.control = this.parent.get(this.layout.id);
    }


  }

  getMessages() {
    const messages = [];
    Object.keys(this.control.errors).forEach(x => {
      messages.push(this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label));
    });
    return (messages);
  }

}
