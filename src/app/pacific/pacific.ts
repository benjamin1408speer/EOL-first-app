import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DynamicContent } from '../dynamic-content/dynamic-content';

@Component({
  selector: 'app-pacific',
  imports: [
    CommonModule,
    FormsModule,
    DynamicContent
  ],
  templateUrl: './pacific.html',
  styleUrl: './pacific.css',
})
export class Pacific {
  pazificId: number = 1

 

 
}
