import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nordsee',
  imports: [
    CommonModule,
    DynamicContent,
    FormsModule,
  ],
  templateUrl: './nordsee.html',
  styleUrl: './nordsee.css',
})
export class Nordsee {
  nordseeID: number = 10

}
