import { Component, OnInit } from '@angular/core';
import { Angular2TokenService  } from 'angular2-token';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email = '';
  Password = '';
  Error = 'none';

  constructor(private _tokenService: Angular2TokenService, private router: Router) {
    this._tokenService.init({
      apiBase:                    null,
      apiPath:                    null,

      signInPath:                 'auth/sign_in',
      signInRedirect:             null,
      signInStoredUrlStorageKey:  null,

      signOutPath:                'auth/sign_out',
      validateTokenPath:          'auth/validate_token',
      signOutFailedValidate:      false,

      registerAccountPath:        'auth',
      deleteAccountPath:          'auth',
      registerAccountCallback:    window.location.href,

      updatePasswordPath:         'auth',
      resetPasswordPath:          'auth/password',
      resetPasswordCallback:      window.location.href,

      userTypes:                  null,

      globalOptions: {
        headers: {
          'Content-Type':     'application/json',
          'Accept':           'application/json'
        }
      }
    });
  }
  ngOnInit() {
  }
  onLogin(form: any){
    this._tokenService.signIn({
      email:    this.Email,
      password: this.Password
    }).subscribe(
      res => {
        this.Error = 'none';
        console.log(res);
        this.router.navigateByUrl('/categories');
      },
      error =>   {
        console.log(error);
        this.Error = 'inline';
      }
    );
  }
}
