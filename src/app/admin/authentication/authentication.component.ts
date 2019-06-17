import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  // form variables
  formField = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private titleService: Title,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login - ATALAKU(Admin)');
  }
  // Getters of form field parameters to be used for validation
  get username() {
    return this.formField.get('username');
  }
  get password() {
    return this.formField.get('password');
  }

  /**
   * @method authenticate
   * @summary authenticate user
   * */
  authenticate(e) {
    e.preventDefault();
    if (this.username.invalid || this.password.invalid) {
      this.notifierService.notify('error', 'Insert valid username and password!');
      return;
    }
    // submitting form
    if (window.sessionStorage) {
      window.sessionStorage.setItem('user', JSON.stringify({username: this.username.value, password: this.password.value}));
      this.route.navigate(['/admin/dashboard']);
    }
  }

}
