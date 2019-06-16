import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-music-dashboard',
  templateUrl: './music-dashboard.component.html',
  styleUrls: ['./music-dashboard.component.scss']
})
export class MusicDashboardComponent implements OnInit {
  autoDetectMusicMetaData: boolean;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Music Dashboard - ATALAKU(Admin)');
    this.autoDetectMusicMetaData = false;
  }

}
