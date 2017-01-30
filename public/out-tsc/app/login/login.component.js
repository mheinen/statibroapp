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
import { Router } from "@angular/router";
export var LoginComponent = (function () {
    function LoginComponent(_tokenService, router) {
        this._tokenService = _tokenService;
        this.router = router;
        this.Email = '';
        this.Password = '';
        this.Error = 'none';
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
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        this._tokenService.signIn({
            email: this.Email,
            password: this.Password
        }).subscribe(function (res) {
            _this.Error = 'none';
            console.log(res);
            _this.router.navigateByUrl('/categories');
        }, function (error) {
            console.log(error);
            _this.Error = 'inline';
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [Angular2TokenService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/login/login.component.js.map