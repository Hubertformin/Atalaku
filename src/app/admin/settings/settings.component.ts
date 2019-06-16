import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  switchToTab: string;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Settings - ATALAKU(Admin)');
    this.switchToTab = 'General';
  }

  switchTab(e, tab: string) {
    this.switchToTab = tab;
  }

}
