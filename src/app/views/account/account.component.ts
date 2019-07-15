import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Title} from '@angular/platform-browser';
import { AuthService } from '../../providers/auth.service';
import * as moment from 'moment';
import {HttpService} from '../../providers/http.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  // form variables
  accountForm = this.formBuilder.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    tel: [null],
    password: [null],
    old_password: [null],
    new_password: [null],
    confirm_password: [null],
    subscription: [null],
    country: [null],
    expiryDate: [null]
  });
  changePasswordState: boolean;
  userData;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) { }
  // Form getters
  get username() {
    return this.accountForm.get('username');
  }
  get email() {
    return this.accountForm.get('email');
  }
  get old_password() {
    return this.accountForm.get('old_password');
  }
  get password() {
    return this.accountForm.get('password');
  }
  get confirm_password() {
    return this.accountForm.get('confirm_password');
  }
  get new_password() {
    return this.accountForm.get('new_password');
  }
  get tel() {
    return this.accountForm.get('tel');
  }
  get subscription() {
    return this.accountForm.get('subscription');
  }

  ngOnInit() {
    // set the title of the page to user's account name
    this.titleService.setTitle('My Account - ATALAKU');
    // set the change password state to false
    this.changePasswordState = false;
    // initializing form data;
    this.userData = this.authService.userData;
    this.accountForm.patchValue({
      username: this.userData.username,
      email: this.userData.email,
      tel: this.userData.tel,
      password: this.userData.password,
      country: this.userData.country,
      subscription: this.userData.subscription,
      expiryDate: this.userData.expiryDate
    });
  }

  updateUser() {
    // update form if only it was modified.
    if (this.accountForm.dirty || this.accountForm.touched) {
      // check for password changes
      if ((this.accountForm.get('old_password').value && this.accountForm.get('old_password').value !== '')
        && this.accountForm.get('old_password').value !== this.userData.password) {
        this.changePasswordState = true;
        this.snackBar.open('Wrong old password', 'close', {duration: 3500});
        return;
      }
      // if passwords don't match
      if ((this.accountForm.get('new_password').value && this.accountForm.get('new_password').value !== '')
        && this.accountForm.get('new_password').value !== this.accountForm.get('confirm_password').value) {
        console.log(this.accountForm.get('new_password').value);
        console.log(this.accountForm.get('confirm_password').value);
        this.changePasswordState = true;
        this.snackBar.open('Passwords do not match', 'close', {duration: 3500});
        return;
      }
      // patch password if set
      if (this.accountForm.get('new_password').value && this.accountForm.get('new_password').value !== '') {
        this.accountForm.patchValue({password: this.accountForm.get('new_password').value});
      }
      // now updating user accounts
      console.log(this.accountForm.value);
      this.httpService.updateUser(this.userData.id, this.accountForm.value)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
