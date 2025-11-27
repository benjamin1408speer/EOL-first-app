import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContentA } from '../models/content.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  fupa: string[] = []
  selectedContent!: ContentA
  router = inject(Router)
  selectedMeerOzean!: string
  generalInfo: string = ''

  oceanseas: string = ''
  watername: string = ''
  waterspec: string = ''
  animal: string = ''


  ngOnInit() {
    this.fullUrl()
    this.fupa = this.fullUrlArr()
    this.oceanseas = this.fupa[0]
    this.watername = this.fupa[1]
    this.waterspec = this.fupa[2]
    this.animal = this.fupa[3]
    

    this.ocean = this.contents.find(ele => ele.id == this.watername)
    if (this.ocean == undefined) {
      this.selectedContent = this.contents[0]
    } else {
      this.selectedContent = this.ocean
    }
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


  onButtonClick(buttonText: string): void {
    console.log(`Button ${buttonText} wurde geklickt!`);
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

  // onTiefenbeschreibungClick(id: number) {

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

  ocean: ContentA | undefined = {
    id: '',
    title: '',
    text: '',
    image: ''
  }

  contents: ContentA[] = [
    /*Id Ozeane */
    {
      id: 'pacific',
      title: 'Der Pazifik',
      text: 'Der Pazifische Ozean wird auch Stiller Ozean oder kurz Pazifik genannt und ist das größte der drei Weltmeere. Er liegt zwischen Asien und Australien im Westen und Amerika im Osten.Zusammen mit seinen Nebenmeeren ist er fast so groß wie alle anderen Meere der Erde zusammen.Außerdem ist er größer als alle Kontinente zusammen.',
      image: '/assets/images/monkeywave.jpg',
      tiefe: 3333,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Dies ist ein sehr tiefer Ozean!',
      tiere: ['frosch', 'fisch2'],
      klimaText: 'Es ist irgendwie wärmlich, zumindest in Teilen des Pazifik.'
    },
    {
      id: 'indic',
      title: 'Indischer Ozean',
      text: 'Der Indische Ozean ist das kleinste der Weltmeere. Er liegt zwischen Afrika im Westen, Asien im Norden und Australien im Osten. Nach Süden geht er in das Südpolarmeer über, das heute meist als Antarktischer Ozean bezeichnet wird. Benannt ist der Indische Ozean nach dem Land Indien. Es ragt wie ein Keil vom asiatischen Kontinent her in den Ozean hinein.',
      image: '/assets/images/manta.jpg',
      tiere: ['fisch12', 'fisch22'],
      klimaText: 'Es ist irgendwie wärmlich, zumindest in Teilen des Pazifik.'
    },
    {
      id: 'atlantic',
      title: 'Der Atlantik',
      text: 'Der Atlantik ist nach dem Pazifischen Ozean der zweitgrößte Ozean.Er befindet sich zwischen Amerika im Westen und Europa sowie Afrika im Osten.Weil der Atlantische Ozean so groß ist, gibt es Temperaturunterschiede zwischen verschiedenen Bereichen. In den Polargebieten ist das Wasser eher kalt, nahe am Äquator dagegen wärmer. Dadurch bietet der Atlantik viele verschiedene Lebensräume für sehr unterschiedliche Tierarten.',
      image: '/assets/images/krake.jpg',
      tiere: ['fisch13', 'fisch23']
    },
    {
      id: 'arctic',
      title: 'Arktischer Ozean',
      text: 'Der Arktische Ozean ist das Meer in der Arktis. Es liegt zum Großteil unter dem Eis. Man nennt es auch Nordpolarmeer, Nördliches Eismeer, Arktische See oder Arktik. Er ist der kleinste Ozean der Erde. Er ist auch nur knapp 1000 Meter tief. Manche Leute zählen ihn zum Atlantik.Der Arktische Ozean grenzt an Asien, Europa und Nordamerika.',
      image: '/assets/images/polar.jpg',

    },
    {
      id: 'antarctic',
      title: 'Antarktischer Ozean',
      text: 'Der Antarktische Ozean ist das Meer rund um das antarktische Festland herum. Die Grenze verläuft dort, wo das kalte Wasser auf das wärmere Wasser des Atlantiks, des Pazifiks und des Indischen Ozeans stößt. Diese Grenze verschiebt sich je nach Jahreszeit und liegt zwischen dem 40. und dem 60. Breitengrad. Der Antarktische Ozean hat verschiedene Namen: Südlicher Ozean, Südpolarmeer oder Südliches Eismeer.Im Winter frieren große Teile zu. ',
      image: '/assets/images/penguin.webp',

    },
    {
      id: 'mittelmeer',
      title: 'Mittelmeer',
      text: 'Das Mittelmeer ist das Meer zwischen Europa und Afrika. Im Westen kann man mit einem Schiff in den Atlantischen Ozean fahren, über eine Meerenge, die Straße von Gibraltar. Im Osten geht es durch die Dardanellen und den Bosporus in das Schwarze Meer. In Ägypten führt der Sues-Kanal in das Rote Meer. talien bildet im Mittelmeer eine große Halbinsel in Form eines Stiefels. Sie teilt das Mittelmeer in einen Ostteil und einen Westteil. ',
      image: '/assets/images/mediterean.avif',
    },
    {
      id: 'baltic',
      title: 'Baltisches Meer',
      text: 'Das Baltische Meer, hier auch Ostsee genannt, ist ein Meer im Norden von Europa. Es ist fast ganz von Ländern umgeben. Nur im Westen gibt es einen schmalen Meeresweg in die Nordsee. Das Wasser der Ostsee ist deutlich weniger salzig, denn aus den Flüssen erhält es viel Süßwasser.',
      image: '/assets/images/baltic4.avif',

    },
    {
      id: 'blacksea',
      title: 'Schwarzes Meer',
      text: 'Das Schwarze Meer liegt zwischen Europa und Asien. Es ist etwa so groß wie die Nordsee, aber viel tiefer, nämlich bis zu 2000 Meter tief. Es enthält viel weniger Salz als das Mittelmeer, weil viele Zuflüsse Süßwasser einbringen. Durch die Meerenge des Bosporus ist das Schwarze Meer im Südwesten mit dem Mittelmeer verbunden. Warum das Meer „schwarz“ heißt, weiß man nicht genau.',
      image: '/assets/images/blacksea.jpg',

    },
    {
      id: 'redsea',
      title: 'Rotes Meer',
      text: 'Das Rote Meer ist ein längliches Meer im Nahen Osten. Es ist ein Binnenmeer, das heißt, dass es zu einem großen Teil vom Festland umschlossen ist. Das Land auf beiden Seiten ist vor allem Wüste.Das Rote Meer liegt zwischen den beiden Kontinenten Afrika und Asien. Die große Halbinsel auf der asiatischen Seite heißt Arabien.Niemand weiß so recht, woher das Rote Meer seinen Namen hat.',
      image: '/assets/images/redsea2.avif',

    },
    {
      id: 'nordsee',
      title: 'Nordsee',
      text: 'Nordsee heißt das Meer nordwestlich von Deutschland. Die Nordsee ist 575.000 Quadratmeter groß, also größer als Frankreich. Allerdings ist sie nicht sehr tief, denn sie gehört noch zum Schelf, dem Meeresboden direkt am Kontinent Europa. Die tiefste Stelle liegt etwa 200 Meter unter dem Meeresspiegel, im Süden der Nordsee sind es höchstens 50 Meter.',
      image: '/assets/images/nordsee.avif',

    },
  ]

}
