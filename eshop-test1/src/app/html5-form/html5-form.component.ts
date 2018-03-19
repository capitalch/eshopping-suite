import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from './user.service';


@Component({
  selector: 'app-html5-form',
  templateUrl: './html5-form.component.html',
  styleUrls: ['./html5-form.component.scss']
})
export class Html5FormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) {

  }


  onSubmit() {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email],
        this.validateEmailNotTaken.bind(this)
      ]
      , address: ['', [Validators.required, this.userService.myValidator1()]
        , [this.userService.myAsyncValidator1()]]
      }
    );
  }

  validateEmailNotTaken(control: AbstractControl) {
    return this.userService.checkEmailNotTaken(control.value).map(res => {
      return res ? null : { emailTaken: true };
    });
  }

  // myValidator1() {
  //   let f = (control: AbstractControl) => {
  //     let s = control.value;
  //     if (s.length > 3) { 
  //       return (null) ;
  //     } else {
  //       return ({ myValidator1: true });
  //     }
  //   };
  //   return (f);
  // }

  submit(f) {
    console.log(f.valid);
    console.log(f.value);
  }

}
