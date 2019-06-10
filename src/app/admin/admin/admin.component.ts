import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    if (window.sessionStorage) {
      if (window.sessionStorage.getItem('user'))  {
         this.route.navigate(['/admin/dashboard']);
      } else {
        this.route.navigate(['/admin/login']);
      }
    }
  }

}
