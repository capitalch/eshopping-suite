// let form1 = [
//     {
//         type: "meta"
//         , client: {
//             title: "Test form"
//             , titleClass: "header"
//             , bodyClass: "body"
//             , class: { form: "form-style-1", title: "header", body: "body" }
//         }
//         // , id: "jx-address"
//     },
//     {
//         type: "text"
//         , id: "firstName"
//         , class: "first-name-class"
//         , label: "First Name"
//         , placeholder: "First Name"
//         , value: ""
//         , validation: {
//             required: { message: '$ is a required field' }
//         }
//     }, {
//         type: "text"
//         , id: "lastName"
//         , class: "last-name-class"
//         , label: "Last Name"
//         , placeholder: "Last Name"
//         , value: ""
//         , validation: {
//             required: { message: '$ is a required field' }
//         }
//     },
//     {
//         type: "radio"
//         , label: "Gender"
//         , value: ""
//         , id: "gender"
//         , class: {parent:'radio-container', element:'x'}
//         , options: [
//             { label: "Male", value: "M", id: "male" }
//             , { label: "Female", value: "F", id: "female" }
//         ]
//         , validation: {
//             required: { message: '$ is required' }
//         }
//     },
//     {
//         type: "date"
//         , label: "DOB"
//         , value: ""
//         , id: "dob"
//         , validation: {
//             required: { message: '$ is required' },
//             minlength: { value: '2018/04/24', message: 'Date is not in range' },
//             maxlength: { value: '2018/04/26', message: 'Date is not in range' }
//         }
//     },
//     {
//         type: "select"
//         , label: "Country"
//         , value: "0"
//         , id: "country"
//         , options: "countries3"
//         , validation: {
//             required: {
//                 message: 'You must select a value for $'
//             }
//         }
//     },
//     {
//         type: "select"
//         , label: "State"
//         , value: "0"
//         , id: "state"
//         , options: "states"
//         , validation: {
//             required: {
//                 message: 'You must select a value for $'
//             }
//         }
//     }
//     ,{
//         type: "textarea"
//         , id: "address"
//         , class: {
//             label: 'label-address-class'
//             , element: 'element-address-class'
//             , parent: 'parent-address-class'
//         }
//         , label: "Address"
//         , placeholder: "Address"
//         , value: ""
//         , validation: {
//             required: { message: '$ is required' },
//             minlength: { value: 25, message: 'Minimum length for $ is 25' },
//             maxlength: { value: 200, message: 'Maximum length for $ is 200' }
//         }
//     }, {
//         type: "submit"
//         , label: "submit"
//         , class: "btn btn-primary"
//         , actionName: "submit"
//     }
// ];
// export { form1 };


const form1 = [
    {
        type: 'meta'
        , client: {
            title: 'Test form'
            , class: 'form-style-1'

            // , validation: {
            //     // groupValidator1: { message: 'Data is not correct' }
            //     // ,
            //     groupAsyncValidator1: {
            //         message: 'Async validation failed'
            //         , arg: {
            //             url: 'http://localhost:3002/group'
            //         }
            //         , async: true
            //     }
            // }
        }
        , id: 'jx-address'
    }
    // , {
    //     type: 'anchor'
    //     , href: 'http://www.microsoft.com'
    //     , label: 'Some label'

    // }
    , {
        type: 'mat-checkboxgroup'
        , label: 'Food3'
        , id: 'food3'
        , validation: {
            required: { message: '$ is required' }
        }
        , options: 'food4'
    }
    , {
        type: 'checkboxgroup'
        , label: 'Food4'
        , id: 'food4'
        , validation: {
            required: { message: '$ is required' }
        }
        , options: 'food3'
    }
    , {
        type: 'mat-autocomplete'
        , label: 'mat autocomplete'
        , id: 'autocomplete1'
        , placeholder: 'Mat Autocomplete'
    }
    // , {
    //     type: 'custom1'
    //     , id: 'custom1'
    //     , label: 'Custom control'
    //     , placeholder: 'My custom control'
    //     , class: { label: 'red-class', element: 'textarea-class' }
    // }
    // ,
    // {
    //     type: 'textarea'
    //     , id: 'firstName'
    //     , label: 'First name'
    //     , placeholder: 'First name'
    //     , value: ''
    //     // , class: ''
    //     // , validation: {
    //     //     groupAsyncValidator1: {
    //     //         message: 'Async validation failed'
    //     //         , arg: {
    //     //             url: 'http://localhost:3002/group'
    //     //             , delay: 1000
    //     //         }
    //     //         , async: true
    //     //     }
    //     //     ,
    //     //     required: { message: '$ is required' }
    //     //     , minlength: { value: 3, message: 'Minimum length for $ is 3' }
    //     //     , maxlength: { value: 10, message: 'Maximum length for $ is 10' }
    //     // }
    // }
    // ,
    // {
    //     type: 'input'
    //     , id: 'firstName2'
    //     , subtype: 'date'
    //     , label: 'First name2'
    //     , placeholder: 'First name2'
    //     , value: ''
    //     // , validation: {
    //     //     required: {message: '$ is required'}
    //     // }
    // }
    // ,
    // {
    //     type: 'anchor'
    //     , id: 'myAnchor'
    //     , label: 'This is my anchor'
    //     , href: 'http://google.com'
    // }
    // ,
    // {
    //     type: 'textarea'
    //     , id: 'firstName-1'
    //     , label: 'First name1'
    //     , placeholder: 'First name1'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }

    // , {
    //     type: 'checkbox'
    //     , id: 'agreed'
    //     , label: 'Agreed'
    //     , value: true
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-radio'
    //     , label: 'Gender'
    //     , value: 'M'
    //     , id: 'gender123'
    //     , options: 'genders4'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country'
    //     , options: 'countries3'
    //     , validation: {
    //         required: {
    //             message: 'You must select a value for $'
    //         }
    //     }
    // }
    // , {
    //     type: 'mat-checkbox'
    //     , id: 'agreed'
    //     , label: 'Agreed'
    //     , value: true
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-radio'
    //     , label: 'Gender1'
    //     , value: 'M'
    //     , id: 'gender1234'
    //     , options: [
    //         { name: 'Male', value: 'M', id: 'male2' }
    //         , { name: 'Female', value: 'F', id: 'female2' }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'mat-select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country'
    //     , options: 'countries'
    //     , validation: {
    //         required: {
    //             message: 'You must select a value for $'
    //         }
    //     }
    // }

    // , {
    //     type: 'mat-input'
    //     , id: 'firstName'
    //     , placeholder: 'First name'
    //     , label: 'First name'
    //     , value: 'abcd'
    //     , validation: {
    //         // groupAsyncValidator1: {
    //         //     message: 'Async validation failed'
    //         //     , arg: {
    //         //         url: 'http://localhost:3002/group'
    //         //         , delay: 1000
    //         //     }
    //         //     , async: true
    //         // }
    //         // ,
    //         required: { message: '$ is required' }
    //         , minlength: { value: 3, message: 'Minimum length for $ is 3' }
    //         , maxlength: { value: 10, message: 'Maximum length for $ is 10' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-datepicker',
    //     id: 'matDatePicker1',
    //     placeholder: 'select a date'
    //     , label: 'myDatePicker'
    //     , locale: 'en-GB'
    //     , validation: {
    //         required: {
    //             message: 'You must surely select a value for $'
    //         }
    //     }
    // }
    // ,
    // {
    //     type: 'radio'
    //     , label: 'Gender1'
    //     , value: 'M'
    //     , id: 'gender1234'
    //     , options: [
    //         { name: 'Male', value: 'M', id: 'male2' }
    //         , { name: 'Female', value: 'F', id: 'female2' }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country'
    //     , options: 'countries3'
    //     , validation: {
    //         required: {
    //             message: 'You must select a value for $'
    //         }
    //     }
    // }
    // , {
    //     type: 'checkboxGroup'
    //     , label: 'Food2'
    //     , id: 'food2'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { label: 'Main course', value: false, id: 'main2' }
    //         , { label: 'Desert', value: true, id: 'desert2' }
    //         , { label: 'beverages', value: false, id: 'beverages2' }
    //     ]
    // }

    // ,
    // {
    //     type: 'array'
    //     , label: 'Tags'
    //     , id: 'tags'
    //     // , validation: {
    //     //     // groupValidator1: { message: '$ are not correct' }
    //     //     // ,
    //     //     groupAsyncValidator1: {
    //     //         message: 'Async validation failed'
    //     //         , arg: {
    //     //             url: 'http://localhost:3002/group'
    //     //         }
    //     //         , async: true
    //     //     }
    //     // }
    //     , group: {
    //         label: 'Tag'
    //         , validation: {
    //             // groupValidator1: { message: '$ is not correct' }
    //             // ,
    //             groupAsyncValidator1: {
    //                 message: 'Async validation failed'
    //                 , arg: {
    //                     url: 'http://localhost:3002/group'
    //                 }
    //                 , async: true
    //             }
    //         }
    //         , controls: [
    //             // {

    //             {
    //                 type: 'textarea'
    //                 , id: 'firstName'
    //                 , label: 'First name'
    //                 , placeholder: 'First name'
    //                 , value: ''
    //                 , style: { color: 'red' }
    //                 , class: { label: 'red-class', element: 'textarea-class' }
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
    //     type: 'group'
    //     , label: 'Passwords'
    //     , id: 'pwd'
    //     , validation: {
    //         groupValidator1: { message: '$ is not correct for group' }
    //         // ,
    //         // groupAsyncValidator1: {
    //         //     message: 'Async validation failed'
    //         //     , arg: {
    //         //         url: 'http://localhost:3002/group'
    //         //     }
    //         //     , async: true
    //         // }
    //     }
    //     , controls: [
    //         {
    //             type: 'textarea'
    //             , id: 'agreed'
    //             , label: 'Agreed'
    //             , value: 'abcd'
    //             // , validation: {
    //             //     required: { message: '$ is required' }
    //             //     ,
    //             //     groupAsyncValidator1: {
    //             //         message: 'Async validation failed'
    //             //         , arg: {
    //             //             url: 'http://localhost:3002/group'
    //             //         }
    //             //         , async: true
    //             //     }
    //             // }
    //         }
    //     ]
    // }
    // , {
    //     type: 'submit'
    //     , label: 'submit'
    //     , class: 'btn btn-primary'
    //     , actionId: 'submit'
    // }
    , {
        type: 'button'
        , label: 'My Submit'
        , class: 'btn btn-primary'
        , id: 'mySubmit'
        , validateForm: true
    }
    // , {
    //     type: 'button'
    //     , label: 'Cancel'
    //     , class: 'btn btn-primary'
    //     , actionId: 'submit1'
    //     // , validateForm: true
    // }
    , {
        type: 'buttongroup'
        // , label: 'Button group'
        , class: ''
        , id: 'button-group'
        , controls: [
            {
                type: 'button'
                , label: 'Submit2'
                , class: 'btn btn-primary'
                , id: 'submit2'
                , validateForm: true
            }
            , {
                type: 'button'
                , subtype: 'reset'
                , id: 'reset'
                , label: 'Cancel'
                , class: 'btn btn-primary'
                , actionId: 'cancel1'
            }
        ]
    }
    , {
        type: 'mat-button'
        , subType: 'raised'
        , faClass: 'fa fa-taxi fa-fw'
        , color: 'primary'
        , label: 'Add'
        , actionId: 'submit2'
        , validateForm: true
    }

];
export { form1 };

    // documentation
    // Group level sync and async validation
    // ,
    // {
    //     type: 'group'
    //     , label: 'Passwords'
    //     , id: 'pwd'
    //     , validation: {
    //         groupValidator1: { message: '$ is not correct' }
    //         , groupAsyncValidator1: {
    //             message: 'Async validation failed'
    //             , arg: {
    //                 url: 'http://localhost:3002/group'
    //             }
    //             , async: true
    //         }
    //     }
    //     , controls: [
    //         {
    //             type: 'checkbox'
    //             , id: 'agreed'
    //             , label: 'Agreed'
    //             , value: true
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //     ]
    // }
    // {
    //     type: 'meta'
    //     , client: {
    //         formClass: 'form-style-1',
    //         title: 'Test form',
    //         titleClass: 'header',
    //         bodyClass: 'body'
    //     }
    //     , id: 'jx-address'
    // }
    // ,
    // {
    //     type: 'textarea'
    //     , class: {parent:'textarea-test'}
    //     , id: 'address1'
    //     , label: 'Address'
    //     , placeholder: 'Address'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'text'
    //     , id: 'tagValue'
    //     , class: 'tag-class'
    //     , label: 'Tag value'
    //     , placeholder: 'Tag value'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-datepicker',
    //     id: 'matDatePicker1',
    //     placeholder: 'select a date'
    //     , label: 'myDatePicker'
    //     , locale: 'en-GB'
    //     , validation: {
    //         required: {
    //             message: 'You must surely select a value for $'
    //         }
    //     }
    // }
    // , {
    //     type: 'mat-input'
    //     , subType: 'text'
    //     , id: 'mat1'
    //     , label: 'mat name'
    //     , placeholder: 'mat placeholder'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // , {
    //     type: 'anchor'
    //     , href: 'http://www.microsoft.com'
    //     , label: 'Some label'

    // }

    // mat-button
    // subType can be button, icon, raised, fab, mini-Fab
    // color can be primary, danger, accent and warn
    // , {
    //     type: 'mat-button'
    //     , subType:'mini-fab'
    //     , faClass:'fa fa-taxi fa-fw'
    //     , color:'primary'
    //     // , label: 'My Taxi'
    //     , actionId: 'submit2'
    //     , validateForm:true
    // }
// ,
    // {
    //     type: 'group'
    //     , label: 'Passwords'
    //     , id: 'pwd'
    //     , controls: [
    //         {
    //             type: 'checkbox'
    //             , id: 'agreed'
    //             , label: 'Agreed'
    //             , value: false
    //             , validation: {
    //                 required: { message: '$ is required' }
    //             }
    //         }
    //         , {
    //             type: 'group'
    //             , id: 'Agreement1'
    //             , label: 'Agreement'
    //             , controls: [
    //                 {
    //                     type: 'checkbox'
    //                     , id: 'agreed11'
    //                     , label: 'Agreed'
    //                     , value: true
    //                 }
    //                 , {
    //                     type: 'group'
    //                     , id: 'Agreement1'
    //                     , label: 'Agreement'
    //                     , controls: [
    //                         {
    //                             type: 'checkbox'
    //                             , id: 'agreed111'
    //                             , label: 'Agreed11'
    //                             , value: true
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //         ,
    //         {
    //             type: 'textarea'
    //             , id: 'address'
    //             , label: 'Address'
    //             , placeholder: 'Address'
    //             , value: '12345'
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
    //     type: 'groupArray'
    //     , label: 'Tags'
    //     , id: 'tags'
    //     , group: {
    //         label: 'Tag'
    //         , id: 'tag'
    //         , controls: [
    //             {
    //                 type: 'mat-checkbox'
    //                 , id: 'agreed8'
    //                 , label: 'Agreed'
    //                 , value: false
    //             }
    //             , {
    //                 type: 'textarea'
    //                 , id: 'firstName'
    //                 , label: 'First name'
    //                 , placeholder: 'First name'
    //                 , value: ''
    //                 , class: { label: 'red-class', element: 'textarea-class' }
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
    //                 type: 'checkbox'
    //                 , id: 'agreed9'
    //                 , label: 'Agreed'
    //                 , value: true
    //             }
    //             , {
    //                 type: 'checkboxGroup'
    //                 , label: 'Food2'
    //                 , id: 'food2'
    //                 , validation: {
    //                     required: { message: '$ is required' }
    //                 }
    //                 , options: [
    //                     { label: 'Main course', value: false, id: 'main2' }
    //                     , { label: 'Desert', value: true, id: 'desert2' }
    //                     , { label: 'beverages', value: false, id: 'beverages2' }
    //                 ]
    //             }
    //             , {
    //                 type: 'radio'
    //                 , label: 'Gender'
    //                 , value: 'M'
    //                 , id: 'gender123'
    //                 , options: [
    //                     { name: 'Male', value: 'M', id: 'male1' }
    //                     , { name: 'Female', value: 'F', id: 'female1' }
    //                 ]
    //             }
    //             , {
    //                 type: 'select'
    //                 , label: 'Country'
    //                 , value: ''
    //                 , id: 'country'
    //                 , options: 'countries3'
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
    //     type: 'select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country1'
    //     , options:'countries3'
    //     , validation: {
    //         required:{
    //             message:'You must surely select a value for $'
    //         }
    //     }
    // }
    // , {
    //     type: 'mat-textarea'
    //     , id: 'tagValue'
    //     , class: 'tag-class'
    //     , label: 'Tag value'
    //     , placeholder: 'Tag value'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // , {
    //     type: 'mat-input'
    //     , subType: 'text'
    //     , id: 'mat1'
    //     , label: 'mat name'
    //     , placeholder: 'mat placeholder'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is a required field' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-radio'
    //     , label: 'Gender'
    //     , value: 'M'
    //     , id: 'gender12'
    //     , options: [
    //         { name: 'Male', value: 'M', id: 'male1' }
    //         , { name: 'Female', value: 'F', id: 'female1' }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: 'mat-select'
    //     , label: 'Country'
    //     , value: ''
    //     , id: 'country'
    //     , options: 'countries3'
    //     , validation: {
    //         required:{message:'Value is required'}
    //     }
    // }
    // ,
    // {
    //     type: 'textarea'
    //     , id: 'address'
    //     , class: {
    //         label: 'label-address-class'
    //         , element: 'element-address-class'
    //         , parent: 'parent-address-class'
    //     }
    //     , label: 'Address'
    //     , placeholder: 'Address'
    //     , value: '12345'
    //     , validation: {
    //         required: { message: '$ is required' },
    //         minlength: { value: 5, message: 'Minimum length for $ is 5' },
    //         maxlength: { value: 200, message: 'Maximum length for $ is 200' }
    //     }
    // }
    // , {
    //     type: 'checkbox'
    //     , id: 'agreed'
    //     , label: 'Agreed'
    //     , value: false
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }, {
    //     type: 'checkboxGroup'
    //     , label: 'Food2'
    //     , id: 'food2'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { label: 'Main course', value: false, id: 'main2' }
    //         , { label: 'Desert', value: true, id: 'desert2' }
    //         , { label: 'beverages', value: false, id: 'beverages2' }
    //     ]
    // }
    // ,
    // {
    //     type: 'radio'
    //     , label: 'Gender'
    //     , value: 'M'
    //     , id: 'gender123'
    //     , options: [
    //         { name: 'Male', value: 'M', id: 'male1' }
    //         , { name: 'Female', value: 'F', id: 'female1' }
    //     ]
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // ,
    // {
    //     type: 'mat-checkbox'
    //     , id: 'agreed3'
    //     , label: 'Agreed'
    //     , value: false
    // }
    // ,
    // , {
    //     type: 'text'
    //     , id: 'email1'
    //     , label: 'email1'
    //     , placeholder: 'email'
    //     , value: ''
    //     , validation: {
    //         required: { message: '$ is required' },
    //         email1: {
    //             message: 'Your email is invalid'
    //             , arg: {
    //                 url: 'http://localhost:3002/email'
    //             }
    //             , async: true
    //         },
    //         email2: {
    //             message: 'Sync email invalid'
    //             , arg: 'test'
    //         }
    //     }
    // }
    // , {
    //     type: 'checkboxGroup'
    //     , label: 'Food1'
    //     , id: 'food1'
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { label: 'Main course', value: false, id: 'main1' }
    //         , { label: 'Desert', value: true, id: 'desert1' }
    //         , { label: 'beverages', value: false, id: 'beverages1' }
    //     ]
    // }

    // , {
    //     type: 'select'
    //     , label: 'Country'
    //     , value: '0'
    //     , id: 'country'
    //     , options: [
    //         { name: '---Choose---', value: '0' }
    //         , { name: 'USA', value: 'us' }
    //         , { name: 'India', value: 'in' }
    //     ]
    //     , validation: {
    //         selectRequired: {
    //             message: 'You must select a value for $'
    //             , arg: 0
    //         }
    //     }
    // }

    