import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeStoryComponent } from './home-story/home-story.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { HomeSloganComponent } from './home-slogan/home-slogan.component';
import { RouterModule } from '@angular/router';
import { HomeFooterComponent } from './home-footer/home-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeStoryComponent,
    HomeImageComponent,
    HomeSloganComponent,
    HomeFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
