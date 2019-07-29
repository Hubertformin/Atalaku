import { Injectable } from '@angular/core';

import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private _adminData: object;

  constructor(private router: Router, private httpService: HttpService) { }
  // Get admin user data
  get adminData() {
    return this._adminData;
  }
  // encode admin authorization token.
  private encodeToken(token: any): boolean {
    token.authDate = Date.now();
    try {
      if (window.sessionStorage) {
        sessionStorage.setItem('aaux=', CryptoJS.AES.encrypt(JSON.stringify(token), 'AAUT').toString());
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  // decode user token
  private decodeToken(): object | boolean {
    const token = sessionStorage.getItem('aaux=');
    try {
      const bytes = CryptoJS.AES.decrypt(token, 'AAUT'),
        d = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return d;
    } catch (e) {
      return false;
    }
  }
  // check if token is expired
  public isTokenExpired() {
    const token: any = this.decodeToken();
    if (token) {
      this._adminData = token;
      const difference = Math.abs(Date.now() - token.authDate);
      if ((difference / 3600000) > 8) { sessionStorage.removeItem('AAU'); }
      return (difference / 3600000) > 8;
    }
    return true;
  }
  // check if a admin is authenticated.
  public isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }
  // Authenticate admin
  public authenticate(token) {
    this.encodeToken(token);
    this._adminData = token;
    // redirect user to homepage or to specific direction
    if (window.sessionStorage && sessionStorage.getItem('r_artt')) {
      this.router.navigate([sessionStorage.getItem('r_artt')]);
      sessionStorage.removeItem('r_artt');
    } else {
      this.router.navigate(['/admin/dashboard']);
    }
  }
  // log out
  public logOutUser() {
    sessionStorage.removeItem('aaux=');
    // redirect user to homepage
    this.router.navigate(['/admin/login']);
  }
}
