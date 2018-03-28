import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonFormService } from '../json-form/json-form.service';

@Component({
  selector: 'groupx-child',
  templateUrl: './groupx-child.component.html',
  styleUrls: ['./groupx-child.component.scss']
})
export class GroupxChildComponent implements OnInit {
@Input() layout:any;
@Input() myForm:any;
  constructor(private formService:JsonFormService) { 
    console.log('constructor group')
  }

  ngOnInit() {
    console.log('init group');
    // this.formService.ee.emit("load");
  }

}
