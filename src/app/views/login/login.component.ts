import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';
import {FormBuilder, Validators} from '@angular/forms';
import {UsersModel} from '../../models/Users.model';
import {AuthService} from '../../providers/auth.service';

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
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login - ATALAKU');
  }

  authenticate(e) {
    e.preventDefault();
    console.log('sending request...');
    this.httpService.getUserByEmail(this.loginForm.get('email').value)
      .subscribe((data: UsersModel) => {
        console.log(data);
        // authenticate user
        if (!data) {
          // if username was not found
          this.setError('Account does not exist!');
        } else {
          // if passwords do not match
          if (data.password !== this.loginForm.get('password').value) {
            this.setError('Password incorrect!');
          } else {
            // authenticate user...
            this.auth.authenticateUser(data);
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
