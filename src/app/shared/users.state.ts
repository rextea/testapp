import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({providedIn: 'root'})
export class UsersState {

  constructor(private http: HttpClient) {
    this.fetchAll();
  }

  private readonly _users = new BehaviorSubject<User[]>([]);

  readonly users$ = this._users.asObservable();

  get users(): User[] {
    return this._users.getValue();
  }

  set users(val: User[]) {
    this._users.next(val);
  }

  addUser() {
    this.users = [
      ...this.users,
      {id: this.users.length + 1, email:'check@check.com', first_name: 'John', last_name: 'Lenon', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'}
    ];
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  fetchAll() {
    const promise = this.http.get('https://reqres.in/api/users?page=1&per_page=12').toPromise();

    promise.then((users: any) => {
      this.users = users.data;
    });

  }

}
