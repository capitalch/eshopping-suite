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
        type: 'meta',
        client: {
            title: 'Template Form',
            class: 'form-style-1'
        },
        id: 'template'
    }, {
        type: 'group',
        label: 'General',
        id: 'General',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'In-the-Box',
            label: 'In the Box',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Model-Number',
            label: 'Model Number',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Model-Name',
            label: 'Model Name',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Color',
            label: 'Color',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Browse-Type',
            label: 'Browse Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'SIM-Type',
            label: 'SIM Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Hybrid-Sim-Slot',
            label: 'Hybrid Sim Slot',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Touchscreen',
            label: 'Touchscreen',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'OTG-Compatible',
            label: 'OTG Compatible',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Quick-Charging',
            label: 'Quick Charging',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Display Features',
        id: 'Display-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Display-Size',
            label: 'Display Size',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Resolution',
            label: 'Resolution',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Resolution-Type',
            label: 'Resolution Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Display-Type',
            label: 'Display Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Other-Display-Features',
            label: 'Other Display Features',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Os & Processor Features',
        id: 'Os-&-Processor-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Operating-System',
            label: 'Operating System',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Processor-Type',
            label: 'Processor Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Processor-Core',
            label: 'Processor Core',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Primary-Clock-Speed',
            label: 'Primary Clock Speed',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Secondary-Clock-Speed',
            label: 'Secondary Clock Speed',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Memory & Storage Features',
        id: 'Memory-&-Storage-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Internal-Storage',
            label: 'Internal Storage',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'RAM',
            label: 'RAM',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Expandable-Storage',
            label: 'Expandable Storage',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Supported-Memory-Card-Type',
            label: 'Supported Memory Card Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Memory-Card-Slot-Type',
            label: 'Memory Card Slot Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Phone-Book-Memory',
            label: 'Phone Book Memory',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Call-Log-Memory',
            label: 'Call Log Memory',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Camera Features',
        id: 'Camera-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Primary-Camera-Available',
            label: 'Primary Camera Available',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Primary-Camera',
            label: 'Primary Camera',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Primary-Camera-Features',
            label: 'Primary Camera Features',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Secondary-Camera-Available',
            label: 'Secondary Camera Available',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Secondary-Camera',
            label: 'Secondary Camera',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Secondary-Camera-Features',
            label: 'Secondary Camera Features',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Flash',
            label: 'Flash',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Video-Recording',
            label: 'Video Recording',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Call Features',
        id: 'Call-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Phone-Book',
            label: 'Phone Book',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Connectivity Features',
        id: 'Connectivity-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Network-Type',
            label: 'Network Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Supported-Networks',
            label: 'Supported Networks',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Internet-Connectivity',
            label: 'Internet Connectivity',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: '3G',
            label: '3G',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Pre-installed-Browser',
            label: 'Pre-installed Browser',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Bluetooth-Support',
            label: 'Bluetooth Support',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Bluetooth-Version',
            label: 'Bluetooth Version',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Wi-Fi',
            label: 'Wi-Fi',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'USB-Connectivity',
            label: 'USB Connectivity',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Audio-Jack',
            label: 'Audio Jack',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Other Details',
        id: 'Other-Details',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Smartphone',
            label: 'Smartphone',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'SIM-Size',
            label: 'SIM Size',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'SMS',
            label: 'SMS',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Sensors',
            label: 'Sensors',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Other-Features',
            label: 'Other Features',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Important-Apps',
            label: 'Important Apps',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Multimedia Features',
        id: 'Multimedia-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Audio-Formats',
            label: 'Audio Formats',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Video-Formats',
            label: 'Video Formats',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Battery & Power Features',
        id: 'Battery-&-Power-Features',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Battery-Capacity',
            label: 'Battery Capacity',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Battery-Type',
            label: 'Battery Type',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Dimensions',
        id: 'Dimensions',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Width',
            label: 'Width',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Height',
            label: 'Height',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, {
            type: 'input',
            subtype: 'text',
            id: 'Depth',
            label: 'Depth',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    }, {
        type: 'group',
        label: 'Warranty',
        id: 'Warranty',
        controls: [{
            type: 'input',
            subtype: 'text',
            id: 'Warranty-Summary',
            label: 'Warranty Summary',
            value: '',
            validation: {
                required: {
                    message: '$ is required'
                }
            }
        }, ]
    },
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
