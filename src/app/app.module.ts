import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import anime from 'animejs';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RatingDropdownComponent } from './rating-dropdown/rating-dropdown.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SurveyQuestionsComponent } from './rating-dropdown/survey-questions/survey-questions.component';
import { SpacCarouselComponent } from './spac-carousel/spac-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingDropdownComponent,
    SpeakerDetailsComponent,
    SurveyQuestionsComponent,
    SpacCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
