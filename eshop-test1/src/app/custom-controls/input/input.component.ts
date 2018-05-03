import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GxService } from '../../gx-dynamic-form/service/gx.service';

@Component({
  selector: 'gx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  classes: any = {};
  constructor(private gxService: GxService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }

}
