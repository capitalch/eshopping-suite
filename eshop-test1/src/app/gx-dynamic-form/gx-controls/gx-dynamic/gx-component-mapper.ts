import { GxTextareaComponent, GxButtonComponent, GxAnchorComponent, GxInputComponent, GxRadioComponent } from '../gx-core/core.components';
import { GxCheckboxComponent, GxSelectComponent } from '../gx-core/core.components';
import { GxGroupComponent } from '../../gx-group/gx-group.component';
import { GxArrayComponent } from '../../gx-array/gx-array.component';
import { GxButtonGroupComponent } from '../gx-button-group/gx-button-group.component';
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
};

export { components };
