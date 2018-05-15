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
  finalTemplateArray: any = [{type: 'meta', client: {title: 'Specification', class: 'form-style-1'}, id: 'template'}];
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
    this.myLayout = this.finalTemplateArray;
    this.content = 'This is code';
    console.log(this.finalTemplateArray);
  }

  processTemplate()
  {
    let group;
    let controlArray=[];
    for (let index in this.template) {
      let groupObj = this.template[index];
      for(let groupTitle in groupObj)
      {
        group = {type:'specgroup',label: groupTitle ,id: groupTitle.replace(/ /g, "-")};
        for (let prop of groupObj[groupTitle])
        {
          controlArray.push({type:'input',subtype:'text', id: prop.replace(/ /g, "-"), label: prop , value:' ', validation: {required: { message: '$ is required' }}});
        }
        group["controls"] = controlArray;
      };
      this.finalTemplateArray.push(group);
      group = null;
      controlArray = [];
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
