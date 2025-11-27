import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { TextBild } from '../text-bild/text-bild';

@Component({
  selector: 'app-tierarten',
  imports: [
    CommonModule,
    FormsModule,
    DynamicContent,
    TextBild,
  ],
  templateUrl: './tierarten.html',
  styleUrl: './tierarten.css',
})
export class Tierarten {
tierartenID: number = 11
}
