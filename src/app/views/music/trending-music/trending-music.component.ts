import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../../providers/http.service';
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import {MusicModel} from '../../../models/Music.model';

@Component({
  selector: 'app-trending-music',
  templateUrl: './trending-music.component.html',
  styleUrls: ['./trending-music.component.scss']
})
export class TrendingMusicComponent implements OnInit {
  playIcon = faPlay;
  pauseIcon = faPause;
  iter = new Array(10);

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Trending songs - ATALAKU');
    this.httpService.getAllMusic()
      .subscribe((data: MusicModel) => {
        console.log(data);
      }, error1 => {
        console.error(error1);
      });
  }

}
