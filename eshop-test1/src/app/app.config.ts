let form1 = [
    // {
    //     type: "text"
    //     , id: "firstName"
    //     , label: "First name"
    //     , placeholder: "First name"
    //     , value: ""
    //     , class: { label: "redClass" }
    //     , validation: {
    //         required: { message: '$ is required' },
    //         minlength: { value: 3, message: 'Minimum length for $ is 3' },
    //         maxlength: { value: 10, message: 'Maximum length for $ is 10' },
    //         myValidate: {
    //             message: 'My validation fails'
    //             , arg: 'test'
    //         }
    //     }
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
    //                 type: "text"
    //                 , id: "tagName"
    //                 , label: "Tag name"
    //                 , placeholder: "Tag name"
    //                 , value: ""
    //                 , validation: {
    //                     required: { message: '$ is a required field' }
    //                     , myValidate: {
    //                         message: 'My validation for $ fails'
    //                         , arg: 'sus'
    //                     }
    //                 }

    //             }
    //             , {
    //                 type: "text"
    //                 , id: "tagValue"
    //                 , label: "Tag value"
    //                 , placeholder: "Tag value"
    //                 , value: ""
    //                 , validation: {
    //                     required: { message: '$ is a required field' }
    //                 }
    //             }
    //             , {
    //                 type: "checkbox"
    //                 , id: "agreed"
    //                 , label: "Agreed"
    //                 , value: false
    //             }
    //         ]
    //     }
    // }

    // , 
    {
        type: "group"
        , label: "Passwords"
        , id: "pwd"
        , controls: [
            {
                type: "password"
                , id: "password"
                , label: "Password"
                , placeholder: "password"
                , value: ""
                , validation: {
                    required: { message: '$ is a required field' }
                }
            }
            , {
                type: "text"
                , id: "confirmPassword"
                , label: "Confirm password"
                , placeholder: "Confirm password"
                , value: ""
            }
            // , {
            //     type: "checkbox"
            //     , id: "agreed1"
            //     , label: "Agreed"
            //     , value: false
            // }
            // , {
            //     type: "radio"
            //     , label: "Gender"
            //     , value: "M"
            //     , id: "gender123"
            //     , options: [
            //         { label: "Male", value: "M", id: "male1" }
            //         , { label: "Female", value: "F", id: "female1" }
            //     ]
            // }
            ,
            {
                type: "groupArray"
                , label: "Tags"
                , id: "tags"
                , group: {
                    label: "Tag"
                    , id: "tag"
                    , controls: [
                        {
                            type: "text"
                            , id: "tagName"
                            , label: "Tag name"
                            , placeholder: "Tag name"
                            , value: ""
                            , validation: {
                                required: { message: '$ is a required field' }
                                , myValidate: {
                                    message: 'My validation for $ fails'
                                    , arg: 'sus'
                                }
                            }

                        }
                        , {
                            type: "text"
                            , id: "tagValue"
                            , label: "Tag value"
                            , placeholder: "Tag value"
                            , value: ""
                            , validation: {
                                required: { message: '$ is a required field' }
                            }
                        }
                    ]
                }
            }
        ]
    }
    // , {
    //     type: "text"
    //     , id: "lastName"
    //     , label: "Last name"
    //     , placeholder: "Last name"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is required' },
    //         minlength: { value: 3, message: 'Minimum length for $ is 3' },
    //         maxlength: { value: 10, message: 'Maximum length for $ is 10' }
    //     }
    // }
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
    //     type: "textarea"
    //     , id: "address"
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
    //     type: "date"
    //     , id: "date"
    //     , label: "Date"
    //     , placeholder: "Date"
    //     , value: ""
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    // }
    // , {
    //     type: "checkbox"
    //     , id: "agreed"
    //     , label: "Agreed"
    //     , value: false
    // }
    // , {
    //     type: "radio"
    //     , label: "Gender"
    //     , value: "M"
    //     , id: "gender"
    //     , options: [
    //         { label: "Male", value: "M", id: "male" }
    //         , { label: "Female", value: "F", id: "female" }
    //     ]
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
    //         { label: "---Choose---", value: "0" }
    //         , { label: "USA", value: "us" }
    //         , { label: "India", value: "in" }
    //     ]
    //     , validation: {
    //         selectRequired: {
    //             message: 'You must select a value for $'
    //             , arg: 0
    //         }
    //     }
    // }
    // , {
    //     type: "checkboxGroup"
    //     , label: "Food"
    //     , id: "food"
    //     , validation: {
    //         required: { message: '$ is required' }
    //     }
    //     , options: [
    //         { label: "Main course", value: false, id: "main" }
    //         , { label: "Desert", value: true, id: "desert" }
    //         , { label: "beverages", value: false, id: "beverages" }
    //     ]
    // }
    // , {
    //     type: 'submit'
    //     , label: 'Submit'
    //     , id: 'submitForm1'
    //     , class: { group: 'submit-right', element: 'btn btn-primary' }
    //     , actionName: 'submitForm'
    // }
    // ,{
    //     type: 'button'
    //     , label: "Reset"
    //     , id: 'resetForm1'
    //     , class: { group: 'submit-right', element: 'btn btn-primary' }
    //     , actionName: 'resetForm'
    // }
];
export { form1 };