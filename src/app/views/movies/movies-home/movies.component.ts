import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../../providers/http.service';
import * as Chance from 'chance';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  color: 'red';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Back', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
  multipleOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  // icons
  chevronRight = faChevronRight;
  movieData: any[] = [];
  random = new Chance();

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('MOVIES HOME - ATALAKU');
    this.httpService.getAllMovies()
      .subscribe((data: any) => {
        data = data.map(el => {
          el.url = `/movies/watch/mYL0tadHFQTc47j4H#${el.id}#${this.getRandomString(7)}`;
          return el;
        });
        this.movieData = data;
        console.log(data);
      });
  }

  //
  getRandomString(length: number) {
    return this.random.string({length: length});
  }

}
