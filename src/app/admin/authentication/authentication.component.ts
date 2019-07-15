import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {NotifierService} from 'angular-notifier';
import {HttpService} from '../../providers/http.service';
import {AdminAuthService} from '../../providers/admin-auth.service';
import {ngxLoadingAnimationTypes} from 'ngx-loading';

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
  loading: boolean;
  private animationType;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private titleService: Title,
    private notifierService: NotifierService,
    private httpService: HttpService,
    private adminAuthService: AdminAuthService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login - ATALAKU (Admin)');
    this.loading = true;
    this.animationType = ngxLoadingAnimationTypes.threeBounce;
    // get admin data
    this.httpService.staff.subscribe((data) => {
      console.log(data);
    });
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
  }

}
