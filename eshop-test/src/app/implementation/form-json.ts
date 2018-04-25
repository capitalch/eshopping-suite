let form1 = [
    {
        type: "meta"
        , client: {
            formClass: "form-style-1",
            title: "Employee Profile",
            titleClass: "header",
            bodyClass: "body"
        }
        // , id: "jx-address"
    }
    , {
        type: "text"
        , id: "firstName"
        , class: "first-name-class"
        , label: "First Name"
        , placeholder: "First Name"
        , value: ""
        , validation: {
            required: { message: '$ is a required field' }
        }
    }, {
        type: "text"
        , id: "lastName"
        , class: "last-name-class"
        , label: "Last Name"
        , placeholder: "Last Name"
        , value: ""
        , validation: {
            required: { message: '$ is a required field' }
        }
    },
    {
        type: "radio"
        , label: "Gender"
        , value: ""
        , id: "gender"
        , options: [
            { label: "Male", value: "M", id: "male" }
            , { label: "Female", value: "F", id: "female" }
        ]
        , validation: {
            required: { message: '$ is required' }
        }
    },
    {
        type: "select"
        , label: "Country"
        , value: "0"
        , id: "country"
        , options: "countries3"
        , validation: {
            selectRequired: {
                message: 'You must select a value for $'
                , arg: 0
            }
        }
    },
    {
        type: "select"
        , label: "State"
        , value: "0"
        , id: "state"
        , options: "states"
        , validation: {
            selectRequired: {
                message: 'You must select a value for $'
                , arg: 0
            }
        }
    }
    ,{
        type: "textarea"
        , id: "address"
        , class: {
            label: 'label-address-class'
            , element: 'element-address-class'
            , parent: 'parent-address-class'
        }
        , label: "Address"
        , placeholder: "Address"
        , value: ""
        , validation: {
            required: { message: '$ is required' },
            minlength: { value: 25, message: 'Minimum length for $ is 25' },
            maxlength: { value: 200, message: 'Maximum length for $ is 200' }
        }
    }, {
        type: "submit"
        , label: "submit"
        , class: "btn btn-primary"
        , actionName: "submit"
    }
];
export { form1 };












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
    //                 , value: "0"
    //                 , id: "country"
    //                 , options: "countries3"
    //                 , validation: {
    //                     selectRequired: {
    //                         message: 'You must select a value for $'
    //                         , arg: 0
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // }
    // ,
    // {
    //     type:"mat-datepicker",
    //     id:"matDatePicker1",
    //     placeholder:"select a date"
    // }
    