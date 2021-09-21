import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    ScrollingModule
  ],
  exports:[
    MatButtonModule,
    ScrollingModule
  ]
})
export class SharedMaterialModule { }
