import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService  } from 'angular2-token';

@Injectable()
export class CategoriesService {

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
  getAllCategories(): any {
    return this._tokenService.get('api/category/getAll').map(res => res.json());
  }
}
