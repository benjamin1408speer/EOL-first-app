import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { Content, ContentA } from '../models/content.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-bild',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './text-bild.html',
  styleUrl: './text-bild.css',
})
export class TextBild {
  [x: string]: any;
  route = inject(ActivatedRoute)
  myurl: UrlSegment[] = []

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



  ngOnInit() {
    this.fullUrl()
    let fupa = this.fullUrlArr()
    // console.log(' >>> Route für Text-Bild: ')
    // console.log(this.route.snapshot.url); // UrlSegment[]
    this.myurl = this.route.snapshot.url
    console.log('text-bild myurl:', this.myurl)

    // for (let i = 0; i < this.myurl.length; i++) {
    //   console.log(this.myurl[i])
    // }

    this.ocean = this.contents.find(ele => ele.id == this.myurl[1].path)

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



  onButtonClick(buttonNumber: number): void {
    console.log(`Button ${buttonNumber} wurde geklickt!`);
  }
}
