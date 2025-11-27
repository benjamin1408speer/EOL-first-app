import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-redsea',
  imports: [
    CommonModule,
    DynamicContent,
    FormsModule,
  ],
  templateUrl: './redsea.html',
  styleUrl: './redsea.css',
})
export class Redsea {
  redseaId: number = 9

}
