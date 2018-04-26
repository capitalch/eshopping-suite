let form1 = [
    {
        type: "meta"
        , client: {
            title: "Test form"
            , titleClass: "header"
            , bodyClass: "body"
            , class: { form: "form-style-1", title: "header", body: "body" }

            // , validation: {
            //     groupValidator1: { message: "Data is not correct" }
            //     , groupAsyncValidator1: {
            //         message: "Async validation failed"
            //         , arg: {
            //             url: "http://localhost:3002/group"
            //         }
            //         , async: true
            //     }
            // }
        }
        , id: "jx-address"
    }
    ,
    {
        type: "textarea"
        , id: "firstName"
        , label: "First name"
        , placeholder: "First name"
        , value: ""
        , class: { label: "red-class", element: "textarea-class" }
        , validation: {
            groupAsyncValidator1: {
                message: "Async validation failed"
                , arg: {
                    url: "http://localhost:3002/group"
                    , delay: 1000
                }
                , async: true
            }
            // , required:{message: '$ is required' }
            // required: { message: '$ is required' }
            // , minlength: { value: 3, message: 'Minimum length for $ is 3' }
            // , maxlength: { value: 10, message: 'Maximum length for $ is 10' }
        }
    }
    , {
        type: "checkbox"
        , id: "agreed"
        , label: "Agreed"
        , value: true
        , validation: {
            required: { message: '$ is required' }
        }
    }
    ,
    {
        type: "radio"
        , label: "Gender"
        , value: "M"
        , id: "gender123"
        , options: [
            { label: "Male", value: "M", id: "male1" }
            , { label: "Female", value: "F", id: "female1" }
        ]
        , validation: {
            required: { message: '$ is required' }
        }
    }
    , {
        type: "select"
        , label: "Country"
        , value: ""
        , id: "country"
        , options: "countries3"
        , validation: {
            required: {
                message: 'You must select a value for $'
            }
        }
    }
    , {
        type: "checkboxGroup"
        , label: "Food2"
        , id: "food2"
        , validation: {
            required: { message: '$ is required' }
        }
        , options: [
            { label: "Main course", value: false, id: "main2" }
            , { label: "Desert", value: true, id: "desert2" }
            , { label: "beverages", value: false, id: "beverages2" }
        ]
    }

    // ,
    // {
    //     type: "groupArray"
    //     , label: "Tags"
    //     , id: "tags"
    //     , group: {
    //         label: "Tag"
    //         , id: "tag"
    //         , validation: {
    //             groupValidator1: { message: "$ is not correct" }
    //             , groupAsyncValidator1: {
    //                 message: "Async validation failed"
    //                 , arg: {
    //                     url: "http://localhost:3002/group"
    //                 }
    //                 , async: true
    //             }
    //         }
    //         , controls: [
    //             // {
    //             //     type: "mat-checkbox"
    //             //     , id: "agreed8"
    //             //     , label: "Agreed"
    //             //     , value: false
    //             // }
    //             // , 
    //             {
    //                 type: "textarea"
    //                 , id: "firstName"
    //                 , label: "First name"
    //                 , placeholder: "First name"
    //                 , value: ""
    //                 , class: { label: "red-class", element: "textarea-class" }
    //                 // , validation: {
    //                 //     required: { message: '$ is required' },
    //                 //     minlength: { value: 3, message: 'Minimum length for $ is 3' },
    //                 //     maxlength: { value: 10, message: 'Maximum length for $ is 10' }
    //                 // }
    //             }
    //         ]
    //     }
    // }
    // ,
    // {
    //     type: "group"
    //     , label: "Passwords"
    //     , id: "pwd"
    //     // , validation: {
    //     //     groupValidator1: { message: "$ is not correct" }
    //     //     , groupAsyncValidator1: {
    //     //         message: "Async validation failed"
    //     //         , arg: {
    //     //             url: "http://localhost:3002/group"
    //     //         }
    //     //         , async: true
    //     //     }
    //     // }
    //     , controls: [
    //         {
    //             type: "checkbox"
    //             , id: "agreed"
    //             , label: "Agreed"
    //             , value: true
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //     ]
    // }
    , {
        type: "submit"
        , label: "submit"
        , class: "btn btn-primary"
        , actionId: "submit"
    }
    , {
        type: "button"
        , label: "My Submit"
        , class: "btn btn-primary"
        , actionId: "submit1"
        , validateForm: true
    }

];
export { form1 };

    //documentation
    //Group level sync and async validation
    // ,
    // {
    //     type: "group"
    //     , label: "Passwords"
    //     , id: "pwd"
    //     , validation: {
    //         groupValidator1: { message: "$ is not correct" }
    //         , groupAsyncValidator1: {
    //             message: "Async validation failed"
    //             , arg: {
    //                 url: "http://localhost:3002/group"
    //             }
    //             , async: true
    //         }
    //     }
    //     , controls: [
    //         {
    //             type: "checkbox"
    //             , id: "agreed"
    //             , label: "Agreed"
    //             , value: true
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //     ]
    // }
    // {
    //     type: "meta"
    //     , client: {
    //         formClass: "form-style-1",
    //         title: "Test form",
    //         titleClass: "header",
    //         bodyClass: "body"
    //     }
    //     , id: "jx-address"
    // }
    // ,
    // {
    //     type: "textarea"
    //     , class: {parent:"textarea-test"} 
    //     , id: "address1"
    //     , label: "Address"
    //     , placeholder: "Address"
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: "text"
    //     , id: "tagValue"
    //     , class: "tag-class"
    //     , label: "Tag value"
    //     , placeholder: "Tag value"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // , {
    //     type: "mat-input"
    //     , subType: "text"
    //     , id: "mat1"
    //     , label: "mat name"
    //     , placeholder: "mat placeholder"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // ,
    // {
    //     type: "mat-datepicker",
    //     id: "matDatePicker1",
    //     placeholder: "select a date"
    //     , label: "myDatePicker"
    //     , locale: "en-GB"
    //     , validation: {
    //         required: {
    //             message: "You must surely select a value for $"
    //         }
    //     }
    // }
    // , {
    //     type: "anchor"
    //     , href: "http://www.microsoft.com"
    //     , label: "Some label"

    // }

    //mat-button
    //subType can be button, icon, raised, fab, mini-Fab
    //color can be primary, danger, accent and warn
    // , {
    //     type: "mat-button"
    //     , subType:"mini-fab"
    //     , faClass:"fa fa-taxi fa-fw"
    //     , color:"primary"
    //     // , label: "My Taxi"
    //     , actionId: "submit2"
    //     , validateForm:true
    // }
// ,
    // {
    //     type: "group"
    //     , label: "Passwords"
    //     , id: "pwd"
    //     , controls: [
    //         {
    //             type: "checkbox"
    //             , id: "agreed"
    //             , label: "Agreed"
    //             , value: false
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //         , {
    //             type: "group"
    //             , id: "Agreement1"
    //             , label: "Agreement"
    //             , controls: [
    //                 {
    //                     type: "checkbox"
    //                     , id: "agreed11"
    //                     , label: "Agreed"
    //                     , value: true
    //                 }
    //                 , {
    //                     type: "group"
    //                     , id: "Agreement1"
    //                     , label: "Agreement"
    //                     , controls: [
    //                         {
    //                             type: "checkbox"
    //                             , id: "agreed111"
    //                             , label: "Agreed11"
    //                             , value: true
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //         ,
    //         {
    //             type: "textarea"
    //             , id: "address"
    //             , label: "Address"
    //             , placeholder: "Address"
    //             , value: "12345"
    //             , validation: {
    //                 required: { message: '$ is required' },
    //                 minlength: { value: 5, message: 'Minimum length for $ is 5' },
    //                 maxlength: { value: 200, message: 'Maximum length for $ is 200' }
    //             }
    //         }
    //     ]
    // }

    // ,
    // {
    //     type: "groupArray"
    //     , label: "Tags"
    //     , id: "tags"
    //     , group: {
    //         label: "Tag"
    //         , id: "tag"
    //         , controls: [
    //             {
    //                 type: "mat-checkbox"
    //                 , id: "agreed8"
    //                 , label: "Agreed"
    //                 , value: false
    //             }
    //             , {
    //                 type: "textarea"
    //                 , id: "firstName"
    //                 , label: "First name"
    //                 , placeholder: "First name"
    //                 , value: ""
    //                 , class: { label: "red-class", element: "textarea-class" }
    //                 , validation: {
    //                     required: { message: '$ is required' },
    //                     minlength: { value: 3, message: 'Minimum length for $ is 3' },
    //                     maxlength: { value: 10, message: 'Maximum length for $ is 10' },
    //                     myValidate: {
    //                         message: 'My validation fails'
    //                         , arg: 'test'
    //                     }
    //                 }
    //             }
    //             , {
    //                 type: "checkbox"
    //                 , id: "agreed9"
    //                 , label: "Agreed"
    //                 , value: true
    //             }
    //             , {
    //                 type: "checkboxGroup"
    //                 , label: "Food2"
    //                 , id: "food2"
    //                 , validation: {
    //                     required: { message: '$ is required' }
    //                 }
    //                 , options: [
    //                     { label: "Main course", value: false, id: "main2" }
    //                     , { label: "Desert", value: true, id: "desert2" }
    //                     , { label: "beverages", value: false, id: "beverages2" }
    //                 ]
    //             }
    //             , {
    //                 type: "radio"
    //                 , label: "Gender"
    //                 , value: "M"
    //                 , id: "gender123"
    //                 , options: [
    //                     { label: "Male", value: "M", id: "male1" }
    //                     , { label: "Female", value: "F", id: "female1" }
    //                 ]
    //             }
    //             , {
    //                 type: "select"
    //                 , label: "Country"
    //                 , value: ""
    //                 , id: "country"
    //                 , options: "countries3"
    //                 , validation: {
    //                     required: {
    //                         message: 'You must select a value for $'
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // }

// , {
    //     type: "select"
    //     , label: "Country"
    //     , value: ""
    //     , id: "country1"
    //     , options:"countries3"
    //     , validation: {            
    //         required:{
    //             message:"You must surely select a value for $"
    //         }
    //     }
    // }
    // , {
    //     type: "mat-textarea"
    //     , id: "tagValue"
    //     , class: "tag-class"
    //     , label: "Tag value"
    //     , placeholder: "Tag value"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // , {
    //     type: "mat-input"
    //     , subType: "text"
    //     , id: "mat1"
    //     , label: "mat name"
    //     , placeholder: "mat placeholder"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // ,
    // {
    //     type: "mat-radio"
    //     , label: "Gender"
    //     , value: "M"
    //     , id: "gender12"
    //     , options: [
    //         { label: "Male", value: "M", id: "male1" }
    //         , { label: "Female", value: "F", id: "female1" }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: "mat-select"
    //     , label: "Country"
    //     , value: ""
    //     , id: "country"
    //     , options: "countries3"
    //     , validation: {
    //         required:{message:"Value is required"}
    //     }
    // }
    // ,
    // {
    //     type: "textarea"
    //     , id: "address"
    //     , class: {
    //         label: 'label-address-class'
    //         , element: 'element-address-class'
    //         , parent: 'parent-address-class'
    //     }
    //     , label: "Address"
    //     , placeholder: "Address"
    //     , value: "12345"
    //     , validation: {
    //         required: { message: '$ is required' },
    //         minlength: { value: 5, message: 'Minimum length for $ is 5' },
    //         maxlength: { value: 200, message: 'Maximum length for $ is 200' }
    //     }
    // }
    // , {
    //     type: "checkbox"
    //     , id: "agreed"
    //     , label: "Agreed"
    //     , value: false
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }, {
    //     type: "checkboxGroup"
    //     , label: "Food2"
    //     , id: "food2"
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { label: "Main course", value: false, id: "main2" }
    //         , { label: "Desert", value: true, id: "desert2" }
    //         , { label: "beverages", value: false, id: "beverages2" }
    //     ]
    // }
    // ,
    // {
    //     type: "radio"
    //     , label: "Gender"
    //     , value: "M"
    //     , id: "gender123"
    //     , options: [
    //         { label: "Male", value: "M", id: "male1" }
    //         , { label: "Female", value: "F", id: "female1" }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // ,
    // {
    //     type: "mat-checkbox"
    //     , id: "agreed3"
    //     , label: "Agreed"
    //     , value: false
    // }
    // ,
    // , {
    //     type: "text"
    //     , id: "email1"
    //     , label: "email1"
    //     , placeholder: "email"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is required' },
    //         email1: {
    //             message: "Your email is invalid"
    //             , arg: {
    //                 url: "http://localhost:3002/email"
    //             }
    //             , async: true
    //         },
    //         email2: {
    //             message: "Sync email invalid"
    //             , arg: "test"
    //         }
    //     }
    // }
    // , {
    //     type: "checkboxGroup"
    //     , label: "Food1"
    //     , id: "food1"
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { label: "Main course", value: false, id: "main1" }
    //         , { label: "Desert", value: true, id: "desert1" }
    //         , { label: "beverages", value: false, id: "beverages1" }
    //     ]
    // }

    // , {
    //     type: "select"
    //     , label: "Country"
    //     , value: "0"
    //     , id: "country"
    //     , options: [
    //         { name: "---Choose---", value: "0" }
    //         , { name: "USA", value: "us" }
    //         , { name: "India", value: "in" }
    //     ]
    //     , validation: {
    //         selectRequired: {
    //             message: 'You must select a value for $'
    //             , arg: 0
    //         }
    //     }
    // }