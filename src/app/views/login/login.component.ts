import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';
import {FormBuilder, Validators} from '@angular/forms';
import {UsersModel} from '../../models/Users.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });
  // error
  errorMode = {
    state: false,
    message: ''
  };

  constructor(
    private titleService: Title,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login -ATALAKU');
  }

  authenticate(e) {
    e.preventDefault();
    console.log('sending request...');
    this.httpService.getUserByEmail(this.loginForm.get('email').value)
      .subscribe((data: UsersModel) => {
        // authenticate user
        console.log(data);
        if (!data) {
          this.setError('Account does not exist!');
        } else {
          if (data.password !== this.loginForm.get('password').value) {
            this.setError('Password incorrect!');
          }
        }
      }, error1 => {
        console.error(error1);
        this.setError('Unknown Error, Try again later!');
      });
  }
  // set error
  setError(msg: string): void {
    this.errorMode.state = true;
    this.errorMode.message = msg;
  }
}
