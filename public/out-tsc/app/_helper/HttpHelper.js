var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
/// Hilfsklasse für Angular ab Version 2.0
export var HttpHelper = (function () {
    /// empfängt HTTP-Dienst per DI
    function HttpHelper(http) {
        this.http = http;
    }
    HttpHelper.prototype.GetHttp = function (url) {
        // Daten von HTTP-Dienst laden
        console.log("GetHttp: " + url);
        return this.http
            .get(url)
            .map(function (resp) { console.log("GetHttp: OK!"); return resp.json(); })
            .catch(function (error) {
            console.log("!!! GetHttp:Fehler", error);
            return Observable.throw(error.json().error || 'Server error');
        });
    };
    HttpHelper.prototype.PostHttp = function (url, body) {
        // Daten zum HTTP-Dienst senden
        console.log("PostHttp: " + url);
        return this.http
            .post(url, body)
            .map(function (resp) { console.log("PostHttp: OK!"); return resp.json(); })
            .catch(function (error) {
            console.log("!!! PostHttp:Fehler", error);
            return Observable.throw(error.json().error || 'Server error');
        });
    };
    HttpHelper = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], HttpHelper);
    return HttpHelper;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/_helper/HttpHelper.js.map