import {Component, Input, OnInit} from '@angular/core';
import {faBackward, faChessBoard, faFastBackward, faFastForward, faForward, faHeart, faLayerGroup, faListAlt, faPause, faPlay, faRandom} from '@fortawesome/free-solid-svg-icons';
import {AudioStream, RxJSAudioService, StreamState} from 'rxjs-audio';
import {MatSliderChange} from '@angular/material';
import * as $ from 'jquery';

interface AudioPlayBack {
  shuffle: boolean;
  repeat_once: boolean;
}

declare type ColorType = 'red' | 'flag' | 'dark' | undefined;

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  @Input() banner: string;
  @Input() theme: ColorType;
  // icons
  previousIcon = faFastBackward;
  playIcon = faPlay;
  nextIcon = faFastForward;
  pauseIcon = faPause;
  likeIcon = faHeart;
  themeIcon = faChessBoard;
  shuffleIcon = faRandom;
  // rxjs audio service
  rxjsAudioService = new RxJSAudioService();
  audio: AudioStream;
  tracks = [
    {albumArt: '../../../assets/images/wanshey.jpeg', artist: 'Magasco', title: 'Bella', album: 'Uncencsored', url: '../../../assets/bella.mp3', liked: false},
    {albumArt: '../../../assets/images/magufuli.jpeg', artist: 'Locko', title: 'Ndutu', album: 'Singles', url: '../../../assets/ndutu.mp3', liked: false},
    {albumArt: '../../../assets/images/mboko.jpeg', artist: 'Blanche Bailey', title: 'BonBon', album: 'Uncensored', url: '../../../assets/bonbon.mp3', liked: false},
    ];
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
      case 'red':
        this.playerColor = '#e3342f';
        break;
      case 'flag':
        this.playerColor = 'linear-gradient(to right, #137724, #c51b24, #fdd21f)';
        break;
      case 'dark':
        this.playerColor = '#22292f';
        break;
      default:
        this.playerColor = '#e3342f';
        break;
    }
    // initializing player mode
    this.playerMaxMode = true;
    // initializing audio
    this.audio = this.rxjsAudioService.create(this.tracks, {urlKey: 'url'});
    this.audio.getState()
      .subscribe((state: StreamState) => {
        // trim seconds
        this.state = state;
      }, error1 => {
        //
      });
    //
    this.audio.events()
      .subscribe(event => {
        if (event.type === 'canplay') {
          // this.error = false;
        } else if (event.type === 'error') {
          console.log('error occurred!');
        }
        if (event.type === 'ended') {
          // if repeat is toggles
          if (this.playBackOptions.repeat_once) {
            this.audio.play();
          } else if (this.playBackOptions.shuffle) {
            this.shufflePlayList();
          } else if (this.tracks.length > 1 && !this.audio.isLastPlaying()) {
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
      repeat_once: false
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
      index = Math.floor(Math.random() * this.tracks.length);
    }
    while (index === this.state.trackInfo.currentTrack);
    this.audio.playAt(index);
    console.log(index);
  }
  togglePlaylist() {
    $('#playlist').slideToggle('fast');
  }
  // like track
  toggleLikeTrack(index: number) {
    this.tracks[index].liked = !this.tracks[index].liked;
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
}
