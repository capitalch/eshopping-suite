import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() parentControl: FormGroup;
  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService) {

  }

  ngOnInit() {
    let childControls = {};
  }
  ngAfterViewInit() {

  }
}
