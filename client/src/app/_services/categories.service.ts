import { Injectable } from '@angular/core';
import { HttpHelper } from '../_helper/HttpHelper';
import { Http } from '@angular/http';

@Injectable()
export class CategoriesService {

  constructor(private http: Http) { }

  getAllCategories(): any {
     return this.http.get('/api/getAllCategories')
       .map(res => res.json());
  }
}
