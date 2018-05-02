import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GxTextareaComponent, GxButtonComponent } from '../gx-core/core.components';
import { GxService } from '../../gx.service';
import { components } from './gx-component-mapper';
import { BrokerService } from '../../../broker.service';

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
    private brokerService: BrokerService
    ,
    private resolver: ComponentFactoryResolver
    , private container: ViewContainerRef
  ) { }
sub;
  ngOnInit() {
    this.sub =this.brokerService.filterOn("userComponents").subscribe(d => {
      console.log(d);
    });
    const component = components[this.layout.type.toLowerCase()];
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.parent = this.parent;
    this.component.instance.layout = this.layout;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
