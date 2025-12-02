import { Routes } from '@angular/router';
import { Seas } from './pages/seas/seas';
import { Oceans } from './pages/oceans/oceans';

import { Home } from './home/home';


import { TextBild } from './text-bild/text-bild';
import { Water } from './water/water';
import { Tierarten } from './tierarten/tierarten';





export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    

    { path: 'oceans', component: Oceans },
    { path: 'oceans/pacific', component: Water, },
    { path: 'oceans/pacific/tierarten', component: Tierarten, },
    { path: 'oceans/pacific/tiefen', component: TextBild, },
    { path: 'oceans/pacific/klima', component: TextBild, },
    { path: 'oceans/pacific/tierarten/:tier', component: TextBild, },
   
    { path: 'oceans', component: Oceans },
    { path: 'oceans/atlantic', component: Water, },
    { path: 'oceans/atlantic/tierarten', component: Tierarten, },
    { path: 'oceans/atlantic/tiefen', component: TextBild, },
    { path: 'oceans/atlantic/klima', component: TextBild, },
    { path: 'oceans/atlantic/tierarten/:tier', component: TextBild, },

    { path: 'oceans', component: Oceans },
    { path: 'oceans/indic', component: Water, },
    { path: 'oceans/indic/tierarten', component: Tierarten, },
    { path: 'oceans/indic/tiefen', component: TextBild, },
    { path: 'oceans/indic/klima', component: TextBild, },
    { path: 'oceans/indic/tierarten/:tier', component: TextBild, },

    { path: 'oceans', component: Oceans },
    { path: 'oceans/arctic', component: Water, },
    { path: 'oceans/arctic/tierarten', component: Tierarten, },
    { path: 'oceans/arctic/tiefen', component: TextBild, },
    { path: 'oceans/arctic/klima', component: TextBild, },
    { path: 'oceans/arctic/tierarten/:tier', component: TextBild, },

    { path: 'oceans', component: Oceans },
    { path: 'oceans/antarctic', component: Water, },
    { path: 'oceans/antarctic/tierarten', component: Tierarten, },
    { path: 'oceans/antarctic/tiefen', component: TextBild, },
    { path: 'oceans/antarctic/klima', component: TextBild, },
    { path: 'oceans/antarctic/tierarten/:tier', component: TextBild, },

    
    { path: 'seas', component: Seas },
    { path: 'seas/mittelmeer', component: Water, },
    { path: 'seas/mittelmeer/tierarten', component: Tierarten, },
    { path: 'seas/mittelmeer/tiefen', component: TextBild, },
    { path: 'seas/mittelmeer/klima', component: TextBild, },
    { path: 'seas/mittelmeer/tierarten/:tier', component: TextBild, },

    { path: 'seas', component: Seas },
    { path: 'seas/baltic', component: Water, },
    { path: 'seas/baltic/tierarten', component: Tierarten, },
    { path: 'seas/baltic/tiefen', component: TextBild, },
    { path: 'seas/baltic/klima', component: TextBild, },
    { path: 'seas/baltic/tierarten/:tier', component: TextBild, },

    { path: 'seas', component: Seas },
    { path: 'seas/blacksea', component: Water, },
    { path: 'seas/blacksea/tierarten', component: Tierarten, },
    { path: 'seas/blacksea/tiefen', component: TextBild, },
    { path: 'seas/blacksea/klima', component: TextBild, },
    { path: 'seas/blacksea/tierarten/:tier', component: TextBild, },

    { path: 'seas', component: Seas },
    { path: 'seas/redsea', component: Water, },
    { path: 'seas/redsea/tierarten', component: Tierarten, },
    { path: 'seas/redsea/tiefen', component: TextBild, },
    { path: 'seas/redsea/klima', component: TextBild, },
    { path: 'seas/redsea/tierarten/:tier', component: TextBild, },

    { path: 'seas', component: Seas },
    { path: 'seas/nordsee', component: Water, },
    { path: 'seas/nordsee/tierarten', component: Tierarten, },
    { path: 'seas/nordsee/tiefen', component: TextBild, },
    { path: 'seas/nordsee/klima', component: TextBild, },
    { path: 'seas/nordsee/tierarten/:tier', component: TextBild, },

   { path: '**', redirectTo: ''}
]
                
                
            


        
    
