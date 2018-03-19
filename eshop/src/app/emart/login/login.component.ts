import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login()
  {
    alert('Login Logic');
  }

  cancel()
  {
    alert('Cancel Logic');
  }

  forgotPassword()
  {
    alert("Forgot Password");
  }
}