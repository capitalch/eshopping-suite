import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JxCheckboxComponent, JxTextareaComponent, JxRadioComponent, JxSelectComponent, JxButtonComponent, JxSubmitComponent, JxAnchorComponent } from '../jx-core/core.components';
import { JxCheckboxGroupComponent } from '../jx-checkbox-group/jx-checkbox-group.component';
import { JxMatCheckboxComponent, JxMatInputComponent, JxMatRadioComponent, JxMatSelectComponent, JxMatTextAreaComponent, JxMatDatePickerComponent, JxMatButtonComponent } from '../jx-mat/mat.components';
import { JxGroupComponent } from '../../jx-group/jx-group.component';
import { JxArrayComponent } from '../../jx-array/jx-array.component';
import { JxService } from '../../jx-service/jx.service';
import { Custom1Component } from '../custom1/custom1.component';

@Component({
  selector: 'jx-dynamic'
  , template: `
    <div [ngClass] = "classes.parentClass">
    </div>`
})
export class JxDynamicComponent implements OnInit {
  @Input() layout: any;
  @Input() idx: string;
  @Input() parent: FormGroup;
  component;
  components: any = {
    checkbox: JxCheckboxComponent
    , textarea: JxTextareaComponent
    , radio: JxRadioComponent
    , select: JxSelectComponent
    , checkboxGroup: JxCheckboxGroupComponent
    , "mat-checkbox": JxMatCheckboxComponent
    , "mat-input": JxMatInputComponent
    , "mat-radio": JxMatRadioComponent
    , "mat-select": JxMatSelectComponent
    , "mat-textarea": JxMatTextAreaComponent
    , "mat-datepicker": JxMatDatePickerComponent
    , "mat-button": JxMatButtonComponent
    , group: JxGroupComponent
    , array: JxArrayComponent
    , anchor: JxAnchorComponent
    , button: JxButtonComponent
    , submit: JxSubmitComponent
    , custom1: Custom1Component
  }
  classes: any = {}
  constructor(private jxService: JxService
    , private resolver: ComponentFactoryResolver
    , private container: ViewContainerRef
  ) { }

  ngOnInit() {
    this.classes = this.jxService.getClasses(this.layout, this.parent);
    // const component = this.jxService.getComponent(this.layout.type);
    // const component = components[this.layout.type];
    const component = this.components[this.layout.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.layout = this.layout;
    this.component.instance.idx = this.idx;
    this.component.instance.parent = this.parent;
  }

}
