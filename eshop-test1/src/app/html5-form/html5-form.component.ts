import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
// import { UserService } from './user.service';


@Component({
  selector: 'app-html5-form',
  templateUrl: './html5-form.component.html',
  styleUrls: ['./html5-form.component.scss']
})
export class Html5FormComponent implements OnInit {
  myForm: FormGroup;
  myFormArray: FormArray;
  constructor(private fb: FormBuilder) {

  }


  onSubmit() {

  }

  ngOnInit() {
    this.myFormArray = this.fb.array([
      { address: ['12'] }
    ]);
    this.myForm = this.fb.group({
      firstName: ['', Validators.required]
      , lastName:['last']
      , homeAddressGroup:this.fb.group(
        {
          address1:['address1']
          , address2:['address2']
        }
      )
      , intrests:this.fb.array([
        {
          tag1:["tag1"]
        }
      ])
    });

  }

  submit(f) {
    console.log(f.valid);
    console.log(f.value);
  }

}
