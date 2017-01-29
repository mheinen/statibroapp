import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpHelper } from '../_helper/HttpHelper';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private httpHelper: HttpHelper) { }

  createUser(name: string) {
      console.log("Name "+name);
      this.httpHelper.PostHttp('/api/createUser', {Name: name}).subscribe(x => {
          console.log("Return = " +JSON.stringify(x));
          })
  }
  getAllUsers(){
  }
}