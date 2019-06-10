import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from './views/subscription/subscription.component';
import {WatchComponent} from './views/watch/watch.component';
import {MusicComponent} from './views/music/music.component';
import {MoviesComponent} from './views/movies/movies.component';
import {VideosComponent} from './views/videos/videos.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';

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
    component: MusicComponent
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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
