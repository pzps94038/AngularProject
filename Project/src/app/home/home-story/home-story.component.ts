import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-home-story',
  templateUrl: './home-story.component.html',
  styleUrls: ['./home-story.component.scss']
})
export class HomeStoryComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init();
  }

}
