import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jx-error',
  templateUrl: './jx-error.component.html',
  styleUrls: ['./jx-error.component.scss']
})
export class JxErrorComponent implements OnInit {
  @Input() layout: any = {};
  @Input() parent: any;
  @Input() parentType: string;
  @Input() controlType:string;
  @Input() idx;
  control: any;
  constructor() { }

  ngOnInit() {
    if (this.controlType=="form") {
      this.control = this.parent;
    } else {
      (this.idx || (this.idx == 0))
        ? (
          this.control = this.parent.get(this.layout.id).controls[this.idx]
          , this.layout = this.layout.group
        )
        : (
          this.control = this.parent.get(this.layout.id)
        );
    }
  }

  getMessages() {
    let messages = [];
    Object.keys(this.control.errors).forEach(x => {
      messages.push(this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label))
    });
    return (messages);
  }

}
