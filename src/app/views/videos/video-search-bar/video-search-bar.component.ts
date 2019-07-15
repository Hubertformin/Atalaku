import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video-search-bar',
  templateUrl: './video-search-bar.component.html',
  styleUrls: ['./video-search-bar.component.scss']
})
export class VideoSearchBarComponent implements OnInit {
  searchIcon = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
