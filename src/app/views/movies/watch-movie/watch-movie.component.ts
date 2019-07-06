import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../providers/http.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.scss']
})
export class WatchMovieComponent implements OnInit {
  activeMovie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private titleService: Title
  ) {
    this.activeMovie = {
      cdn_link: null,
      createdAt: '2019-07-03T19:46:28.000Z',
      description: 'A nice movie',
      director: null,
      duration: null,
      genre: {id: 2, name: 'Adventure', type: 'Movie', createdAt: '2019-07-03T19:46:26.000Z', updatedAt: '2019-07-03T19:46:26.000Z'},
      genreId: 2,
      id: 2,
      movieUploader: {id: 1, username: 'root', password: 'root', email: null, permissions: null},
    movieUploaderId: 1,
    producer: 'Mutia',
    rating: 'PG-13',
    release_date: null,
    studio: null,
    thumbnail_url: null,
    title: 'Movie N0.1',
    updatedAt: '2019-07-03T19:46:28.000Z',
    writer: null
    };
  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((map: any) => {
      const q = map.params.id.split('#');
      // get the specific image from database
      this.httpService.getMovie(q[1])
        .subscribe((data: any) => {
          this.titleService.setTitle(`Watch ${data.title} - ATALAKU`);
          data.thumbnail_url = '../../../../assets/images/fba0ebba-bbe0-452b-ab3a-155669149458-1d56609dd2aa.jpg';
          this.activeMovie = data;
        });
    });
  }

  openModal() {
    document.getElementById('trailer-modal').style.display = 'block';
  }

}
