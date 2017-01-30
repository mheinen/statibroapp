var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { RequestMethod } from "@angular/http";
export var RegisterComponent = (function () {
    function RegisterComponent(_tokenService) {
        this._tokenService = _tokenService;
        this.Email = '';
        this.Password = '';
        this.PasswordConfirmation = '';
        this.NoMatch = true;
        this.Warning = false;
        this.Nickname = '';
        this._tokenService.init({
            apiBase: null,
            apiPath: null,
            signInPath: 'auth/sign_in',
            signInRedirect: null,
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            validateTokenPath: 'auth/validate_token',
            signOutFailedValidate: false,
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: window.location.href,
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,
            userTypes: null,
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (form) {
        console.log(form);
        this._tokenService.request({
            method: RequestMethod.Post,
            url: 'auth',
            body: {
                email: this.Email,
                password: this.Password,
                password_confirmation: this.PasswordConfirmation,
                nickname: this.Nickname
            }
        }).subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
    };
    RegisterComponent.prototype.checkPass = function () {
        if (this.PasswordConfirmation != this.Password) {
            this.Warning = true;
            this.NoMatch = true;
        }
        else {
            this.Warning = false;
            this.NoMatch = false;
        }
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }), 
        __metadata('design:paramtypes', [Angular2TokenService])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/register/register.component.js.map