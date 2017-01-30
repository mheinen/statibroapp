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
export var AppComponent = (function () {
    function AppComponent(_tokenService, router) {
        this._tokenService = _tokenService;
        this.router = router;
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
    AppComponent.prototype.signedIn = function () {
        return this._tokenService.userSignedIn();
    };
    AppComponent.prototype.signOut = function () {
        this._tokenService.signOut().subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.register = function () {
        this.router.navigateByUrl('/register');
    };
    AppComponent.prototype.login = function () {
        this.router.navigateByUrl('/login');
    };
    AppComponent = __decorate([
        Component({
            selector: 'sd-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [Angular2TokenService, Router])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/app.component.js.map