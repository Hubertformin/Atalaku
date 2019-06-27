import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialComponentsModuleModule } from './material-components-module/material-components-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SubscriptionComponent } from './views/subscription/subscription.component';
import { WatchComponent } from './views/watch/watch.component';
import { MusicComponent } from './views/music/music.component';
import { VideosComponent } from './views/videos/videos.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { MoviesComponent } from './views/movies/movies.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentaryComponent} from './views/documentary/documentary.component';
import {LoginComponent} from './views/login/login.component';
import {VideoContainerComponent} from './components/video-container/video-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
    WatchComponent,
    MusicComponent,
    VideosComponent,
    AudioPlayerComponent,
    MoviesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DocumentaryComponent,
    LoginComponent,
    VideoContainerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AdminModule,
    MaterialComponentsModuleModule,
    CarouselModule,
    NgxAudioPlayerModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'isBrowser', useValue: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
