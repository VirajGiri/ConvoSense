import { EventEmitter, Injectable } from "@angular/core";
declare const annyang: any;
@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  public speechRecognized: EventEmitter<string> = new EventEmitter();
  private synthesis: SpeechSynthesis;

  constructor(
  ) {
    this.synthesis = window.speechSynthesis;

    if (annyang) {
      annyang.addCallback('result', (phrases: string[]) => {
        if (phrases && phrases.length > 0) {
          console.log("phrases:",phrases);
          this.speechRecognized.emit(phrases[0]);
        }
      });
    }
  }

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    this.synthesis.speak(utterance);
  }

  cancel(): void {
    this.synthesis.cancel();
  }

  startListening(): void {
    if (annyang) {
      // Add your speech recognition commands here
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
