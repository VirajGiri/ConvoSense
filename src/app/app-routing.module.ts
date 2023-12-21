import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';

const routes: Routes = [ { path: 'chat', component: ChatComponent },
{path:'texttospeech', component: TextToSpeechComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
