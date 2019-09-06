import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';
import {FormBuilder, Validators} from '@angular/forms';

interface MusicModel {
  title: string;
  artist: string;
  album: string;
  album_year: string;
  year: string;
  genre: string;
  composer: string;
  album_artist: string;
  duration: string;
  album_thumbnail_url: string;
}

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  autoDetectMetaData: boolean;
  musicGenres: any[] = [];
  addMusicForm = this.formBuilder.group({
    title: [null, Validators.required],
    artist: [null, Validators.required],
    album: [null, Validators.required],
    year: [null, Validators.required],
    genre: [null, Validators.required],
    composer: [null, Validators.required],
    album_artist: [null, Validators.required],
    duration: [null, Validators.required],
    album_thumbnail_url: ['', Validators.required],
    admin: ['root', Validators.required]
  });

  constructor(
    private titleService: Title,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.autoDetectMetaData = false;
    this.titleService.setTitle('Add music - ATALAKU(Admin)');
    // get music genres
    this.httpService.getGenresByType('music')
      .subscribe((data: any[]) => {
        this.musicGenres = data;
        console.log(data);
      });
  }

  addNewMusic() {
    if (this.addMusicForm.valid) {
      console.log('valid');
    }
    const music: MusicModel = this.addMusicForm.value;
    music.title = music.title[0].toUpperCase() + music.title.slice(1).toLowerCase();
    music.album = music.album[0].toUpperCase() + music.album.slice(1).toLowerCase();
    music.artist = music.artist[0].toUpperCase() + music.artist.slice(1).toLowerCase();
    music.album_artist = music.album_artist[0].toUpperCase() + music.album_artist.slice(1).toLowerCase();
    music.album_year = music.year;
    // music.genre = JSON.stringify(music.genre);
    // add file to database, this should be done only after uploads have been completed..
    this.httpService.addMusic(music)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
