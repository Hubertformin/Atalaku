import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../../providers/http.service';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-music',
  templateUrl: './new-music.component.html',
  styleUrls: ['./new-music.component.scss']
})
export class NewMusicComponent implements OnInit {
  playIcon = faPlay;
  musicData: any[] = [];
  playList: any[];
  playerAction = {
    state: false,
    active: false,
  };

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('New songs - ATALAKU');
    this.httpService.getAllMusic()
      .subscribe((data: any[]) => {
        console.log(data);
        this.musicData = data;
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

  watchState(state: any) {
    this.playerAction.state = state;
  }
}
