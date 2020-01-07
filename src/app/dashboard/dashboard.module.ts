import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UsersComponent } from './users/users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [DashboardComponent, UsersComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatFormFieldModule,MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    MatToolbarModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
