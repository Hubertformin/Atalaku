import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  faFastBackward,
  faFastForward,
  faHeart,
  faPalette,
  faPause,
  faPlay,
  faRandom
} from '@fortawesome/free-solid-svg-icons';
import {AudioStream, RxJSAudioService, StreamState} from 'rxjs-audio';
import {MatSliderChange} from '@angular/material';
import * as $ from 'jquery';

interface AudioPlayBack {
  shuffle: boolean;
  repeat_once: boolean;
  error: boolean;
}

declare type ColorType = 'green' | 'flag' | 'dark' | undefined;
declare type PlayerMode = 'large' | 'mini' | undefined;

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  @Input() playList: any[];
  @Input() theme: ColorType;
  @Input() mode: PlayerMode;
  @Output() stateChange = new EventEmitter();
  // icons
  previousIcon = faFastBackward;
  playIcon = faPlay;
  nextIcon = faFastForward;
  pauseIcon = faPause;
  likeIcon = faHeart;
  themeIcon = faPalette;
  shuffleIcon = faRandom;
  // rxjs audio service
  rxjsAudioService = new RxJSAudioService();
  audio: AudioStream;
  state: StreamState = {
    playing: false ,
    isLastTrack: false,
    isFirstTrack: false,
    trackInfo: {
      currentTime: 0,
      currentTrack: 0,
      duration: 0,
      readableCurrentTime: '00:00:00',
      readableDuration: '00:00:00'
    }
  };
  // plabackoption: repeat and shuffle
  playBackOptions: AudioPlayBack;
  // color
  playerColor: string;
  // playerMaxMode
  playerMaxMode: boolean;

  constructor() {}

  ngOnInit() {
    // initializing theme..
    switch (this.theme) {
      case 'green':
        this.playerColor = '#238665';
        break;
      case 'flag':
        this.playerColor = 'linear-gradient(to right, #137724, #c51b24, #fdd21f)';
        break;
      case 'dark':
        this.playerColor = '#22292f';
        break;
      default:
        this.playerColor = '#22292f';
        break;
    }
    // initializing player mode
    switch (this.mode) {
      case 'mini':
        this.playerMaxMode = false;
        break;
      default:
        this.playerMaxMode = true;
        break;
    }
    // initializing audio
    this.audio = this.rxjsAudioService.create(this.playList, {urlKey: 'cdn_link'});
    this.audio.getState()
      .subscribe((state: StreamState) => {
        // trim seconds
        this.state = state;
        this.stateChange.emit(state); // emit state to components consuming this component.
        // set progress of mini player
        if (!this.playerMaxMode) {
          this.setMiniPlayerProgress(state.trackInfo.currentTime, state.trackInfo.duration);
        }
      }, error1 => {
        //
      });
    //
    this.audio.events()
      .subscribe(event => {
        if (event.type === 'canplay') {
          this.playBackOptions.error = false;
        } else if (event.type === 'error') {
          // handle is error was unable to load
          this.playBackOptions.error = true;
        }
        if (event.type === 'ended') {
          // if repeat is toggles
          if (this.playBackOptions.repeat_once) {
            this.audio.play();
          } else if (this.playBackOptions.shuffle) {
            this.shufflePlayList();
          } else if (this.playList.length > 1 && !this.audio.isLastPlaying()) {
            this.audio.next();
            this.audio.play();
          } else {
            console.log('ended');
          }
        }
      });

    // initialize playback
    this.playBackOptions = {
      shuffle: false,
      repeat_once: false,
      error: false
    };
  }
  /**
   * @method nextSong*/
  nextSong() {
    if (this.playBackOptions.shuffle) {
      this.shufflePlayList();
    } else {
      this.audio.next();
      this.audio.play();
    }
  }
  /**
   * @method previousSong*/
  previousSong() {
    if (this.playBackOptions.shuffle) {
      this.shufflePlayList();
    } else {
      this.audio.previous();
      this.audio.play();
    }
  }

  progressChanged(e: MatSliderChange) {
    this.audio.pause();
    this.audio.seekTo(e.value);
    this.audio.play();
  }

  togglePlayBackShuffle() {
    this.playBackOptions.shuffle = !this.playBackOptions.shuffle;
  }

  playBackRepeat() {
    this.playBackOptions.repeat_once = !this.playBackOptions.repeat_once;
  }
  /**
   * @method shufflePlaylist*/
  shufflePlayList() {
    let index: number;
    do {
      index = Math.floor(Math.random() * this.playList.length);
    }
    while (index === this.state.trackInfo.currentTrack);
    this.audio.playAt(index);
  }
  togglePlaylist() {
    $('#playlist').slideToggle('fast');
  }
  // like track
  toggleLikeTrack(index: number) {
    this.playList[index].liked = !this.playList[index].liked;
  }

  playlistPlayTrack(i: number) {
    if (i === this.state.trackInfo.currentTrack) {
      if (this.state.playing) {
        this.audio.pause();
      } else if (!this.state.playing) {
        this.audio.play();
      }
    } else {
      this.audio.playAt(i);
    }
  }
  // change theme
  changeTheme() {
    const colors = ['#e3342f', 'linear-gradient(to right, #137724, #c51b24, #fdd21f)', '#22292f'];
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === this.playerColor);
    this.playerColor = color;
  }

  playerPlayPause() {
    if (this.state.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }
  // toggle player mode
  togglePlayerMode() {
    this.playerMaxMode = !this.playerMaxMode;
  }
  // set progress of mini player
  setMiniPlayerProgress(val, max) {
    $('#app_audio_mini_track').css('width', ((val / max) * 100) + '%');
  }
}
