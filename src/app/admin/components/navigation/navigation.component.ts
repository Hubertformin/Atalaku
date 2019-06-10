import { Component, OnInit } from '@angular/core';
import {faCogs, faMusic, faTv, faUsers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  moviesIcon = faTv;
  musicIcon = faMusic;
  usersIcon = faUsers;
  settingsIcon = faCogs;

  constructor() { }

  ngOnInit() {
  }

}
