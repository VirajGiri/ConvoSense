import { Component, OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss']
})
export class SpeechToTextComponent implements OnDestroy {
  recognizedText: string = '';
  
  private speechSubscription: Subscription;

  constructor(
    private speechRecognitionService: SpeechRecognitionService
  ) {
    // Subscribe to the recognized text event
    this.speechSubscription = this.speechRecognitionService.speechRecognized.subscribe((text: string) => {
      this.recognizedText += text;
    });
  }

  startListening(): void {
    this.speechRecognitionService.startListening();
  }

  stopListening(): void {
    this.speechRecognitionService.stopListening();
  }

  ngOnDestroy(): void {
    this.stopListening();
    this.speechSubscription.unsubscribe();
  }
}
