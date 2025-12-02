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
  route = inject(ActivatedRoute)
  dataservice = inject(DataService)

  myurl: UrlSegment[] = []

  ocean: ContentA | undefined = {
    id: '',
    title: '',
    text: '',
    image: ''
  }

  fupa: string[] = []
  selectedContent!: ContentA
  router = inject(Router)
  selectedMeerOzean!: string
  generalInfo: string = ''

  oceanseas: string = ''
  watername: string = ''
  waterspec: string = ''
  animal: string = ''

  contents = this.dataservice.GetAll()

  ngOnInit() {
    this.fullUrl()
    this.fupa = this.fullUrlArr()
    this.oceanseas = this.fupa[0]
    this.watername = this.fupa[1]
    this.waterspec = this.fupa[2]
    this.animal = this.fupa[3]

    this.myurl = this.route.snapshot.url
    let oceanName = this.myurl[1].path

    this.ocean =  this.dataservice.GetOcean(oceanName)
    
  }


  fullUrl() {
    let fullUrlPath = this.route.snapshot.pathFromRoot
      .map(ele => ele.url)
      .map(urlobj => urlobj.filter(upath => upath.path).join('/'))
      .join('/')
    console.log('text-bild:', fullUrlPath)
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
 


 

  //   if (id == 1) {
  //     this.router.navigate(['oceans/pacific/tiefen'])
  //   }
  //   if (id == 2) {
  //     this.router.navigate(['oceans/indic/tiefen'])
  //   }
  //   if (id == 3) {
  //     this.router.navigate(['oceans/atlantic/tiefen'])
  //   }
  //   if (id == 4) {
  //     this.router.navigate(['oceans/arctic/tiefen'])
  //   }
  //   if (id == 5) {
  //     this.router.navigate(['oceans/antarctic/tiefen'])
  //   }
  //   if (id == 6) {
  //     this.router.navigate(['seas/mittelmeer/tiefen'])
  //   }
  //   if (id == 7) {
  //     this.router.navigate(['seas/baltic/tiefen'])
  //   }
  //   if (id == 8) {
  //     this.router.navigate(['seas/blacksea/tiefen'])
  //   }
  //   if (id == 9) {
  //     this.router.navigate(['seas/redsea/tiefen'])
  //   }
  //   if (id == 10) {
  //     this.router.navigate(['seas/nordsee/tiefen'])
  //   }
  // }
  // onKlimaClick(id: number) {

  //   if (id == 1) {
  //     this.router.navigate(['oceans/pacific/klima'])
  //   }
  //   if (id == 2) {
  //     this.router.navigate(['oceans/indic/klima'])
  //   }
  //   if (id == 3) {
  //     this.router.navigate(['oceans/atlantic/klima'])
  //   }
  //   if (id == 4) {
  //     this.router.navigate(['oceans/arctic/klima'])
  //   }
  //   if (id == 5) {
  //     this.router.navigate(['oceans/antarctic/klima'])
  //   }
  //   if (id == 6) {
  //     this.router.navigate(['seas/mittelmeer/klima'])
  //   }
  //   if (id == 7) {
  //     this.router.navigate(['seas/baltic/klima'])
  //   }
  //   if (id == 8) {
  //     this.router.navigate(['seas/blacksea/klima'])
  //   }
  //   if (id == 9) {
  //     this.router.navigate(['seas/redsea/klima'])
  //   }
  //   if (id == 10) {
  //     this.router.navigate(['seas/nordsee/klima'])
  //   }

  // }







  //  rest irgendwann mal in einen service auslagern




}
