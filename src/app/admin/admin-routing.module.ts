import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {MoviesDashboardComponent} from './movies-dashboard/movies-dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'login', component: AuthenticationComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'movies-dashboard', component: MoviesDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {  }
