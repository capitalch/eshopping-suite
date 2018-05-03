import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GxTextareaComponent, GxButtonComponent } from '../gx-core/core.components';
// import { GxService } from '../../gx.service';
import { components } from './gx-component-mapper';
import { BrokerService } from '../../../broker.service';
import { GxMapperService } from '../../service/gx-mapper.service';

@Directive({
  selector: '[appGxDynamic]'
})
export class GxDynamicDirective implements OnInit, OnDestroy {
  @Input() parent: FormGroup;
  @Input() layout: any;
  myComponents: any;
  component;
  constructor(
    private gxMapperService: GxMapperService
    , private brokerService: BrokerService
    , private resolver: ComponentFactoryResolver
    , private container: ViewContainerRef
  ) {
  }
  sub;
  ngOnInit() {
    // const component = components[this.layout.type.toLowerCase()];
    const component = this.gxMapperService.getMappedComponent(this.layout.type);
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.parent = this.parent;
    this.component.instance.layout = this.layout;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
