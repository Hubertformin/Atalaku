import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../providers/http.service';

@Component({
  selector: 'app-add-music-video',
  templateUrl: './add-music-video.component.html',
  styleUrls: ['./add-music-video.component.scss']
})
export class AddMusicVideoComponent implements OnInit {
  addMusicForm = this.formBuilder.group({
    title: [null, Validators.required],
    artist: [null, Validators.required],
    year: [null, Validators.required],
    disc_num: [null],
    composer: [null],
    genre: [null, Validators.required],
    album_artist: [null, Validators.required],
    duration: [null, Validators.required],
    cdn_link: [null, Validators.required],
    thumbnail_url: [null, Validators.required],
    album: [null, Validators.required]
  });
  musicGenres: any[];

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Add music video - ATALAKU(Admin)');
    // get all music genres
    this.httpService.getGenresByType('music')
      .subscribe((data: any[]) => {
        this.musicGenres = data;
      });
  }


  gotBack() {
    window.history.back();
  }
  // add music video
  addMusicVideo() {
    console.log(this.addMusicForm.value);
    if (this.addMusicForm.invalid) {
      // alert('please insert valid values the form below.');
      // return;
    }
    // formatting before sending to back end
    let musicVideo = this.addMusicForm.value;
    console.log(musicVideo.title);
    musicVideo.title = musicVideo.title[0].toUpperCase() + musicVideo.title.slice(1).toLowerCase();
    musicVideo.artist = musicVideo.artist[0].toUpperCase() + musicVideo.artist.slice(1).toLowerCase();
    musicVideo.album_artist = musicVideo.album_artist[0].toUpperCase() + musicVideo.album_artist.slice(1).toLowerCase();
    // sending data to server
    this.httpService.addMusicVideo(musicVideo)
      .subscribe((data) => {
        console.log(data);
        musicVideo = null;
      });
  }
}
