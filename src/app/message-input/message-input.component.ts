import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  public newMessage:  string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    // Handle file selection logic here
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file);
      // Add logic to handle file upload or display file details
    }
  }

  sendMessage() {
    // Add logic to send the message (e.g., push to the messages array)
  }

}
