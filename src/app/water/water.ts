import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, UrlSegment } from '@angular/router';
import { ContentA } from '../models/content.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data-service';

@Component({
  selector: 'app-water',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './water.html',
  styleUrl: './water.css',
})
export class Water {
  // ActivatedRoute wird injiziert, um Zugriff auf die aktuelle URL und deren Parameter zu erhalten.
  route = inject(ActivatedRoute)

  // DataService wird injiziert, um die Inhalte (Texte, Bilder) zu laden.
  dataservice = inject(DataService)

  // Der Router wird benötigt, um programmgesteuert zu navigieren (z.B. bei Klicks auf Buttons).
  router = inject(Router)

  myurl: UrlSegment[] = []

  ocean: ContentA | undefined = {
    id: '',
    title: '',
    text: '',
    image: ''
  }

  fupa: string[] = []

  generalInfo: string = ''

  oceanseas: string = ''
  watername: string = ''
  waterspec: string = ''
  animal: string = ''

  contents = this.dataservice.GetAll()

  // ngOnInit() ist ein "Lifecycle Hook", der beim Start der Komponente ausgeführt wird.
  ngOnInit() {
    // 1. Gesamte URL-Struktur auslesen
    this.fullUrl()
    this.fupa = this.fullUrlArr()

    // 2. Die einzelnen Teile der URL (Segmente) in Variablen speichern
    // Beispiel-URL: /oceans/pacific/tierarten/fische
    this.oceanseas = this.fupa[0] // z.B. 'oceans'
    this.watername = this.fupa[1] // z.B. 'pacific'
    this.waterspec = this.fupa[2] // z.B. 'tierarten'
    this.animal = this.fupa[3]    // z.B. 'fische' (kann auch undefined sein)

    // 3. Den aktuellen Ozean-Namen aus der URL holen
    this.myurl = this.route.snapshot.url

    // Warnung: Wir nehmen an, dass 'watername' an Index 1 steht. Das ist bei /oceans/:id korrekt.
    let oceanName = this.myurl[1]?.path || this.watername;

    // 4. passenden Inhalt aus dem DataService laden
    this.ocean =  this.dataservice.GetOcean(oceanName)
  }


  // Diese Methode baut den kompletten Pfad der URL als String zusammen.
  // Das ist nützlich, um relative Navigation durchzuführen.
  fullUrl() {
    let fullUrlPath = this.route.snapshot.pathFromRoot
      .map(ele => ele.url)
      .map(urlobj => urlobj.filter(upath => upath.path).join('/'))
      .join('/')
    console.log('Aktueller Pfad:', fullUrlPath)
    return fullUrlPath
  }

  fullUrlArr(): string[] {
    let fullUrlPathArr: string[] = []
    this.route.snapshot.pathFromRoot
      .map(ele => ele.url)
      .map(urlobj => urlobj.filter(upath => fullUrlPathArr.push(upath.path)))

    console.log('text-bild:', fullUrlPathArr)
    return fullUrlPathArr
  }




  onTierartenClick() {
    let route = this.fullUrl() + '/' + 'tierarten'
    console.log('onTierartenClick:', route)
    this.router.navigate([route])
  }
  onTiefenClick() {
    let route = this.fullUrl() + '/' + 'tiefen'
    console.log('onTiefeninfoClick:', route)
    this.router.navigate([route])
  }
  onKlimaClick() {
    let route = this.fullUrl() + '/' + 'klima'
    console.log('onKlimaClick:', route)
    this.router.navigate([route])
  }

  specs = ['Tierarten', 'TiefenInfo', 'Klima']

  tierarten = [
    'Fische',
    'Säugetiere',
    'Vögel',
    'Krusten/ Weichtiere',
  ]
  onFischeClick() {
    let route = this.fullUrl() + '/' + 'fische'
    console.log('onFischeClick:', route)
    this.router.navigate([route])
  }
}














