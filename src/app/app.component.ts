import {Component, Inject, OnInit} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Atalaku';

  loading: boolean;

  constructor(private router: Router, @Inject('isBrowser') private isBrowser: boolean) {
  }

  ngOnInit(): void {
    // initialize loading
    this.loading = false;
    // router event handling
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
}
