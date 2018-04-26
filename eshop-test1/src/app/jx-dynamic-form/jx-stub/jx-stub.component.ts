import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';
import { BrokerService } from '../../broker.service';
// import { BrokerService } from '../broker.service';

@Component({
  selector: 'jx-stub',
  templateUrl: './jx-stub.component.html',
  styleUrls: ['./jx-stub.component.scss']
})
export class JxStubComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: any;
  @Input() parentType: string;
  @Input() jControl: any;
  @Input() group: any;
  @Input() idx: string = "";
  container: any;
  constructor(private fb: FormBuilder, private jxService: JxService, private brokerService: BrokerService) { }

  ngOnInit() {
    if (this.parentType == "form") {
      this.container = this.parent;
    }
    else if (this.parentType == 'group') {
      this.container = this.parent.get(this.layout.id);
    } else {
      this.container = this.group;
    }
  }

  submit() {
    this.processForm();
    this.validateAllFormFields(this.parent);
    this.parent.valid
      ? this.brokerService.emit(this.jControl.actionId, this.parent)
      : console.log("Invalid form");

  }

  buttonClicked() {
    (this.layout.type.toLower() == "submit") && this.submit();
    if (this.layout.type.toLower() in ['button', 'mat-button']) {
      this.processForm();
      if (this.layout.validateForm) {
        this.validateAllFormFields(this.parent);
        if (this.parent.valid && (!this.parent.pending)) {
          this.brokerService.emit(this.jControl.actionId, this.parent);
        } else {
          console.log("Invalid form");
        }
      } else {
        this.brokerService.emit(this.jControl.actionId, this.parent);
      }
    }
  }

  processForm() {
    let myForm = this.parent;
    let meta = myForm.meta;
    let serverMeta = Object.assign({}, meta);
    delete serverMeta.client;
    let formValue = myForm.value
    formValue["meta"] = serverMeta;
    delete myForm.value.undefined;
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        (<FormArray>control).controls.forEach(x => {
          this.validateAllFormFields(<FormGroup>x);
        })
      }
    });
  }
}
