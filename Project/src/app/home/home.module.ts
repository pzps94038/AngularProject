import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeStoryComponent } from './home-story/home-story.component';
import { HomeImageComponent } from './home-image/home-image.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeStoryComponent,
    HomeImageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
