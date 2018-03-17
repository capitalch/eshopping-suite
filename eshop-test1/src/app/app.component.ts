import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myLayout: any = {};
  options:any={};
  content:string;
 
  ngOnInit() {
    this.options={
      wrapperClass:"form-style-1"
      , methods:{}
    }
    this.myLayout = [{
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
      , asyncValidation:{
        async1:{
          url:""
          , value:""
          , message:""
        }
      }
    },
    {
      type: "text"
      , id: "lasttName"
      , label: "Last name"
      , placeholder: "Last name"
      , value: ""
      , validation: {
        required: { message: '$ is required' },
        minlength: { value: 3, message: 'Minimum length for $ is 3' },
        maxlength: { value: 10, message: 'Maximum length for $ is 10' }
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
        { label: "Main course", value: false, id: "main1" }
        , { label: "Desert", value: true, id: "desert1" }
        , { label: "beverages", value: false, id: "beverages1" }
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
    },
    {
      type: 'submit'
      , label: 'Submit'
      // , id:'submit-right btn btn-primary '
      // , class:'my-submit'
      , submit: () => { console.log("submit clicked") }
    }];
    this.content = "This is code"
  }

  myValidate(s) {
    let func = (control: FormControl) => {
      return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
    };
    return (func);
  }

  selectRequiredValidator(def) {
    let func = (control: FormControl) => {
      return ((control.value == def) ? { selectRequired: true } : null);
    }
    return (func);
  }
}
