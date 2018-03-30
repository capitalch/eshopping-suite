import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { JsonFormService } from './json-form.service';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];
  ee: EventEmitter<any>;
  obj: any;
  subs;
  constructor(private fb: FormBuilder, private jsonFormService: JsonFormService
  ) { }

  ngOnInit() {
    this.ee = new EventEmitter();

    let formControls = {};
    this.layouts.forEach(x => {
      // if (x.type == 'checkboxGroup' && x.options) {
      //   let childControls = {};
      //   x.options.forEach(y => {
      //     childControls[y.id] = y.value;
      //   });
      //   formControls[x.id] = this.fb.group(childControls);

      //   // let sub = this.ee.filter((d) => {
      //   //   return (d == 'checkboxGroup');
      //   // }).subscribe(f => {
      //   //   let ctrl = this.myForm.controls[x.id];
      //   //   ctrl.setValidators(this.checkboxGroupRequiredValidator);
      //   // });
      //   // this.subs ? this.subs.add(sub) : (this.subs = sub);
      // }
      // else 
      if (x.type == 'checkboxGroup' && x.options) {
        let childControls = {};
        x.options.forEach(y => {
          childControls[y.id] = y.value;
        });
        formControls[x.id] = this.fb.group(childControls, { validator: this.matcher });
      } else
        if (x.type == 'groupArray') {
          let childControls = {};
          x.group.controls && x.group.controls.forEach(c => {
            let allValidators = this.jsonFormService.getValidators(c);
            childControls[c.id] = [c.value, allValidators.validators, allValidators.asyncValidators]
          });
          formControls[x.id] = <FormArray>this.fb.array([
            this.fb.group(childControls)
          ]);
        }
        else if (x.type == "group") {
          let childCtrls = {};
          x.controls && x.controls.forEach(c => {
            let allValidators = this.jsonFormService.getValidators(c);
            if (c.type != 'groupArray') {
              childCtrls[c.id] = [c.value, allValidators.validators, allValidators.asyncValidators];
            } else {
              let childControls1 = {};
              c.group.controls && c.group.controls.forEach(d => {
                let allValidators1 = this.jsonFormService.getValidators(d);
                childControls1[d.id] = [d.value, allValidators1.validators, allValidators1.asyncValidators];
              });
              let group1 = this.fb.group(childControls1);
              childCtrls[c.id] = <FormArray>this.fb.array([
                group1]);
            }
          });
          formControls[x.id] = this.fb.group(childCtrls);
        }
        else {
          let allValidators = this.jsonFormService.getValidators(x);
          formControls[x.id] = [x.value, allValidators.validators, allValidators.asyncValidators];
        }
    });
    this.myForm = this.fb.group(formControls);

    this.ee.emit('checkboxGroup');
  }

  matcher(c) {
    console.log(c.controls);
    let valid = false;
    Object.values(c.controls).forEach((x: any) => {
      valid = x.value || valid;
    });

    return (valid ? null : { matcher: false });
  }

  checkboxGroupRequiredValidator(ctrl: any) {
    let isValid = false, ret = null;
    Object.values(ctrl.controls).forEach((x: any) => {
      isValid = isValid || x.value;
    });
    (!isValid) && (ret = { required: true });
    return (ret);
  }

  addGroupInArray(layout) {

    let childControls = {};
    layout.group.controls && layout.group.controls.forEach(c => {
      let allValidators = this.jsonFormService.getValidators(c);
      childControls[c.id] = [c.value, allValidators.validators, allValidators.asyncValidators]
    });
    let groupArray = <FormArray>this.myForm.get(layout.id);
    let group = this.fb.group(childControls);
    groupArray.push(group);
  }
  removeTag(j) {
    let tags = <FormArray>this.myForm.get("tags");
    tags.removeAt(j);
  }

  submit(actionName) {
    console.log(this.myForm.valid);
    this.validateAllFormFields(this.myForm);
    if (this.myForm.valid) {
      console.log('form submitting');
      this.jsonFormService.executeAction(actionName, this.myForm);
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
      }
    });
  }

  ngOnDestroy() {
    this.subs && (this.subs.unsubscribe());
    console.log('unsubs done');
  }
}
