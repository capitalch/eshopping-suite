import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() myForm: FormGroup;
  @Input() layout;
  @Input() control;
  @Input() parent;
  @Input() j;
  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService) {
    // let childControls = {};
    // this.layout.options.forEach(y => {
    //   childControls[y.id] = y.value;
    // });
    // this.parent.controls[this.layout.id] = this.fb.group(childControls, { validator: this.layout.validation && this.layout.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });

  }

  ngOnInit() {
    let i = 0;
    // let childControls = {};
    // this.layout.options.forEach(y => {
    //   childControls[y.id] = y.value;
    // });
    // this.parent.controls[this.layout.id] = this.fb.group(childControls, { validator: this.layout.validation && this.layout.validation.required && this.jsonFormService.checkboxGroupRequiredValidator });
  }
  ngAfterViewInit() {

  }
}
