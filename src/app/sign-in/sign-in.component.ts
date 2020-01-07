import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
  }

  signIn() {
    localStorage.setItem('user', '1');
    this.router.navigate(['dashboard']);
  }

}
