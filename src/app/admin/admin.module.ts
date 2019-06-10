import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialComponentsModuleModule } from '../material-components-module/material-components-module.module';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    DashboardComponent,
    AdminComponent,
    NavigationComponent,
    MoviesDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialComponentsModuleModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AdminModule {  }
