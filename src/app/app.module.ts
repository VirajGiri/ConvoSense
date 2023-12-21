import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageListComponent,
    MessageInputComponent,
    TextToSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    RouterModule,
    MatExpansionModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
