import { Component, OnInit, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
  , encapsulation: ViewEncapsulation.Emulated
})
export class JsonFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() config: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];
  ee: EventEmitter<any>;
  subs;
  constructor(private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.ee = new EventEmitter();
    this.layouts = [{
      type: "text"
      , id: "firstName"
      , label: "First name"
      , placeholder: "First name"
      , value: ""
      , validation: {
        required: { message: '$ is required' },
        minlength: { value: 3, message: 'Minimum length for $ is 3' },
        maxlength: { value: 10, message: 'Maximum length for $ is 10' },
        // ,email: true
        myValidate: { value: this.myValidate('test'), message: 'My validation fails' }
      }
    },
    {
      type: "textarea"
      , id: "address"
      , label: "Address"
      , placeholder: "Address"
      , value: "12345"
      , validation: {
        required: { message: '$ is required' },
        minlength: { value: 5, message: 'Minimum length for $ is 5' },
        maxlength: { value: 200, message: 'Maximum length for $ is 200' }
      }
    },
    {
      type: "date"
      , id: "date"
      , label: "Date"
      , placeholder: "Date"
      , value: ""
      , validation: {
        required: { message: '$ is required' }
      }
    },
    {
      type: "checkbox"
      , id: "agreed"
      , label: "Agreed"
      , value: false
    }, {
      type: "radio"
      , label: "Gender"
      , value: "M"
      , id: "gender"
      , options: [
        { label: "Male", value: "M", id: "male" }
        , { label: "Female", value: "F", id: "female" }
      ]
    }, {
      type: "checkboxGroup"
      , label: "Food1"
      , id: "food1"
      , validation: {
        required: { message: '$ is required' }
      }
      , options: [
        { label: "Main course", value: false, id: "main" }
        , { label: "Desert", value: true, id: "desert" }
        , { label: "beverages", value: false, id: "beverages" }
      ]
    },
    {
      type: "select"
      , label: "Country"
      , value: "0"
      , id: "country"
      , options: [
        { label: "---Choose---", value: "0" }
        , { label: "USA", value: "us" }
        , { label: "India", value: "in" }
      ]
      , validation: {
        selectRequired: {
          value: this.selectRequiredValidator('0')
          , message: 'You must select a value for $'
        }
      }
    },
    {
      type: "checkboxGroup"
      , label: "Food"
      , id: "food"
      , validation: {
        required: { message: '$ is required' }
      }
      , options: [
        { label: "Main course", value: false, id: "main" }
        , { label: "Desert", value: true, id: "desert" }
        , { label: "beverages", value: false, id: "beverages" }
      ]
    }];
    this.config = {
      submitClass: "btn btn-primary"
    };
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

  selectRequiredValidator(def) {
    let func = (control: FormControl) => {
      return ((control.value == def) ? { selectRequired: true } : null);
    }
    return (func);
  }

  checkboxGroupRequiredValidator(ctrl: any) {
    let isValid = false, ret = null;
    Object.values(ctrl.controls).forEach((x: any) => {
      isValid = isValid || x.value;
    });
    (!isValid) && (ret = { required: true });
    return (ret);
  }

  myValidate(s) {
    let func = (control: FormControl) => {
      return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
    };
    return (func);
  }

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
    let errorObject = this.errorMessages[layout.id];
    let messages = Object.values(errorObject);
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
