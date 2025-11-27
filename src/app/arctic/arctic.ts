import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicContent } from '../dynamic-content/dynamic-content';

@Component({
  selector: 'app-arctic',
  imports: [
    FormsModule,
    CommonModule,
    DynamicContent,
  ],
  templateUrl: './arctic.html',
  styleUrl: './arctic.css',
})
export class Arctic {
  arcticID: number = 4

}
