import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import * as Chance from 'chance';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropIcon = faChevronDown;
  accountUrl: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  logOut() {
    this.authService.logOutUser();
  }
}
