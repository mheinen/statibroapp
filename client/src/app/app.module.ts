import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2TokenService  } from 'angular2-token';

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






@NgModule({
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
})
export class AppModule { }
