import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-antarctic',
  imports: [
    FormsModule,
    DynamicContent,
    CommonModule,
  ],
  templateUrl: './antarctic.html',
  styleUrl: './antarctic.css',
})
export class Antarctic {
  antarcticID: number = 5

}
