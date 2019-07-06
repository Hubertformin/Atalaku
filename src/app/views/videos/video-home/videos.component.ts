import { Component, OnInit } from '@angular/core';
import {faEye, faSearch, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../../providers/http.service';
import * as Chance from 'chance';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  likesIcon = faThumbsUp;
  dislikesIcon = faThumbsDown;
  viewsIcon = faEye;
  searchIcon = faSearch;
  musicVideosData: any[] = [];
  random = new Chance();

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Music videos - ATALAKU');
    // get all music videos
    this.httpService.getAllMusicVideos()
      .subscribe((data: any[]) => {
        data = data.map(el => {
          el.url = `/music-videos/watch/vW9Usd980BTc2h4M#${el.id}#${this.getRandomString(10)}`;
          return el;
        });
        this.musicVideosData = data;
        console.log(data);
      });
  }
  // get random string
  getRandomString(length: number) {
    return this.random.string({length: length});
  }

}
