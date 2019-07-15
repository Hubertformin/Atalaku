import { Injectable } from '@angular/core';
import {AdminModule} from '../admin/admin.module';

import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminAuthService} from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private adminAuthService: AdminAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.adminAuthService.isAuthenticated()) {
      // save the user's current direction url in a session storage so as to redirect after authentication
      if (window.sessionStorage) {
        sessionStorage.setItem('r_artt', state.url);
      }
      this.router.navigate(['/admin/login']);
      return false;
    }
    return true;
  }
}
