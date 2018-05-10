import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IbukiService } from '../../gx-dynamic-form/service/ibuki.service';
import { GxCustomService } from '../../service/gx-custom.service';
import { form1 } from '../form-json';
import {tempJson} from '../template'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title = 'app';
  myLayout: any = {};
  options: any = {};
  content: string;
  subs: any;
  template: any;
  jsonArray: any = [{type: 'meta', client: {title: 'Template Form', class: 'form-style-1'}, id: 'template'}];
  constructor(
    private ibukiService: IbukiService
    , private httpClient: HttpClient
    , private gxCustomService: GxCustomService
  ) {

  }

  ngOnInit() {
    this.template = tempJson;
    this.processTemplate();
    //this.myLayout = form1;
    this.myLayout = this.jsonArray;
    this.content = 'This is code';
    console.log(this.jsonArray);
  }

  processTemplate()
  {
    var grouping;
    var controlArray=[];
    for (var index in this.template) {
      var groupObj = this.template[index];
      for(let groupTitle in groupObj)
      {
        grouping = {type:'group',label: groupTitle ,id: groupTitle.replace(/ /g, "-")};
        for (var prop of groupObj[groupTitle])
        {
          controlArray.push({type:'input',subtype:'text', id: prop.replace(/ /g, "-"), label: prop , value:' ', validation: {required: { message: '$ is required' }}});
        }
        grouping["controls"] = controlArray;
      };
      this.jsonArray.push(grouping);
      grouping = null;
      controlArray = [];
    }
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
