import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  backIcon = faChevronLeft;
  uploadMode: boolean;
  // form builder group
  addMovieForm = this.formBuilder.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    rating: [null],
    genre: [null, Validators.required],
    director: [null],
    writer: [null],
    producer: [null],
    releaseDate: [{value: null, disabled: true}],
    studio: [null],
    thumbNailUrl: [null],
    duration: [null],
    resourceUrl: [null],
    coverImageUrl: [null]
  });

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.uploadMode = true;
    this.titleService.setTitle('Add movie - ATALAKU(Admin)');
    // test video
  }

  backToPreviousView() {
    window.history.back();
  }

}
