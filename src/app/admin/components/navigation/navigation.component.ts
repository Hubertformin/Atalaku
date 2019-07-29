import { Component, OnInit } from '@angular/core';
import {
  faCogs,
  faMusic,
  faTv,
  faUsers,
  faChevronDown,
  faEnvelopeOpen,
  faBlog,
  faVideo, faCalendar, faCompactDisc, faUserLock, faWallet, faCalculator
} from '@fortawesome/free-solid-svg-icons';
import {AdminAuthService} from '../../../providers/admin-auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dashboardIcon = faCalendar;
  moviesIcon = faVideo;
  genresIcon = faCalculator;
  musicIcon = faMusic;
  musicVideoIcon = faCompactDisc;
  usersIcon = faUsers;
  staffIcon = faUserLock;
  settingsIcon = faCogs;
  dropIcon = faChevronDown;
  messagingIcon = faEnvelopeOpen;
  blogIcon = faBlog;
  frontendIcon = faTv;
  servicesIcon = faWallet;

  constructor(private authService: AdminAuthService) { }

  ngOnInit() {
    console.log(this.authService.adminData);
  }

}
