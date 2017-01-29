import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoriesService {

  constructor(private http: Http) { }

  getAllCategories(): any {
     return this.http.get('/api/category/getAll')
       .map(res => res.json());
  }
}
