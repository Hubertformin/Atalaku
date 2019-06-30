import { Component, OnInit } from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  editIcon = faPencilAlt;

  constructor(
    private titleService: Title,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Services - ATALAKU(Admin)');
  }

}
