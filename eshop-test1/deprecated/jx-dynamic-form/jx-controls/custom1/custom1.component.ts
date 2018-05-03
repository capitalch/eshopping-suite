import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JxService } from '../../jx-service/jx.service';

@Component({
  selector: 'custom1',
  templateUrl: './custom1.component.html',
  styleUrls: ['./custom1.component.scss']
})
export class Custom1Component implements OnInit {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  classes: any = {};
  constructor(private jxService: JxService) { }

  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
  }

}
