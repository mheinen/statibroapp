import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { LessonsComponent } from './lessons/lessons.component';


/**
 * Routen zu den Komponenten definieren
 */
export const AppRoutes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'test',
    component: PostsComponent
  },
  {
    path: 'register',
    component: UsersComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'lessons/:id',
    component: LessonsComponent,
  }
];
