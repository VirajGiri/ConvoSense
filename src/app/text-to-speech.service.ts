import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private synthesis: SpeechSynthesis;

  constructor(
    // private recognitionService: SpeechRecognitionService
  ) {
    this.synthesis = window.speechSynthesis;
  }

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    this.synthesis.speak(utterance);
  }

  cancel(): void {
    this.synthesis.cancel();
  }

  // startListening(): void {
  //   this.recognitionService.start();
  // }

  // stopListening(): void {
  //   this.recognitionService.stop();
  // }
}
