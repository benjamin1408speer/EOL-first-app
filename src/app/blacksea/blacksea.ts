import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blacksea',
  imports: [
    CommonModule,
    DynamicContent,
    FormsModule,
  ],
  templateUrl: './blacksea.html',
  styleUrl: './blacksea.css',
})
export class Blacksea {
  blackseaID: number = 8

}
