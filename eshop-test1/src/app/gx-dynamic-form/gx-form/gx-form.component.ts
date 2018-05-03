import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { GxService } from '../service/gx.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gx-form',
  templateUrl: './gx-form.component.html'
  , styleUrls: ['./gx-form.component.scss']
  // , changeDetection: ChangeDetectionStrategy.Default
})
export class GxFormComponent implements OnInit, AfterViewInit {
  @Input() layouts: any[] = [];
  myForm: FormGroup;
  meta: any;
  constructor(
    private gxService: GxService
    , private fb: FormBuilder
    , private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const metaIndex = this.layouts.findIndex(x => x.type === 'meta');
    this.meta = this.layouts[metaIndex];

    this.layouts.splice(metaIndex, 1);
    const allValidators = this.gxService.getValidators(this.meta.client);
    this.myForm = this.fb.group({}, { validator: allValidators.validators, asyncValidator: allValidators.asyncValidators });
  }

  ngAfterViewInit() {
    // to avoid ExpressionChangedAfterItHasBeenCheckedError because of validations
    this.cdr.detectChanges();
  }

}
