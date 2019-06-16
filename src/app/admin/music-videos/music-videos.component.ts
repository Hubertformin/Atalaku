import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-music-videos',
  templateUrl: './music-videos.component.html',
  styleUrls: ['./music-videos.component.scss']
})
export class MusicVideosComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Music Videos Dashboard - ATALAKU(Admin)');
  }

}
