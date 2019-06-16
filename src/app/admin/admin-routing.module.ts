import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';
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

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'login', component: AuthenticationComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'movies-dashboard', component: MoviesDashboardComponent},
      {path: 'genres', component: GenresComponent},
      {path: 'add-movie', component: AddMovieComponent},
      {path: 'add-music', component: AddMusicComponent},
      {path: 'add-music-video', component: AddMusicVideoComponent},
      {path: 'music-dashboard', component: MusicDashboardComponent},
      {path: 'music-video-dashboard', component: MusicVideosComponent},
      {path: 'users-dashboard', component: UsersDashboardComponent},
      {path: 'messaging', component: MessagingComponent},
      {path: 'staff', component: StaffComponent},
      {path: 'front-end', component: FrontEndComponent},
      {path: 'blog', component: BlogDashboardComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {  }
