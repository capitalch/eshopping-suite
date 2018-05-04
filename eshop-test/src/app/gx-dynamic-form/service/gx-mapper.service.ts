import { Injectable } from '@angular/core';
import { components } from '../gx-controls/gx-dynamic/gx-component-mapper';

@Injectable()
export class GxMapperService {
  components: any;
  constructor() {
    this.components = components;
  }

  mapComponents(comps) {
    if (comps) {
      this.components = Object.assign(this.components, comps);
    }
  }

  getMappedComponent(compName) {
    return (this.components[compName]);
  }



}
