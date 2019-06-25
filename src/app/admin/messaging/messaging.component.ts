import { Component, OnInit } from '@angular/core';
import {faEnvelope, faEnvelopeOpen, faPencilAlt, faReply, faSearch, faTrash} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  composeIcon = faPencilAlt;
  searchIcon = faSearch;
  messageIcon = faEnvelopeOpen;
  sendMessageIcon = faEnvelope;
  forwardIcon = faReply;
  deleteIcon = faTrash;
  htmlContent: any;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Messaging - ATALAKU(Admin)');
  }

  toggleComposeModal() {
    $('#send-message-modal').fadeToggle('fast');
  }

}
