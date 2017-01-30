import { CategoriesComponent } from './categories/categories.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Angular2TokenService  } from 'angular2-token';


/**
 * Routen zu den Komponenten definieren
 */
export const AppRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'lessons/:id',
    component: LessonsComponent,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'tasks/:id',
    component: TasksComponent,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
