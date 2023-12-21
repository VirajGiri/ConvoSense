
import { Component, OnDestroy } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss']
})
export class TextToSpeechComponent implements OnDestroy {

  textToSpeak: string = '';

  constructor(private textToSpeechService: TextToSpeechService) {
    this.textToSpeechService.addCommand('hello', () => {
      alert('Hello! Speech recognized.');
    });
  }

  speak(): void {
    if (this.textToSpeak) {
      this.textToSpeechService.speak(this.textToSpeak);
    }
  }

  stopSpeaking(): void {
    this.textToSpeechService.cancel();
  }

  ngOnDestroy(): void {
    // Ensure to stop speech synthesis when the component is destroyed
    this.stopSpeaking();
  }

}
