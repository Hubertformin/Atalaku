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
  iter = new Array(30);

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('New songs - ATALAKU');
  }

}
