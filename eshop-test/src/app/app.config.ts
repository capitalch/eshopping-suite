let form1 = [
    {
        type: "group"
        , label: "Passwords"
        , id: "pwd"
        , controls: [
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
            }
            , {
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
                        , arg: 0
                    }
                }
            }
            , {
                type: "checkboxGroup"
                , label: "Food3"
                , id: "food3"
                , validation: {
                    required: { message: '$ is required' }
                }
                , options: [
                    { label: "Main course", value: false, id: "main3" }
                    , { label: "Desert", value: true, id: "desert3" }
                    , { label: "beverages", value: false, id: "beverages3" }
                ]
            }
            , {
                type: "checkbox"
                , id: "agreed3"
                , label: "Agreed"
                , value: true
            }
            , {
                type: "radio"
                , label: "Gender"
                , value: "M"
                , id: "gender123"
                , options: [
                    { label: "Male", value: "M", id: "male1" }
                    , { label: "Female", value: "F", id: "female1" }
                ]
            }
            ,
            {
                type: "groupArray"
                , label: "Tags"
                , id: "tags"
                , group: {
                    label: "Tag"
                    , id: "tag3"
                    , controls: [
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
                        }
                        , {
                            type: "checkbox"
                            , id: "agreed3"
                            , label: "Agreed"
                            , value: true
                        }
                        , {
                            type: "checkboxGroup"
                            , label: "Food3"
                            , id: "food3"
                            , validation: {
                                required: { message: '$ is required' }
                            }
                            , options: [
                                { label: "Main course", value: false, id: "main3" }
                                , { label: "Desert", value: true, id: "desert3" }
                                , { label: "beverages", value: false, id: "beverages3" }
                            ]
                        }

                    ]
                }
            }
        ]
    }
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
                    type: "textarea"
                    , id: "firstName"
                    , label: "First name"
                    , placeholder: "First name"
                    , value: ""
                    , class: { label: "redClass" }
                    , validation: {
                        required: { message: '$ is required' },
                        minlength: { value: 3, message: 'Minimum length for $ is 3' },
                        maxlength: { value: 10, message: 'Maximum length for $ is 10' },
                        myValidate: {
                            message: 'My validation fails'
                            , arg: 'test'
                        }
                    }
                }
                , {
                    type: "checkbox"
                    , id: "agreed2"
                    , label: "Agreed"
                    , value: true
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
                , {
                    type: "radio"
                    , label: "Gender"
                    , value: "M"
                    , id: "gender123"
                    , options: [
                        { label: "Male", value: "M", id: "male1" }
                        , { label: "Female", value: "F", id: "female1" }
                    ]
                }
                , {
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
                            , arg: 0
                        }
                    }
                }
            ]
        }
    }

    , {
        type: 'submit'
        , label: 'Submit'
        , class: { group: 'submit-right', element: 'btn btn-primary' }
        , actionName: 'submitForm'
    }

];
export { form1 };