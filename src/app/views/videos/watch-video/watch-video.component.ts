import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Route} from '@angular/router';
import {HttpService} from '../../../providers/http.service';
import {faArrowCircleRight, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})
export class WatchVideoComponent implements OnInit {
  currentVideo: any;
  checkIcon = faCheckCircle;
  sendIcon = faArrowCircleRight;
  iter = new Array(10);
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Watch -ATALAKU');
    this.activatedRoute.paramMap.subscribe((R: any) => {
      const q = R.params.id.split('#');
      this.httpService.getMusicvideo(q[1])
        .subscribe((data: any) => {
          console.log(data);
          this.currentVideo = data;
          // set the title of current view
          this.titleService.setTitle(`Watch ${data.artist} - ${data.title} - ATALAKU`);
        });
    });
  }

}
