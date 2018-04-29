import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, Input, Directive } from '@angular/core';
import { Jx2TextareaComponent } from '../core/core.components';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[dynamic2]',
  // templateUrl: './dynamic2-control.component.html',
  // styleUrls: ['./dynamic2-control.component.scss']
})
export class Dynamic2ControlComponent implements OnInit {
component;
@Input() parent: FormGroup;
@Input() layout: any;
  constructor(
    private resolver:ComponentFactoryResolver
    , private container:ViewContainerRef
  ) { }

  ngOnInit() {
    const component = Jx2TextareaComponent;
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.parent = this.parent;
    this.component.instance.layout = this.layout;
  }

}
