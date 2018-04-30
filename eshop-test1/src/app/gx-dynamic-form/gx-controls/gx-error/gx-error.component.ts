import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'gx-error'
  , templateUrl: './gx-error.component.html'
  , styleUrls: ['./gx-error.component.scss']
  // , changeDetection: ChangeDetectionStrategy.OnPush
})
export class GxErrorComponent implements OnInit {
  @Input() layout: any = {};
  @Input() parent: FormGroup;
  @Input() control: any={};
  constructor() { }

  ngOnInit() {
    this.parent && this.layout.id && (
      this.control = this.parent.get(this.layout.id));

    //If parent is form or group in an array then there is no id in layout. That is meta of form does not and should not have an id.
    // this.layout.id
    //   ? this.control = this.parent.get(this.layout.id)
    //   : this.control = this.parent;

  }

  getMessages() {
    let messages = [];
    Object.keys(this.control.errors).forEach(x => {
      messages.push(this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label))
    });
    return (messages);
  }

}
