import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-slogan',
  templateUrl: './home-slogan.component.html',
  styleUrls: ['./home-slogan.component.scss']
})
export class HomeSloganComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init();
  }
}
