import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GxTextareaComponent, GxButtonComponent } from '../gx-core/core.components';
import { GxService } from '../../gx.service';
import { components } from './gx-component-mapper';

@Directive({
  selector: '[gxDynamic]'
})
export class GxDynamicDirective implements OnInit {
@Input() parent: FormGroup
@Input() layout: any;
components = {
  textarea: GxTextareaComponent
  , button: GxButtonComponent
}
component;
  constructor(
    // private gxService:GxService
    // , 
    private resolver: ComponentFactoryResolver
    , private container : ViewContainerRef
  ) { }

  ngOnInit(){
    // const component = this.gxService.componentMapper(this.layout.type);
    const component = components[this.layout.type.toLowerCase()];
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.parent = this.parent;
    this.component.instance.layout = this.layout;
  }
}
