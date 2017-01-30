import { Component, OnInit } from '@angular/core';
import { Angular2TokenService  } from 'angular2-token';
import {RequestMethod} from "@angular/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
Email = '';
Password = '';
PasswordConfirmation = '';
NoMatch = true;
Warning = false;
Nickname = '';
  constructor(private _tokenService: Angular2TokenService) {
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
  onRegister(form: any) {
    console.log(form);
    this._tokenService.request({
      method: RequestMethod.Post,
      url:    'auth',
      body:   {
                email:                this.Email,
                password:             this.Password,
                password_confirmation: this.PasswordConfirmation,
                nickname:             this.Nickname
              }
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }
  checkPass() {
    if(this.PasswordConfirmation != this.Password)
    {
      this.Warning = true;
      this.NoMatch = true;
    } else
    {
      this.Warning = false;
      this.NoMatch = false;
    }

  }
}
