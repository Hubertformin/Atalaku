import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userData;

  constructor(private router: Router) { }
  // encode authorization token.
  private encodeToken(token: any): void {
    token.authDate = Date.now();
    sessionStorage.setItem('UT', CryptoJS.AES.encrypt(JSON.stringify(token), 'AUT').toString());
  }
  // decode authorization token.
  private decodeToken(): object | boolean {
    const token = sessionStorage.getItem('UT');
    try {
      const bytes = CryptoJS.AES.decrypt(token, 'AUT'),
      d = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return  d;
    } catch (e) {
      return false;
    }
  }
  // is token expired
  public isTokenExpired(): boolean {
    const token: any = this.decodeToken();
    if (token) {
      this._userData = token; // passing token
      const difference = Math.abs(Date.now() - token.authDate);
      if ((difference / 3600000) > 8) { sessionStorage.removeItem('UT'); }
      return (difference / 3600000) > 8;
    }
    return true;
  }
  // Authenticate user
  public authenticateUser(token) {
    this.encodeToken(token);
    this._userData = token;
    // redirect user to homepage or to specific direction
    if (window.sessionStorage && sessionStorage.getItem('url_dir')) {
      this.router.navigate([sessionStorage.getItem('url_dir')]);
      sessionStorage.removeItem('url_dir');
    } else {
      this.router.navigate(['/']);
    }
  }
  // check if a user is authenticated.
  public isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }
  // get user data
  get userData() {
    return this._userData;
  }
  // log out
  public logOutUser() {
    sessionStorage.removeItem('UT');
    // redirect user to homepage
    this.router.navigate(['/']);
  }
 }
