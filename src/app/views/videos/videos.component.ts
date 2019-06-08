import { Component, OnInit } from '@angular/core';
import {faEye, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  likesIcon = faThumbsUp;
  dislikesIcon = faThumbsDown;
  viewsIcon = faEye;

  constructor() { }

  ngOnInit() {
  }

}
