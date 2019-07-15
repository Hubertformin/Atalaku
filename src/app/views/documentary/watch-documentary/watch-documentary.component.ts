import { Component, OnInit } from '@angular/core';
import {faArrowCircleRight, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watch-documentary',
  templateUrl: './watch-documentary.component.html',
  styleUrls: ['./watch-documentary.component.scss']
})
export class WatchDocumentaryComponent implements OnInit {
  iter = new Array(13);
  checkIcon: any = faCheckCircle;
  sendIcon: any = faArrowCircleRight;

  constructor() { }

  ngOnInit() {
  }

}
