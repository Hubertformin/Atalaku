import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotifierModule } from 'angular-notifier';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';

import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomModule } from '../modules/custom.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MusicDashboardComponent } from './music-dashboard/music-dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MusicVideosComponent } from './music-videos/music-videos.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { AddMusicVideoComponent } from './add-music-video/add-music-video.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';
import { GenresComponent } from './genres/genres.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    DashboardComponent,
    NavigationComponent,
    MoviesDashboardComponent,
    AddMovieComponent,
    MusicDashboardComponent,
    StaffComponent,
    MessagingComponent,
    MusicVideosComponent,
    FrontEndComponent,
    BlogDashboardComponent,
    AddMusicComponent,
    AddMusicVideoComponent,
    UsersDashboardComponent,
    ServicesComponent,
    SettingsComponent,
    GenresComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DataTablesModule,
    NotifierModule.withConfig({
      theme: 'material',
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'bottom',
          distance: 20,
          gap: 10
        }
      },
      behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      }
    }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(255,255,255,0.6)',
      backdropBorderRadius: '4px',
      primaryColour: '#3ebe57',
      secondaryColour: '#cb0e02',
      tertiaryColour: '#ffee35'
    })
  ]
})
export class AdminModule {  }
