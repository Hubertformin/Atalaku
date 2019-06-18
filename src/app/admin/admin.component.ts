import {Component, Inject, OnInit} from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loading: boolean;

  constructor(private router: Router, @Inject('isBrowser') private isBrowser: boolean) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true;
          break;
        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
          this.loading = false;
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
    if (this.isBrowser) {
      console.log('This is a the browser...');
      if (window.sessionStorage) {
        if (window.sessionStorage.getItem('user'))  {
          // this.route.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/admin/login']);
        }
      }
    } else {
      console.log('This is not the browser bitch...');
    }
  }
  //

}
