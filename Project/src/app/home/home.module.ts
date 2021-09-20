import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeStoryComponent } from './home-story/home-story.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { HomeSloganComponent } from './home-slogan/home-slogan.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeStoryComponent,
    HomeImageComponent,
    HomeSloganComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
