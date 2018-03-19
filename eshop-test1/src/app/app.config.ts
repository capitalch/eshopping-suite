// let func = (control: FormControl) => {
//     return (control.value.indexOf(s) >= 0 ? null : { myValidate: "true" });
//   };
//   return (func);
let form1 = [{
    type: "text"
    , id: "firstName"
    , label: "First name"
    , placeholder: "First name"
    , value: ""

    , validation: {
        required: { message: '$ is required' },
        minlength: { value: 3, message: 'Minimum length for $ is 3' },
        maxlength: { value: 10, message: 'Maximum length for $ is 10' },
        myValidate: {
            message: 'My validation fails'
            , name: "myValidate"
            , arg: 'test'
        }
    }
    , asyncValidation: {
        async1: {
            url: ""
            , name: ""
            , message: ""
            , arg: 'test'
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
            message: 'You must select a value for $'
            , name: "selectRequiredValidator"
            , arg: 0
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
    , id: 'submitForm1'
    , class: { group: 'submit-right', element: 'btn btn-primary' }
    , actionName: 'submitForm'
},
{
    type: 'button'
    , label: "Reset"
    , id: 'resetForm1'
    , class: { group: 'submit-right', element: 'btn btn-primary' }
    , actionName: 'resetForm'
}];
export { form1 };