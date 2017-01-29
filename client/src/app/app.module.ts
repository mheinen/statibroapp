import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CategoriesService } from './_services/categories.service';
import { LessonsService } from './_services/lessons.service';
import { HttpHelper } from './_helper/HttpHelper';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { LessonsComponent } from './lessons/lessons.component';






@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LessonsComponent
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
    LessonsService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
