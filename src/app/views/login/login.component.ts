import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private titleService: Title,
    private httpService: HttpService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login -ATALAKU');
    /*this.httpService.getAllUsers()
      .subscribe((data) => {
        console.log(data);
      }, error1 => console.error(error1));*/
    /*this.http.get('http://localhost:5000/', {headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'authkey',
        'userid': '1'
      })})
      .subscribe((data) => {
        console.log(data);
      }, error => {
        console.log(error);
      });*/
    fetch('http://localhost:5000/all-users', {headers: {'Acess-Control-Allow-Origin': '*'}})
      .then((data) => {
        console.log(data.json());
      }).catch((error) => {
        console.error(error);
    });
  }

}
