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
    }];
    this.config = {
      submitClass: "btn btn-primary"
    };
    let ctrl = this.layouts[0];
    let formControls = {};
    let validators = Object.keys(ctrl.validation).map(x => {
      let ret;
      switch (x) {
        case 'required':
          ret = Validators.required;
          break;
        case 'email':
          ret = Validators.email;
          break;
        case 'minlength':
          ret = Validators.minLength(ctrl.validation[x].value);
          break;
        case 'maxlength':
          ret = Validators.maxLength(ctrl.validation[x].value);
          break;
        case 'pattern':
          ret = Validators.pattern(ctrl.validation[x].value);
          break;
        default:
          ret = ctrl.validation[x].value;
        // ret = this.myValidate('test');
        // let val = ctrl.validation[x].value;
        // ret = val ? ctrl.validation[x](val) : ctrl.validation[x](val);
      }
      return (ret);
    });
    formControls["firstName"] = ["", validators];
    // formControls["firstName"] = ["", [Validators["required"],
    // Validators["minLength"](3), Validators.maxLength(5)]]
    // this.layouts.forEach(x => {
    //   formControls[x.id] = [x.value, x.validation ? Validators[x.validation] : null];
    // });

    // formControls[this.layout.id] = [this.layout.value, this.layout.required ? this.builtinValidators.required : null];
    this.myForm = this.fb.group(formControls);
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
      errorObject[x] = layout.validation[x] && layout.validation[x].message.replace('$',layout.label);
    });    
    return (isError);
  }

  getErrorMessages(layout){
    let errorObject = this.errorMessages[layout.id];
    let messages = Object.values(errorObject);
    return(messages);
  }

  stringify(obj) {
    return (JSON.stringify(obj));
  }

  submit() {
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
  }
}
