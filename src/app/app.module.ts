import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { MatVideoModule } from 'mat-video';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatVideoModule,
    MaterialComponentsModuleModule,
    CarouselModule,
    NgxAudioPlayerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
