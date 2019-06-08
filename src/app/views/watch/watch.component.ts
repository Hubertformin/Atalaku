import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  movieList: any[] = [
    {title: 'The Real Black Chyna', genre: 'Sci-Fi', duration: 39450, releaseDate: Date.parse('2018/05/23'), ratings: 0.4, rated: 13,
      img_url: '../../../assets/images/a6b7d86f-09a3-4563-8686-674cd0c63591-f986fa34.jpg'},
    {title: 'Adam\'s World', genre: 'Action', duration: 73450, releaseDate: Date.parse('2019/05/23'), ratings: 0.4, rated: 15,
      img_url: '../../../assets/images/da72c34e-7845-42f8-a288-79f6450f0929-ae77e6704e42.jpg'},
    {title: 'Titi madeson', genre: 'Race', duration: 72150, releaseDate: Date.parse('2019/01/13'), ratings: 0.4, rated: 18,
      img_url: '../../../assets/images/29b506f7-1c72-4bf4-a5cd-166c8ac9659b-112f4d8ebc55.jpg'},
    {title: 'The lab ratz', genre: 'Drama', duration: 39500, releaseDate: Date.parse('2018/05/23'), ratings: 0.4, rated: 13,
      img_url: '../../../assets/images/a905a1c3-9bb3-470d-8fe3-980161326f75-7f9dee80bc55.jpg'},
    {title: 'Seven hearts', genre: 'Drama', duration: 39450, releaseDate: Date.parse('2018/05/23'), ratings: 0.4, rated: 14,
      img_url: '../../../assets/images/889eeac5-0032-439a-a400-5ec1199d735e-5627a887.jpg'},
    {title: 'Moustiqutte', genre: 'Comedy', duration: 39450, releaseDate: Date.parse('2018/05/23'), ratings: 0.4, rated: 13,
      img_url: '../../../assets/images/94f72a38-2b08-4025-b233-f8c4696bbbfe-2bf5065c4e42.jpg'},
    {title: 'Retorique', genre: 'Action', duration: 39450, releaseDate: Date.parse('2018/05/23'), ratings: 0.4, rated: 13,
      img_url: '../../../assets/images/001dea61-3eb7-47b5-9640-dc447e3d3990-5ffd86644e42.jpg'},
  ];
  activeMovie: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((map: any) => {
      this.activeMovie = this.movieList[Number(map.params.id)];
    });

    this.activeMovie.dateString = new Date(this.activeMovie.releaseDate).toDateString();
    this.activeMovie.releaseYear = new Date(this.activeMovie.releaseDate).getFullYear();
    this.activeMovie.durationString =  () => {
      const time = Math.floor(this.activeMovie.duration);
      let seconds: number | string = 0, minutes: number | string = 0, hour: number | string = 0;
      seconds = time;
      if (time >= 60) {
        seconds = time % 60;
        minutes = Math.floor(time / 60) % 60;
      }
      if (time >= 3600) {
        hour = Math.floor(time / 3600);
      }
      // if less than 10 secs
      if (seconds < 10) { seconds = `0${seconds}`; }
      if (minutes < 10) { minutes = `0${minutes}`; }
      if (hour < 10) { hour = `0${hour}`; }
      return `${hour}:${minutes}:${seconds}`;
    };
  }

  openModal() {
    document.getElementById('trailer-modal').style.display = 'block';
  }

}
