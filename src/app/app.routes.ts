import { Routes } from '@angular/router';
import { Seas } from './pages/seas/seas';
import { Oceans } from './pages/oceans/oceans';

import { Home } from './home/home';


import { TextBild } from './text-bild/text-bild';
import { Water } from './water/water';
import { Tierarten } from './tierarten/tierarten';





// Die Routen-Konfiguration definiert, welche Komponente bei welcher URL angezeigt wird.
export const routes: Routes = [
    // Standard-Weiterleitung: Wenn die URL leer ist (Basis-Pfad), leite auf '/home' um.
    // 'pathMatch: full' stellt sicher, dass dies nur bei exakt leerem Pfad passiert.
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Die Startseite der Anwendung
    { path: 'home', component: Home },

    // Dynamische Route für Ozeane (z.B. /oceans/pacific, /oceans/atlantic)
    // ':id' ist ein Platzhalter (Parameter), der den spezifischen Ozean angibt.
    {
        path: 'oceans/:id',
        component: Water,
    },

    // Kind-Routen für spezifische Informationen zu einem Ozean
    // Diese Struktur erlaubt URLs wie: /oceans/pacific/tierarten
    { path: 'oceans/:id/tierarten', component: Tierarten },
    { path: 'oceans/:id/tiefen', component: TextBild },
    { path: 'oceans/:id/klima', component: TextBild },

    // Eine weitere Verschachtelung für spezifische Tierarten innerhalb eines Ozeans
    // URL-Beispiel: /oceans/pacific/tierarten/fische
    { path: 'oceans/:id/tierarten/:tier', component: TextBild },

    // Ähnliche Struktur für Meere (Seas)
    // Hier wird die Komponente 'Seas' als Übersicht genutzt
    { path: 'seas', component: Seas },

    // Dynamische Route für einzelne Meere (z.B. /seas/mittelmeer)
    { path: 'seas/:id', component: Water },
    { path: 'seas/:id/tierarten', component: Tierarten },
    { path: 'seas/:id/tiefen', component: TextBild },
    { path: 'seas/:id/klima', component: TextBild },
    { path: 'seas/:id/tierarten/:tier', component: TextBild },

    // Wildcard-Route: Fängt alle unbekannten URLs ab und leitet zur Startseite zurück.
    // Dies verhindert Fehlerseiten, wenn der Benutzer eine falsche URL eingibt.
    { path: '**', redirectTo: '' }
];







