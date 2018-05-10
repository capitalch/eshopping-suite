import { GxTextareaComponent, GxButtonComponent, GxAnchorComponent, GxInputComponent, GxRadioComponent } from '../gx-core/core.components';
import { GxCheckboxComponent, GxSelectComponent, GxCheckboxGroupComponent } from '../gx-core/core.components';
import { GxGroupComponent } from '../../gx-group/gx-group.component';
import { GxArrayComponent } from '../../gx-array/gx-array.component';
import { GxButtonGroupComponent } from '../gx-button-group/gx-button-group.component';
import { GxMatCheckboxComponent, GxMatRadioComponent, GxMatSelectComponent, GxMatTextareaComponent } from '../gx-mat/mat.components';
import { GxMatInputComponent, GxMatDatePickerComponent, GxMatButtonComponent } from '../gx-mat/mat.components';
import { GxMatCheckboxGroupComponent } from '../gx-mat/mat.components';
import { GxMatAutocompleteComponent } from '../gx-mat/gx-mat-autocomplete/gx-mat-autocomplete.component';
// import { InputComponent } from '../../../custom-controls/input/input.component';


const components = {
    textarea: GxTextareaComponent
    , button: GxButtonComponent
    , group: GxGroupComponent
    , array: GxArrayComponent
    , buttongroup: GxButtonGroupComponent
    , anchor: GxAnchorComponent
    , input: GxInputComponent
    , checkbox: GxCheckboxComponent
    , radio: GxRadioComponent
    , select: GxSelectComponent
    , checkboxgroup: GxCheckboxGroupComponent
    , 'mat-checkbox': GxMatCheckboxComponent
    , 'mat-radio': GxMatRadioComponent
    , 'mat-select': GxMatSelectComponent
    , 'mat-textarea': GxMatTextareaComponent
    , 'mat-input': GxMatInputComponent
    , 'mat-datepicker': GxMatDatePickerComponent
    , 'mat-button': GxMatButtonComponent
    , 'mat-checkboxgroup': GxMatCheckboxGroupComponent
    , 'mat-autocomplete': GxMatAutocompleteComponent
};

export { components };
