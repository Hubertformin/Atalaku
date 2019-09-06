import { Component, OnInit } from '@angular/core';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';
import * as $ from 'jquery';

interface Genre {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  musicGenreForm: Genre = {id: null, name: '', type: 'music'};
  movieGenreForm: Genre = {id: null, name: '', type: 'movie'};
  allMusicGenres: Genre[] = [];
  allMoviesGenres: Genre[] = [];
  updateForm: Genre | object;

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Media Genres - ATALAKU(Admin)');
    // get all genres
    this.httpService.getAllGenres()
      .subscribe((genres: Genre[]) => {
        console.log(genres);
        this.allMusicGenres = genres.filter((el) => {
          return el.type === 'music';
        });
        // get all movies genres
        this.allMoviesGenres = genres.filter((el) => {
          return el.type === 'movie';
        });
        console.log(this.allMusicGenres, this.allMoviesGenres);
      });
    // initializing update form
    this.updateForm = {name: '', type: ''};
  }
  // create genres
  createGenre(type) {
    switch (type) {
      case 'music':
        if (this.musicGenreForm.name !== '') {
          this.httpService.createGenre(this.musicGenreForm)
            .subscribe((data: Genre) => {
              this.allMusicGenres.push(data);
              this.musicGenreForm.name = '';
            });
        }
        break;
      case 'movie':
        if (this.movieGenreForm.name !== '') {
          this.httpService.createGenre(this.movieGenreForm)
            .subscribe((data: Genre) => {
              console.log(data);
              this.allMoviesGenres.push(data);
              this.movieGenreForm.name = '';
            });
        }
        break;
      default:
          return;
    }
  }
  // delete genre
  deleteGenre(type, index) {
    // TODO: fix delete genres endpoint.
    if (confirm('Are you sure? deleting genre would delete all media liked with this genre.')) {
      switch (type) {
        case 'music':
          this.httpService.deleteGenre(this.allMusicGenres[index].id)
            .subscribe((data) => {
              console.log(data);
              this.allMusicGenres.splice(index, 1);
            } , (err) => console.error(err));
          break;
        case 'movie':
          this.httpService.deleteGenre(this.allMoviesGenres[index].id)
            .subscribe((data) => {
              this.allMoviesGenres.splice(index, 1);
            }, (error => console.error(error)));
          break;
        default:
          return;
      }
    }
  }

  editGenre(type: string, index: number) {
    $('#editModal').fadeIn('fast');
    this.updateForm = this.allMusicGenres[index];
    switch (type) {
      case 'music':
        this.updateForm = this.allMusicGenres[index];
        break;
      case 'movie':
        this.updateForm = this.allMoviesGenres[index];
        break;
      default:
        return;
    }
  }

  updateGenre() {
    this.httpService.updateGenre(this.updateForm)
      .subscribe((data) => {
        console.log(data);
        this.updateForm = {};
        $('#editModal').fadeOut('fast');
      });
  }
}
