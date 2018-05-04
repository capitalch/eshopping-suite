# gx-error
gx-error is used to display error message when validation fails. gx-error can be provided at form level, group level, array level and component level since you can set validations at these four levels. gx-error displays error messages if the errors property of element is not null. There are following input properties available for gx-error:
1) layout: This is configuration of the element available from json configuration file which is passed to the form in form of [layouts]=...
2) parent: This is provided when the element is child of another element. This is to be used in case of 
    a) component in a form or group
    b) group in a form
    c) array in a form
    In ts file the control is found out from layout.id and parent as parent.get(layout.id)
3) control: If you need form level validation then provide:
    <gx-error [layout]="layout" [control]="myForm"></gx-error>
    If you need group level validation in an array then provide:
    <gx-error [layout]="layout.group" [control] = "group"></gx-error>

**Please note that either one of the input properties of _parent_ and _control_ has to be used and not both.**

# Styling
1. Each element / component when created in gx-controls has its own .scss file which controls the style of the component
2. In layout you can provide style:{...} object in each element
3. In gx-form.component.scss we provide a general default styling governing overall form. Similarly default group and array styling will be provided in corresponding .scss files
4. From app.component.scss with ng-deep:: you provide a form level class. For each element you can provide a class over here with its id name. id-label and id-cotainer will control the label and container of the element. These will be used in ngClass attribute