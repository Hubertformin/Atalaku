import { Component, OnInit } from '@angular/core';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  editIcon = faPencilAlt;
  deleteIcon = faTrash;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Media Genres - ATALAKU(Admin)');
  }

}
