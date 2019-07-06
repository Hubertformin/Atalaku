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
  musicData: any[] = [];
  playerAction = {
    active: false,
    state: null
  };
  playList: any[];

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Trending songs - ATALAKU');
    this.httpService.getAllMusic()
      .subscribe((data: any[]) => {
        console.log(data);
        data.map(el => {
          el.cdn_link = '../../../assets/bella.mp3';
          el.thumbnail_url = '../../../assets/images/wanshey.jpeg';
        });
        this.musicData = data;
      }, error1 => {
        console.error(error1);
      });
  }

  playSong(index: number) {
    this.playerAction.active = true;
    this.playList = [this.musicData[index]];
  }

  playPlayList() {
    this.playerAction.active = true;
    this.playList = this.musicData;
  }

  watchState(value) {
    this.playerAction.state = value;
  }

}
