import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { JxService } from '../jx-service/jx.service';

@Component({
  selector: 'jx-stub',
  templateUrl: './jx-stub.component.html',
  styleUrls: ['./jx-stub.component.scss']
})
export class JxStubComponent implements OnInit {
  // @Input() layouts: any;
  @Input() layout: any;
  @Input() parent: any;
  @Input() parentType: string;
  @Input() jControl: any;
  @Input() group: any;
  @Input() idx:string = "";
  container: any;
  constructor(private fb: FormBuilder, private jxService: JxService) { }

  ngOnInit() {
    let childControls = {};
    if (this.parentType == "form") {
      this.container = this.parent;
    }
    else if (this.parentType == 'group') {
      // this.layout.controls && this.layout.controls.forEach(e => {
      //   let allValidators = this.jxFormService.getValidators(e);
      //   childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
      // });
      // let group1 = this.fb.group(childControls);
      // this.parent.setControl(this.layout.id, group1);
      this.container = this.parent.get(this.layout.id);
    } else {
      // this.layout.group.controls && this.layout.group.controls
      //   .forEach(e => {
      //     if ((e.type == "checkboxGroup") && e.options) {

      //     } else {
      //       let allValidators = this.jxFormService.getValidators(e);
      //       childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators]
      //     }

      //   });
      // let group1 = this.fb.group(childControls);
      // this.parent.setControl(this.layout.id, this.fb.array([group1]));
      this.container = this.group;
    }
  }

  submit(actionName) {
    // console.log(this.myForm.valid);
    let myForm = this.jxService.getForm();
    this.validateAllFormFields(myForm);
    if (myForm.valid) {
      console.log('form submitting');
      this.jxService.executeAction(actionName, myForm);
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
      } else if(control instanceof FormArray){
        (<FormArray> control).controls.forEach(x=>{
          this.validateAllFormFields(<FormGroup>x);
        })
      }
    });
  }

  addGroupInArray(layout) {
    let childControls = {};
    layout.group.controls && layout.group.controls.forEach(e => {
      if (e.type == "checkboxGroup") {

      } else if (e.type == "group") {

      } else {
        let allValidators = this.jxService.getValidators(e);
        childControls[e.id] = [e.value, allValidators.validators, allValidators.asyncValidators];
      }
    });
    let group = this.fb.group(childControls);
    let groupArray = <FormArray>this.parent.get(layout.id);
    groupArray.push(group);
  }
}
