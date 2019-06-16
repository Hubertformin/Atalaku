import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-music-video',
  templateUrl: './add-music-video.component.html',
  styleUrls: ['./add-music-video.component.scss']
})
export class AddMusicVideoComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Add music video - ATALAKU(Admin)');
  }


  gotBack() {
    window.history.back();
  }
}
