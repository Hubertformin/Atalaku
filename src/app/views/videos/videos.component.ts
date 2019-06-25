import { Component, OnInit } from '@angular/core';
import {faEye, faSearch, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';

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

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Music videos - ATALAKU');
  }

}
