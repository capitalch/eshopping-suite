import { Component, OnInit } from '@angular/core';
import { navUrls } from '../admin.config';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login()
  {
    this.router.navigate([navUrls.composite]);
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
