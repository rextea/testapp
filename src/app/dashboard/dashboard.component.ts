import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened = false;

  constructor(
    public router: Router
  ) {
    router.events.subscribe((val) => {
      this.opened=false;
  });
  }
  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }
}
