import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JxFormService } from '../jx-form.service';

@Component({
  selector: 'jx-checkbox-group',
  templateUrl: './jx-checkbox-group.component.html',
  styleUrls: ['./jx-checkbox-group.component.scss']
})
export class JxCheckboxGroupComponent {
  @Input() parent: FormGroup;
  @Input() layout: any;
  @Input() idx: string;
  constructor(private fb: FormBuilder, private JxFormService: JxFormService) { }
  // ngAfterViewInit() {
    ngOnInit() {
    let childControls = {};
    this.layout.options && this.layout.options.forEach(e => {
      childControls[e.id] = e.value;
    });
    this.parent.setControl(this.layout.id, this.fb.group(childControls, { validator: this.layout.validation && this.layout.validation.required && this.JxFormService.checkboxGroupRequiredValidator }));
  }

}
