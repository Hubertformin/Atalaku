import { Component, OnInit } from '@angular/core';
import * as Player from '@vimeo/player/dist/player.js';


@Component({
  selector: 'app-video',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options01 = {
      id: 1,
      width: 300,
    };

    const video01Player = new Player('video_player', options01);

    video01Player.setVolume(0);

    video01Player.on('play', function() {
      console.log('Played the first video');
    });
  }

}
