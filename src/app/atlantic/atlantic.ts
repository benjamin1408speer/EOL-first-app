import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DynamicContent } from '../dynamic-content/dynamic-content';

@Component({
  selector: 'app-atlantic',
  imports: [
   
    FormsModule,
   
    CommonModule,
    DynamicContent,
  ],
  templateUrl: './atlantic.html',
  styleUrl: './atlantic.css',
})
export class Atlantic {
  atlanticId: number = 3


}
