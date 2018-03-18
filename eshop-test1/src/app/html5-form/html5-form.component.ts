import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from './user.service';


@Component({
  selector: 'app-html5-form',
  templateUrl: './html5-form.component.html',
  styleUrls: ['./html5-form.component.scss']
})
export class Html5FormComponent implements OnInit {
  form: FormGroup;
  constructor(private userService:UserService, private fb: FormBuilder) {
    this.buildForm();
   }

   buildForm(): void {
    this.form = this.fb.group({
      "email": ["", [
             Validators.required,
             Validators.minLength(3)
           ],
           this.isEmailUnique.bind(this) // async Validator passed as 3rd parameter 
      ]
    });
  }

  isEmailUnique(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userService.isEmailRegisterd(control.value).subscribe(() => {
          resolve(null);
        }, () => { resolve({ 'isEmailUnique': true }); });
      }, 1000);
    });
    return q;
  }
 
 
  onSubmit() {
  
  }

  ngOnInit() {
   
  }

}
