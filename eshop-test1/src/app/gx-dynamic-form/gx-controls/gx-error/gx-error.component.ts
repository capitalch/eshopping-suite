import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IbukiService } from '../../service/ibuki.service';

@Component({
  selector: 'app-gx-error'
  , templateUrl: './gx-error.component.html'
  // , changeDetection: ChangeDetectionStrategy.OnPush
  , styleUrls: ['./gx-error.component.scss']
})
export class GxErrorComponent implements OnInit {
  @Input() layout: any = {};
  @Input() parent: FormGroup;
  @Input() control: any = {};
  constructor(
    private ibukiService: IbukiService
    , private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.parent && this.layout.id) {
      this.control = this.parent.get(this.layout.id);
    }
    // this.ibukiService.filterOn('error:mess' + this.layout.id).subscribe(d => {
    //   console.log(d.data);
    //   const ctrl = d.data.control;
    //   this.control = ctrl;
    // });
  }

  getMessages() {
    const messages = [];
    const a = this.control.errors && Object.keys(this.control.errors).forEach(x => {
      messages.push(this.layout.validation
        && this.layout.validation[x] && this.layout.validation[x].message.replace('$', this.layout.label));
    });

    return (messages);
  }

}
