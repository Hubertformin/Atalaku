import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MoviesDashboardComponent} from './movies-dashboard/movies-dashboard.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {MusicDashboardComponent} from './music-dashboard/music-dashboard.component';
import {StaffComponent} from './staff/staff.component';
import { MessagingComponent } from './messaging/messaging.component';
import {MusicVideosComponent} from './music-videos/music-videos.component';
import {FrontEndComponent} from './front-end/front-end.component';
import {BlogDashboardComponent} from './blog-dashboard/blog-dashboard.component';
import {AddMusicComponent} from './add-music/add-music.component';
import {AddMusicVideoComponent} from './add-music-video/add-music-video.component';
import {UsersDashboardComponent} from './users-dashboard/users-dashboard.component';
import {ServicesComponent} from './services/services.component';
import {SettingsComponent} from './settings/settings.component';
import {GenresComponent} from './genres/genres.component';
import {AdminAuthGuardService} from '../providers/admin-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard'
  },
  {path: 'login', component: AuthenticationComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AdminAuthGuardService]},
  {path: 'movies', component: MoviesDashboardComponent, canActivate: [AdminAuthGuardService]},
  {path: 'genres', component: GenresComponent, canActivate: [AdminAuthGuardService]},
  {path: 'movie/new', component: AddMovieComponent, canActivate: [AdminAuthGuardService]},
  {path: 'music/new', component: AddMusicComponent, canActivate: [AdminAuthGuardService]},
  {path: 'music-videos/new', component: AddMusicVideoComponent, canActivate: [AdminAuthGuardService]},
  {path: 'music', component: MusicDashboardComponent, canActivate: [AdminAuthGuardService]},
  {path: 'music-videos', component: MusicVideosComponent, canActivate: [AdminAuthGuardService]},
  {path: 'users', component: UsersDashboardComponent, canActivate: [AdminAuthGuardService]},
  {path: 'messaging', component: MessagingComponent, canActivate: [AdminAuthGuardService]},
  {path: 'staff', component: StaffComponent, canActivate: [AdminAuthGuardService]},
  {path: 'front-end', component: FrontEndComponent, canActivate: [AdminAuthGuardService]},
  {path: 'blog', component: BlogDashboardComponent, canActivate: [AdminAuthGuardService]},
  {path: 'services', component: ServicesComponent, canActivate: [AdminAuthGuardService]},
  {path: 'settings', component: SettingsComponent, canActivate: [AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {  }
