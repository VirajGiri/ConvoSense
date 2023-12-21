import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  public messages = [
    { text: 'Hi there!', sender: 'me', timestamp: new Date() },
    { text: 'Hello!', sender: 'other', timestamp: new Date() },
    // Add more messages as needed
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
