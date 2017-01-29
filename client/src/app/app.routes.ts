import { CategoriesComponent } from './categories/categories.component';
import { LessonsComponent } from './lessons/lessons.component';


/**
 * Routen zu den Komponenten definieren
 */
export const AppRoutes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
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
