let form1 = [
    {
        type: "meta"
        , client: {
            title: "Test form"
            , titleClass: "header"
            , bodyClass: "body"
            , class: { form: "form-style-1", title: "header", body: "body" }
        }
        // , id: "jx-address"
    },
    {
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
        , class: {parent:'radio-container', element:'x'}
        , options: [
            { label: "Male", value: "M", id: "male" }
            , { label: "Female", value: "F", id: "female" }
        ]
        , validation: {
            required: { message: '$ is required' }
        }
    },
    {
        type: "date"
        , label: "DOB"
        , value: ""
        , id: "dob"
        , validation: {
            required: { message: '$ is required' },
            minlength: { value: '2018/04/24', message: 'Date is not in range' },
            maxlength: { value: '2018/04/26', message: 'Date is not in range' }
        }
    },
    {
        type: "select"
        , label: "Country"
        , value: "0"
        , id: "country"
        , options: "countries3"
        , validation: {
            required: {
                message: 'You must select a value for $'
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
            required: {
                message: 'You must select a value for $'
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









