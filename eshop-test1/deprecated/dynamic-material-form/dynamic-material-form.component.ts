import { Component, OnInit } from '@angular/core';
import {
  DynamicFormControlModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel, DynamicFormService
} from "@ng-dynamic-forms/core";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-material-form',
  templateUrl: './dynamic-material-form.component.html',
  styleUrls: ['./dynamic-material-form.component.css']
})
export class DynamicMaterialFormComponent implements OnInit {
  formModel: DynamicFormControlModel[]
  formGroup: FormGroup
  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    let jString = `{
      "id": "sampleInput",
      "label": "Sample Input",
      "maxLength": 42,
      "placeholder": "Sample input"
    }`;
    let j = JSON.parse(jString);
    this.formModel = [
      new DynamicInputModel(j)
    ];
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
