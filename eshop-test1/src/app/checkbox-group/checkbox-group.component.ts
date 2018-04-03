import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService) {

  }

  ngOnInit() {
    let childControls = {};
    this.layout.options && this.layout.options.forEach(e => {
      childControls[e.id] = e.value;
    });
    let group1  = this.fb.group(childControls);
    this.parent.setControl(this.layout.id,group1);
    // this.parent.setControl(this.layout.id, this.fb.group(childControls, { validator: this.layout.validation && this.layout.validation.required && this.jsonFormService.checkboxGroupRequiredValidator }));
  }
}
