import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  isEmailRegisterd(email: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3002/email'
      , JSON.stringify({ email: email })
      , { headers: headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
    ;
  }
}
