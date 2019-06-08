import {Component, Input, OnInit} from '@angular/core';
import {faBackward, faForward, faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  @Input() banner: string;
  previousIcon = faBackward;
  playIcon = faPlay;
  nextIcon = faForward;

  constructor() { }

  ngOnInit() {
    console.log(this.banner);
  }

}
