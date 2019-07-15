import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../providers/http.service';
import {Title} from '@angular/platform-browser';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-album',
  templateUrl: './selected-album.component.html',
  styleUrls: ['./selected-album.component.scss']
})
export class SelectedAlbumComponent implements OnInit {
  album: any = {songs: [], videos: []};
  playIcon = faPlay;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private titleService: Title
  ) { }

  ngOnInit() {
    // get id of album
    this.activatedRoute.paramMap.subscribe((map: any) => {
      console.log(map);
      const params = map.params.id.split('#');
      this.httpService.getAlbum(params[1])
        .subscribe((data: any) => {
          // console.log(data);
          this.album = data;
          // set title service
          this.titleService.setTitle(`${data.name}(${data.artist}) - ATALAKU`);
        });
    });
  }

}
