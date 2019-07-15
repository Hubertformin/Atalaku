import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../../providers/http.service';
import * as Chance from 'chance';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  playList: any;
  albumData: any[] = [];
  random = new Chance();
  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    // console.log(this.crypt.toString());
    this.titleService.setTitle('Albums - ATALAKU');
    this.httpService.getAlbums()
      .subscribe((data: any[]) => {
        data = data.map(el => {
          el.url = `/music/albums/U2Fsd898TQc2j4M#${el.id}#${this.getRandomString(10)}`;
          return el;
        });
        this.albumData = data;
      });
  }

  watchState($event: any) {

  }

  getRandomString(length: number) {
    return this.random.string({length: length});
  }
}
