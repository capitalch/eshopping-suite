import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() layout: any;
  constructor(private fb: FormBuilder, private JxFormService: JxFormService) {

  }

  ngOnInit() {
    let childControls = {};
    this.layout.options && this.layout.options.forEach(e => {
      childControls[e.id] = e.value;
    });
    this.parent.setControl(this.layout.id, this.fb.group(childControls, { validator: this.layout.validation && this.layout.validation.required && this.JxFormService.checkboxGroupRequiredValidator }));    
  }
}
