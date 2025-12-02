import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkWithHref, } from '@angular/router';

@Component({
  selector: 'app-oceans',
  imports: [
    
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkWithHref,
  ],
  templateUrl: './oceans.html',
  styleUrl: './oceans.css',
})
export class Oceans {
 title() {
    return "Die Ozeane der Welt";
  }
  generalInfo: string = ''
  
  backgroundImage(): string {
     return "/assets/images/meer.jpg";
  }
  
}

