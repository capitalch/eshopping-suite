import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';

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
  constructor(private fb: FormBuilder, private jxService: JxService) { }

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

  submit(actionName) {
    let myForm = this.parent;
    let meta = myForm.meta;
    let serverMeta = Object.assign({},meta);
    delete serverMeta.client;
    this.validateAllFormFields(myForm);
    if (myForm.valid) {
      delete myForm.value.undefined;
      let formValue = myForm.value;
      formValue["meta"] = serverMeta;
      this.jxService.executeAction(actionName, formValue);
    } else {
      console.log("Invalid form");
    }
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

  addGroupInArray(layout) {
    let childControls = {};
    layout.group.controls && layout.group.controls.forEach(e => {      
      let allValidators = this.jxService.getValidators(e);
      childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators];      
    });
    let group = this.fb.group(childControls);
    let groupArray = <FormArray>this.parent.get(layout.id);
    groupArray.push(group);
  }
}
