import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder, Validators} from '@angular/forms';

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
    disc_num: [null, Validators.required],
    composer: [null, Validators.required],
    genre: [null, Validators.required],
    album_artist: [null, Validators.required],
    duration: [null, Validators.required],
    cdn_link: [null, Validators.required],
    thumbnail_url: [null, Validators.required]
  });

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Add music video - ATALAKU(Admin)');
  }


  gotBack() {
    window.history.back();
  }
}
