import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    Name = '';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

    onSubmit(form: any): void {
        this.usersService.createUser(this.Name);
    }

}
