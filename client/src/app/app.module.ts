import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PostsService } from './_services/posts.service';
import { UsersService } from './_services/users.service';
import { CategoriesService } from './_services/categories.service';
import { LessonsService } from './_services/lessons.service';
import { HttpHelper } from './_helper/HttpHelper';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { LessonsComponent } from './lessons/lessons.component';






@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
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
    PostsService,
    UsersService,
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
