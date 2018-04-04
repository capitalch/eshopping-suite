import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  checkEmailNotTaken(email: string) {
    return this.http
      .get('assets/users.json')
      .delay(1000)
      .map(res => res.json())
      .map(users => users.filter(user => user.email === email))
      .map(users => !users.length);
  }

  myValidator1() {
    let f = (control: AbstractControl) => {
      let s = control.value;
      if (s.length > 3) {
        return (null);
      } else {
        return ({ myValidator1: true });
      }
    };
    return (f);
  }

  myAsyncValidator1() {
    let f = (control: AbstractControl) => {
      let obs = this.http.post("http://localhost:3002/test","test")
      .map(res=>res.json());
      return(obs);
    };
    return(f);
  }
}
