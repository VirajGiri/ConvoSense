import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';
import { NgModule } from '@angular/core';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

const routes: Routes = [ { path: 'chat', component: ChatComponent },
{path:'texttospeech', component: TextToSpeechComponent},
{path:'speechtotext', component: SpeechToTextComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
