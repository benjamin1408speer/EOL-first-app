import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicContent } from '../dynamic-content/dynamic-content';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-baltic',
  imports: [
    CommonModule,
    DynamicContent,
    FormsModule,
  ],
  templateUrl: './baltic.html',
  styleUrl: './baltic.css',
})
export class Baltic {
  balticID: number = 7

}
