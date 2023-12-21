// speech-recognition.service.ts
import { Injectable, EventEmitter } from '@angular/core';

declare const annyang: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  speechRecognized: EventEmitter<string> = new EventEmitter();

  constructor() {
    if (annyang) {
      annyang.addCallback('result', (phrases: string[]) => {
        if (phrases && phrases.length > 0) {
          this.speechRecognized.emit(phrases[0]);
        }
      });
    }
  }

  startListening(): void {
    if (annyang) {
      annyang.start();
    }
  }

  stopListening(): void {
    if (annyang) {
      annyang.abort();
    }
  }

  addCommand(command: string, callback: () => void): void {
    if (annyang) {
      annyang.addCommands({ [command]: callback });
    }
  }
}
