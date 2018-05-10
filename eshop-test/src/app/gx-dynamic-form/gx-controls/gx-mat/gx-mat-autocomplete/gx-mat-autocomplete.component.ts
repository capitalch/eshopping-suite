import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GxService } from '../../../service/gx.service';

@Component({
  selector: 'app-gxmat-autocomplete',
  templateUrl: './gx-mat-autocomplete.component.html',
  styleUrls: ['./gx-mat-autocomplete.component.scss']
})
export class GxMatAutocompleteComponent implements OnInit {
  @Input() layout: any;
  @Input() parent: FormGroup;
  constructor(private gxService: GxService) { }

  ngOnInit() {
    this.gxService.createGenericControl(this.layout, this.parent);
  }
}
