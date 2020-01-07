import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  userInfo;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users?page=1&per_page=12').subscribe((res: any[]) => {
      this.users = res;
    });

  }

  toggleInfo(user) {
    if (this.userInfo && this.userInfo.id == user.id) {
      this.userInfo = null;
    } else {
      this.userInfo = user;
    }
  }

}
