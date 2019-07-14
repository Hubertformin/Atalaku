import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminModule } from './admin/admin.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomModule } from './modules/custom.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SubscriptionComponent } from './views/subscription/subscription.component';
import { WatchMovieComponent } from './views/movies/watch-movie/watch-movie.component';
import { VideosComponent } from './views/videos/video-home/videos.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { MoviesComponent } from './views/movies/movies-home/movies.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentaryComponent} from './views/documentary/documentary-home/documentary.component';
import {LoginComponent} from './views/login/login.component';
import {VideoContainerComponent} from './components/video-container/video-container.component';
import {MusicComponent} from './views/music/music-home/music.component';
import { TrendingMusicComponent } from './views/music/trending-music/trending-music.component';
import { NewMusicComponent } from './views/music/new-music/new-music.component';
import { AlbumsComponent } from './views/music/albums/albums.component';
import { SelectedAlbumComponent } from './views/music/selected-album/selected-album.component';
import { WatchVideoComponent } from './views/videos/watch-video/watch-video.component';
import { VideoSearchBarComponent } from './views/videos/video-search-bar/video-search-bar.component';
import { WatchDocumentaryComponent } from './views/documentary/watch-documentary/watch-documentary.component';
import { AccountComponent } from './views/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
    WatchMovieComponent,
    VideosComponent,
    AudioPlayerComponent,
    MoviesComponent,
    MusicComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DocumentaryComponent,
    LoginComponent,
    VideoContainerComponent,
    TrendingMusicComponent,
    NewMusicComponent,
    AlbumsComponent,
    SelectedAlbumComponent,
    WatchVideoComponent,
    VideoSearchBarComponent,
    WatchDocumentaryComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CustomModule,
    CarouselModule,
    NgxAudioPlayerModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'isBrowser', useValue: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
