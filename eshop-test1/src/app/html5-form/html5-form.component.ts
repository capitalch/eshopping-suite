import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
// import { UserService } from './user.service';


@Component({
  selector: 'app-html5-form',
  templateUrl: './html5-form.component.html',
  styleUrls: ['./html5-form.component.scss']
})
export class Html5FormComponent implements OnInit {
  private _form: FormGroup;
  title:string;
  
  constructor(
    private _fb: FormBuilder
    ) {
    this.title = 'Deep Nested Fields in Nested Array (Model Driven)! '
  }
  ngOnInit() {
    this._form = this._fb.group({
      'teacher': ['', Validators.required],
      'schools': this._fb.array([
          this._fb.group({
            'school_name': ['', Validators.required],
            'school_description': [''],
            'events': this._fb.array([
              this._fb.group({
                'event_name': ['']
              })
            ])
          })
      ])
    });
  }
  onSubmit() {
    console.log(this._form.value)
  }
  initSchool() {
    return this._fb.group({
        'school_name': ['', Validators.required],
        'school_description': [''],
        'events': this._fb.array([
          this._fb.group({
            'event_name': ['', Validators.required]
          })
        ])
    });
  }

  addSchool() {
    const control = <FormArray>this._form.controls['schools'];
    control.push(this.initSchool());
  }
  removeSchool(i: number) {
    const control = <FormArray>this._form.controls['schools'];
    control.removeAt(i);
  }

  initEvents() {
    return this._fb.group({
      'event_name': ['', Validators.required]
    });
  }

  addEvent(i: number) {
    const control = (<FormArray>this._form.controls['schools']).at(i).get('events') as FormArray;
    control.push(this.initEvents());
  }

  removeEvent(i: number) {
    const control = (<FormArray>this._form.controls['schools']).at(i).get('events') as FormArray;
    control.removeAt(i);
  }
  // myForm: FormGroup;
  // myFormArray: FormArray;
  // constructor(private fb: FormBuilder) {

  // }


  // onSubmit() {

  // }

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     firstName: ['', Validators.required]
  //     , lastName: ['last']
  //     , users: this.fb.array([
  //       new FormControl('Mahesh'),
  //       new FormControl('Krishna'),
  //       new FormControl()
  //     ])
  //   });

  // }

  // submit(f) {
  //   console.log(f.valid);
  //   console.log(f.value);
  // }

}
