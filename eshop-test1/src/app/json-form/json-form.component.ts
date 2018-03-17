import { Component, OnInit, Input, EventEmitter, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
  // , encapsulation: ViewEncapsulation.None
})
export class JsonFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() options: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];
  ee: EventEmitter<any>;
  subs;
  constructor(private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log('init');
    this.ee = new EventEmitter();
    
    // this.config = {
    //   submitClass: "btn btn-primary"
    // };

    let formControls = {};
    this.layouts.forEach(x => {
      if (x.type == 'checkboxGroup' && x.options) {
        let childControls = {};
        x.options.forEach(y => {
          childControls[y.id] = y.value;
        });
        formControls[x.id] = this.fb.group(childControls);
        let sub = this.ee.filter((d) => {
          return (d == 'checkboxGroup');
        }).subscribe(f => {
          let ctrl = this.myForm.controls[x.id];
          ctrl.setValidators(this.checkboxGroupRequiredValidator);
        });
        this.subs ? this.subs.add(sub) : (this.subs = sub);
      }
      else {
        let validators = this.getValidators(x);
        formControls[x.id] = [x.value, validators];
      }
    });
    this.myForm = this.fb.group(formControls);
    this.ee.emit('checkboxGroup');

  }

  // selectRequiredValidator(def) {
  //   let func = (control: FormControl) => {
  //     return ((control.value == def) ? { selectRequired: true } : null);
  //   }
  //   return (func);
  // }

  checkboxGroupRequiredValidator(ctrl: any) {
    let isValid = false, ret = null;
    Object.values(ctrl.controls).forEach((x: any) => {
      isValid = isValid || x.value;
    });
    (!isValid) && (ret = { required: true });
    return (ret);
  }

  // myValidate(s) {
  //   let func = (control: FormControl) => {
  //     return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
  //   };
  //   return (func);
  // }

  getValidators(layout) {
    let validators = layout.validation && Object.keys(layout.validation).map(x => {
      let ret;
      switch (x) {
        case 'required':
          ret = Validators.required;
          break;
        case 'email':
          ret = Validators.email;
          break;
        case 'minlength':
          ret = Validators.minLength(layout.validation[x].value);
          break;
        case 'maxlength':
          ret = Validators.maxLength(layout.validation[x].value);
          break;
        case 'pattern':
          ret = Validators.pattern(layout.validation[x].value);
          break;
        default:
          ret = layout.validation[x].value;
      }
      return (ret);
    });
    return (validators);
  }

  checkError(layout) {
    let controlId = layout.id;
    this.errorMessages[controlId] = {};
    let control = this.myForm.controls[controlId];
    let isError = control.errors && (control.touched || control.dirty);
    isError && Object.keys(control.errors).forEach(x => {
      let errorObject = this.errorMessages[controlId];
      errorObject[x] = layout.validation[x] && layout.validation[x].message.replace('$', layout.label);
    });
    return (isError);
  }

  getErrorMessages(layout) {
    let errorObject = this.errorMessages[layout.id] || {};
    let messages = Object.values(errorObject) || [];
    return (messages);
  }

  stringify(obj) {
    return (JSON.stringify(obj));
  }

  submit() {
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.myForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched();
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  ngOnDestroy() {
    this.subs && (this.subs.unsubscribe());
    console.log('unsubs done');
  }
}
