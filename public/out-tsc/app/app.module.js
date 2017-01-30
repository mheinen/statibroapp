var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { CategoriesService } from './_services/categories.service';
import { LessonsService } from './_services/lessons.service';
import { TasksService } from './_services/tasks.service';
import { HttpHelper } from './_helper/HttpHelper';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                CategoriesComponent,
                LessonsComponent,
                TasksComponent,
                HomeComponent,
                RegisterComponent,
                LoginComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                RouterModule.forRoot(AppRoutes)
            ],
            providers: [
                HttpHelper,
                CategoriesService,
                LessonsService,
                TasksService,
                Angular2TokenService
            ],
            bootstrap: [
                AppComponent
            ],
            exports: [
                RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/app.module.js.map