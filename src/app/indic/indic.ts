import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-indic',
  imports: [
    DynamicContent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './indic.html',
  styleUrl: './indic.css',
})
export class Indic {
  indicId: number = 2

}
