import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  @Input() layouts: any[] = [];
  @Input() config: any = {};
  myForm: FormGroup;
  errorMessages: any[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
    }, {
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
      type: "select"
      , label: "Country"
      , value: "in"
      , id: "country"
      , options: [
        { label: "USA", value: "us" }
        , { label: "India", value: "in" }
      ]
    }, {
      type: "checkboxGroup"
      , label: "Food"
      , value: ""
      , id: "food"
      , options: [
        { label: "Main course", value: false, id: "main" }
        , { label: "Desert", value: false, id: "desert" }
        , { label: "beverages", value: false, id: "beverages" }
      ]
    }];
    this.config = {
      submitClass: "btn btn-primary"
    };
    let formControls = {};
    let validators;
    this.layouts.forEach(x => {
      if (x.type == 'checkboxGroup' && x.options) {
        let childControls = {};
        x.options.forEach(y => {
          childControls[y.id] = y.value;
        });
        formControls[x.id] = this.fb.group(childControls);
      } else {
        validators = this.getValidators(x);
        formControls[x.id] = [x.value, validators];
      }

    });
    this.myForm = this.fb.group(formControls);
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

  myValidate(s) {
    let func = (control: FormControl) => {
      return (control.value.indexOf(s) >= 0 ? null : { myValidate: 'true' });
    };
    return (func);
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
  }
}
