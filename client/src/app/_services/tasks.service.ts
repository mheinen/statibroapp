import { Injectable } from '@angular/core';
import { Angular2TokenService  } from 'angular2-token';

@Injectable()
export class TasksService {

  constructor(private _tokenService: Angular2TokenService) { }

  getTasks(id:number): any {
    return this._tokenService.get('/api/tasks/getTasks/'+id).map(res => res.json());
  }
}
