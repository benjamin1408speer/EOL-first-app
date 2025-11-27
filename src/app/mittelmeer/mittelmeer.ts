import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mittelmeer',
  imports: [
    CommonModule,
    DynamicContent,
    FormsModule,
  ],
  templateUrl: './mittelmeer.html',
  styleUrl: './mittelmeer.css',
})
export class Mittelmeer {
  mittelmeerID: number = 6

}
