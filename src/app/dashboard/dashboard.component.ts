import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened = false;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) {
    router.events.subscribe((val) => {
      this.opened=false;
  });
  }
  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
  }
}
