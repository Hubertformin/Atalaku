import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  autoDetectMetaData: boolean;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.autoDetectMetaData = false;
    this.titleService.setTitle('Add music - ATALAKU(Admin)');
  }

}
