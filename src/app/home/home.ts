import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 title() {
    return "Allgemeine Informationen über die Weltmeere";
  }
  generalInfo: string = ''
  
  backgroundImage(): string {
     return "/assets/images/welt.jpg";
  }
  
}
