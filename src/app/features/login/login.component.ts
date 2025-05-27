import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginService = inject(LoginService);
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  ngOnInit() {
    // login page init

  }

  loginUser() {
    // Logic to handle user login
    console.log('User logged in');
    const creds = {
      email: this.username,
      password: this.password
    }
    this.loginService.login(creds);
  }

}
