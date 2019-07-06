import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from './views/subscription/subscription.component';
import {WatchMovieComponent} from './views/movies/watch-movie/watch-movie.component';
import {MusicComponent} from './views/music/music-home/music.component';
import {MoviesComponent} from './views/movies/movies-home/movies.component';
import {VideosComponent} from './views/videos/video-home/videos.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {DocumentaryComponent} from './views/documentary/documentary-home/documentary.component';
import {LoginComponent} from './views/login/login.component';
import {TrendingMusicComponent} from './views/music/trending-music/trending-music.component';
import {NewMusicComponent} from './views/music/new-music/new-music.component';
import {AlbumsComponent} from './views/music/albums/albums.component';
import {SelectedAlbumComponent} from './views/music/selected-album/selected-album.component';
import {WatchVideoComponent} from './views/videos/watch-video/watch-video.component';
import {WatchDocumentaryComponent} from './views/documentary/watch-documentary/watch-documentary.component';
import { AuthGuardService as AuthGuard } from './providers/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'subscription/:plan',
    component: SubscriptionComponent
  },
  {
    path: 'movies/watch/:id',
    component: WatchMovieComponent
  },
  {
    path: 'music',
    component: MusicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'music/new',
    component: NewMusicComponent
  },
  {
    path: 'music/trending',
    component: TrendingMusicComponent
  },
  {
    path: 'music/albums',
    component: AlbumsComponent
  },
  {
    path: 'music/albums/:id',
    component: SelectedAlbumComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'music-videos',
    component: VideosComponent
  },
  {
    path: 'music-videos/watch/:id',
    component: WatchVideoComponent
  },
  {
    path: 'documentary',
    component: DocumentaryComponent
  },
  {
    path: 'documentary/watch/:id',
    component: WatchDocumentaryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
