import { Directive, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

@Directive({
    selector: '[dynamicField]',
})
export class DynamicFieldDirective {
    @Input() config;
    @Input() group: FormGroup;
    component;
    components = {
        button: FormButtonComponent
        , input: FormInputComponent
        , select: FormSelectComponent
    };

    constructor(
        private resolver: ComponentFactoryResolver
        , private container: ViewContainerRef
    ) { }

    ngOnInit() {
        const component = this.components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}