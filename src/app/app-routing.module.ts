import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from './views/subscription/subscription.component';
import {WatchComponent} from './views/watch/watch.component';
import {MusicComponent} from './views/music/music-home/music.component';
import {MoviesComponent} from './views/movies/movies.component';
import {VideosComponent} from './views/videos/videos.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {DocumentaryComponent} from './views/documentary/documentary.component';
import {LoginComponent} from './views/login/login.component';
import {TrendingMusicComponent} from './views/music/trending-music/trending-music.component';
import {NewMusicComponent} from './views/music/new-music/new-music.component';

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
    path: 'watch/:id',
    component: WatchComponent
  },
  {
    path: 'music',
    component: MusicComponent,
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
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'documentary',
    component: DocumentaryComponent
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
