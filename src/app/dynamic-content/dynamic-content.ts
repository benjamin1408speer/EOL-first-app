import { Component, inject, Input, OnInit } from '@angular/core';
import { Content } from '../models/content.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dynamic-content',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,

  ],
  templateUrl: './dynamic-content.html',
  styleUrl: './dynamic-content.css',
})
export class DynamicContent implements OnInit {

  generalInfo: string = ''

  @Input({ required: true }) id: number = 0;
  selectedContent!: Content
  router = inject(Router)
  route = inject(ActivatedRoute)
  selectedMeerOzean!: string

  menuOzean = [
    {
      id: 1,
      buttonTitle: 'Tierarten',

    },
    {
      id: 2,
      buttonTitle: 'Tiefenbeschreibung'
    },
    {
      id: 3,
      buttonTitle: 'Klima/Umwelt'
    },

  ]

  menuMeer = [
    {
      id: 1,
      buttonTitle: 'Tierarten'
    },
    {
      id: 2,
      buttonTitle: 'Tiefenbeschreibung'
    },
    {
      id: 3,
      buttonTitle: 'Klima/Umwelt'
    },

  ]
  menuTierarten = [
    {
      id: 1,
      buttonTitle: 'Fische'
    },
    {
      id: 2,
      buttonTitle: 'Säugetiere'
    },
    {
      id: 3,
      buttonTitle: 'Vögel'
    },
    {
      id: 4,
      buttonTitle: 'Krusten/ Weichtiere'
    },

  ]
  menutiefen = [

  ]

  contents: Content[] = [
    /*Id Ozeane */
    {
      id: 1,
      title: 'Der Pazifik',
      text: 'Der Pazifische Ozean wird auch Stiller Ozean oder kurz Pazifik genannt und ist das größte der drei Weltmeere. Er liegt zwischen Asien und Australien im Westen und Amerika im Osten.Zusammen mit seinen Nebenmeeren ist er fast so groß wie alle anderen Meere der Erde zusammen.Außerdem ist er größer als alle Kontinente zusammen.',
      image: '/assets/images/monkeywave.jpg',
      menu: this.menuOzean,
      tiefe: 3333,
      tiefeImage: '',
      tiefeText: 'Dies ist ein sehr tiefer Ozean!',

    },
    {
      id: 2,
      title: 'Indischer Ozean',
      text: 'Der Indische Ozean ist das kleinste der Weltmeere. Er liegt zwischen Afrika im Westen, Asien im Norden und Australien im Osten. Nach Süden geht er in das Südpolarmeer über, das heute meist als Antarktischer Ozean bezeichnet wird. Benannt ist der Indische Ozean nach dem Land Indien. Es ragt wie ein Keil vom asiatischen Kontinent her in den Ozean hinein.',
      image: '/assets/images/manta.jpg',
      menu: this.menuOzean
    },
    {
      id: 3,
      title: 'Der Atlantik',
      text: 'Der Atlantik ist nach dem Pazifischen Ozean der zweitgrößte Ozean.Er befindet sich zwischen Amerika im Westen und Europa sowie Afrika im Osten.Weil der Atlantische Ozean so groß ist, gibt es Temperaturunterschiede zwischen verschiedenen Bereichen. In den Polargebieten ist das Wasser eher kalt, nahe am Äquator dagegen wärmer. Dadurch bietet der Atlantik viele verschiedene Lebensräume für sehr unterschiedliche Tierarten.',
      image: '/assets/images/krake.jpg',
      menu: this.menuOzean
    },
    {
      id: 4,
      title: 'Arktischer Ozean',
      text: 'Der Arktische Ozean ist das Meer in der Arktis. Es liegt zum Großteil unter dem Eis. Man nennt es auch Nordpolarmeer, Nördliches Eismeer, Arktische See oder Arktik. Er ist der kleinste Ozean der Erde. Er ist auch nur knapp 1000 Meter tief. Manche Leute zählen ihn zum Atlantik.Der Arktische Ozean grenzt an Asien, Europa und Nordamerika.',
      image: '/assets/images/polar.jpg',
      menu: this.menuOzean
    },
    {
      id: 5,
      title: 'Antarktischer Ozean',
      text: 'Der Antarktische Ozean ist das Meer rund um das antarktische Festland herum. Die Grenze verläuft dort, wo das kalte Wasser auf das wärmere Wasser des Atlantiks, des Pazifiks und des Indischen Ozeans stößt. Diese Grenze verschiebt sich je nach Jahreszeit und liegt zwischen dem 40. und dem 60. Breitengrad. Der Antarktische Ozean hat verschiedene Namen: Südlicher Ozean, Südpolarmeer oder Südliches Eismeer.Im Winter frieren große Teile zu. ',
      image: '/assets/images/penguin.webp',
      menu: this.menuOzean
    },
    /* ID Meere */
    {
      id: 6,
      title: 'Mittelmeer',
      text: 'Das Mittelmeer ist das Meer zwischen Europa und Afrika. Im Westen kann man mit einem Schiff in den Atlantischen Ozean fahren, über eine Meerenge, die Straße von Gibraltar. Im Osten geht es durch die Dardanellen und den Bosporus in das Schwarze Meer. In Ägypten führt der Sues-Kanal in das Rote Meer. talien bildet im Mittelmeer eine große Halbinsel in Form eines Stiefels. Sie teilt das Mittelmeer in einen Ostteil und einen Westteil. ',
      image: '/assets/images/mediterean.avif',
      menu: this.menuMeer
    },
    {
      id: 7,
      title: 'Baltisches Meer',
      text: 'Das Baltische Meer, hier auch Ostsee genannt, ist ein Meer im Norden von Europa. Es ist fast ganz von Ländern umgeben. Nur im Westen gibt es einen schmalen Meeresweg in die Nordsee. Das Wasser der Ostsee ist deutlich weniger salzig, denn aus den Flüssen erhält es viel Süßwasser.',
      image: '/assets/images/baltic4.avif',
      menu: this.menuMeer
    },
    {
      id: 8,
      title: 'Schwarzes Meer',
      text: 'Das Schwarze Meer liegt zwischen Europa und Asien. Es ist etwa so groß wie die Nordsee, aber viel tiefer, nämlich bis zu 2000 Meter tief. Es enthält viel weniger Salz als das Mittelmeer, weil viele Zuflüsse Süßwasser einbringen. Durch die Meerenge des Bosporus ist das Schwarze Meer im Südwesten mit dem Mittelmeer verbunden. Warum das Meer „schwarz“ heißt, weiß man nicht genau.',
      image: '/assets/images/blacksea.jpg',
      menu: this.menuMeer
    },
    {
      id: 9,
      title: 'Rotes Meer',
      text: 'Das Rote Meer ist ein längliches Meer im Nahen Osten. Es ist ein Binnenmeer, das heißt, dass es zu einem großen Teil vom Festland umschlossen ist. Das Land auf beiden Seiten ist vor allem Wüste.Das Rote Meer liegt zwischen den beiden Kontinenten Afrika und Asien. Die große Halbinsel auf der asiatischen Seite heißt Arabien.Niemand weiß so recht, woher das Rote Meer seinen Namen hat.',
      image: '/assets/images/redsea2.avif',
      menu: this.menuMeer
    },
    {
      id: 10,
      title: 'Nordsee',
      text: 'Nordsee heißt das Meer nordwestlich von Deutschland. Die Nordsee ist 575.000 Quadratmeter groß, also größer als Frankreich. Allerdings ist sie nicht sehr tief, denn sie gehört noch zum Schelf, dem Meeresboden direkt am Kontinent Europa. Die tiefste Stelle liegt etwa 200 Meter unter dem Meeresspiegel, im Süden der Nordsee sind es höchstens 50 Meter.',
      image: '/assets/images/nordsee.avif',
      menu: this.menuMeer
    },
    /* ID Tierarten */
    {
      id: 11,
      title: 'Tierarten',
      text: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      image: '/assets/images/fischi.jpg',
      menu: this.menuTierarten
    },
    {
      id: 12,
      title: 'Tiefenbeschreibung',
      text: '',
      image: '/assets/images/nordsee.avif',
      menu: this.menutiefen

    },
    {
      id: 13,
      title: '',
      text: '',
      image: '/assets/images/nordsee.avif',
      menu: this.menuTierarten
    },

  ];


  ngOnInit(): void {
    this.selectedContent = this.contents[this.id - 1];
    // this.selectedContent = this.contents.find(arrele => arrele.id == this.id)
    // if(this.selectedContent == undefined){
    //   this.selectedContent = this.contents[0]
    // }
  }



  onButtonClick(buttonText: string): void {
    console.log(`Button ${buttonText} wurde geklickt!`);
  }

  onTierartenClick(id: number) {

    if (id == 1) {
      this.router.navigate(['oceans/pacific/tierarten'])
    }
    if (id == 2) {
      this.router.navigate(['oceans/indic/tierarten'])
    }
    if (id == 3) {
      this.router.navigate(['oceans/atlantic/tierarten'])
    }
    if (id == 4) {
      this.router.navigate(['oceans/arctic/tierarten'])
    }
    if (id == 5) {
      this.router.navigate(['oceans/antarctic/tierarten'])
    }
    if (id == 6) {
      this.router.navigate(['seas/mittelmeer/tierarten'])
    }
    if (id == 7) {
      this.router.navigate(['seas/baltic/tierarten'])
    }
    if (id == 8) {
      this.router.navigate(['seas/blacksea/tierarten'])
    }
    if (id == 9) {
      this.router.navigate(['seas/redsea/tierarten'])
    }
    if (id == 10) {
      this.router.navigate(['seas/nordsee/tierarten'])
    }
  }

  onTiefenbeschreibungClick(id: number) {

    if (id == 1) {
      this.router.navigate(['oceans/pacific/tiefen'])
    }
    if (id == 2) {
      this.router.navigate(['oceans/indic/tiefen'])
    }
    if (id == 3) {
      this.router.navigate(['oceans/atlantic/tiefen'])
    }
    if (id == 4) {
      this.router.navigate(['oceans/arctic/tiefen'])
    }
    if (id == 5) {
      this.router.navigate(['oceans/antarctic/tiefen'])
    }
    if (id == 6) {
      this.router.navigate(['seas/mittelmeer/tiefen'])
    }
    if (id == 7) {
      this.router.navigate(['seas/baltic/tiefen'])
    }
    if (id == 8) {
      this.router.navigate(['seas/blacksea/tiefen'])
    }
    if (id == 9) {
      this.router.navigate(['seas/redsea/tiefen'])
    }
    if (id == 10) {
      this.router.navigate(['seas/nordsee/tiefen'])
    }
  }
  onKlimaClick(id: number) {

    if (id == 1) {
      this.router.navigate(['oceans/pacific/klima'])
    }
    if (id == 2) {
      this.router.navigate(['oceans/indic/klima'])
    }
    if (id == 3) {
      this.router.navigate(['oceans/atlantic/klima'])
    }
    if (id == 4) {
      this.router.navigate(['oceans/arctic/klima'])
    }
    if (id == 5) {
      this.router.navigate(['oceans/antarctic/klima'])
    }
    if (id == 6) {
      this.router.navigate(['seas/mittelmeer/klima'])
    }
    if (id == 7) {
      this.router.navigate(['seas/baltic/klima'])
    }
    if (id == 8) {
      this.router.navigate(['seas/blacksea/klima'])
    }
    if (id == 9) {
      this.router.navigate(['seas/redsea/klima'])
    }
    if (id == 10) {
      this.router.navigate(['seas/nordsee/klima'])
    }

  }

}
