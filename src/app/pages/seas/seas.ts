import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkWithHref,  } from '@angular/router';




@Component({
  selector: 'app-seas',
  imports: [
    
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkWithHref,
  ],
  templateUrl: './seas.html',
  styleUrl: './seas.css',
})
export class Seas {
 

  title() {
    return "Die Meere der Welt";
  }
  generalInfo: string = ''
  
  backgroundImage(): string {
     return "/assets/images/meer.jpg";
  }
  onButtonClick(buttonNumber: number): void {
    console.log(`Button ${buttonNumber} wurde geklickt!`);
}
}
