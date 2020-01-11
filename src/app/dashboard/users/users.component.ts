import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UsersState } from 'src/app/shared/users.state';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  userInfo;
  http: any;

  constructor(public users: UsersState) {
  }

  ngOnInit() {


  }

  toggleInfo(user) {
    if (this.userInfo && this.userInfo.id === user.id) {
      this.userInfo = null;
    } else {
      this.userInfo = user;
    }
  }

}
