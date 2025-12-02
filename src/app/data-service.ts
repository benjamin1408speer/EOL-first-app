import { Injectable } from '@angular/core';
import { ContentA, Tier } from './models/content.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  GetAll() {
    return this.contents
  }

  GetOcean(ocean: string): ContentA | undefined {
    return this.contents.find(ele => ele.id == ocean)
  }


  contents: ContentA[] = [
    /*Id Ozeane */
    {
      id: 'pacific',
      title: 'Der Pazifik',
      text: 'Der Pazifische Ozean wird auch Stiller Ozean oder kurz Pazifik genannt und ist das größte der drei Weltmeere. Er liegt zwischen Asien und Australien im Westen und Amerika im Osten.Zusammen mit seinen Nebenmeeren ist er fast so groß wie alle anderen Meere der Erde zusammen.Außerdem ist er größer als alle Kontinente zusammen.',
      image: '/assets/images/monkeywave.jpg',
      tiefe: 10928 ,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Die tiefste Stelle im Pazifik ist das Challengertief im Marianengraben, mit einer Tiefe von etwa \(10.928\) Metern. Dieses Tiefseegebiet liegt westlich der Philippinen und ist die tiefste bekannte Stelle der Erde. Es herrschen dort extreme Bedingungen mit hohem Druck und Temperaturen nahe dem Gefrierpunkt, was die Forschung und Erkundung sehr schwierig macht.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Dreiflossenschleimfisch: Tiefe: 0-8 Meter Habitat: Küstennahe flache Gewässer, Gezeitentümpel, Felsenufer oder RiffplateausFarben: Alle Farben, von Rot, Gelb, Braun und Rosa, kommen vorBesonderheiten: Eine Unterart der Dreiflossenschleimfische lebt in Süßgewässern in Neuseeland', bilder: ['/assets/images/pazfisch1.jpg',] },
            { name: 'Walhai: Der Walhai ist der größte Hai und zugleich der größte Fisch der Gegenwart.Länge: 5,5 – 10 m. Der Walhai ist kein Raubtier,Sie ernähren sich ähnlich wie Riesenhaie und Riesenmaulhaie von Plankton, nektischen Kleinstlebewesen und kleinen Fischen, die sie durch Ansaugen des Wassers filtrieren.', bilder: ['/assets/images/pazwalhai.jpg'] },
            { name: 'Seepferdchen" kann sich auf zwei Dinge beziehen:eine Fischgattung mit pferdeähnlichem Kopf oder das Schwimmabzeichen für Frühschwimmer. Die Fische sind Knochenfische der Familie der Seenadeln, die sich durch einen Greifschwanz und einen knöchernen Panzer auszeichnen und die langsamsten Fische der Welt sind', bilder: ['/assets/images/pazpferd.jpg'] },
          ]
        },
        {
          name: 'voegel', tiere: [
            { name: 'Papageitaucher: Papageientaucher oder Puffin genannt.Sie brüten in Erdhöhlen an und auf Klippen oder an deren Fuß im Pazifik und im Nordatlantik sowie im westlichen Nordpolarmeer', bilder: ['/assets/images/pazpapa.webp'] },
            { name: 'Basstölpel: Der Basstölpel ist ein gänsegroßer Meeresvogel aus der Familie der Tölpel. Länge: 92 – 110 cm, Gewicht: 3 kg', bilder: ['/assets/images/pazbas.webp'] },
          ]
        },
        {
          name: 'sauge', tiere: [
            { name: 'Blauwal: Mit einer Körperlänge von bis zu 33 Metern und einer Körpermasse von bis zu 200 Tonnen ist der Blauwal eines der größten und schwersten bekannten Tiere der Erdgeschichte. Als Kosmopolit ist diese Art in allen Ozeanen der Erde verbreitet.Länge: 23 – 24 m, Lebenserwartung: 80 – 90 Jahre', bilder: ['/assets/images/pazblau.jpg'] },
            { name: 'Kalifornische Seelöwe: Der Kalifornische Seelöwe ist eine Ohrenrobbe, die an den nordamerikanischen Küsten des Pazifiks verbreitet ist. Größe. 180 bis 250 cm, Gewicht. 100 bis 350 kg', bilder: ['/assets/images/pazlowe.jpg'] },
          ]
        },
        {
        name: 'kruste', tiere: [
        { name: 'Langusten: Große, oft langgezogene Krustentiere mit kräftigen Antennen, die in vielen tropischen und subtropischen Meeren zu finden sind.', bilder: ['/assets/images/pazlangust.jpg'] },
        { name: 'Riesenkraken: Die größte Krake der Welt ist der Pazifische Riesenkrake. Er kann eine Armspannweite von bis zu neun Metern erreichen und bis zu 272 Kilogramm wiegen.', bilder: ['/assets/images/pazkrake.jpg'] },
        { name: 'Meeresschnecke: Als Meeresschnecken oder Meerschnecken werden jene Familien und Arten von Schnecken bezeichnet, die im Meer leben. ', bilder: ['/assets/images/pazschneck.webp'] },
        { name: 'Wer lebt unten im Meer in einer Ananas? Den gibt es aber nicht wirklich, oder?', bilder: ['/assets/images/pazsponge.jpg'] },
      ]
    },
    
    ],  klimaText: 'Das Klima im Pazifik ist überwiegend tropisch, mit warmen Wassertemperaturen von bis zu 31 Grad im Westpazifik und kühleren Temperaturen von etwa 20 Grad im Ostpazifik. Die Inseln haben ein meist tropisches Klima mit hoher Luftfeuchtigkeit und gleichbleibenden Temperaturen über das Jahr hinweg, während Neuseeland eine Ausnahme mit gemäßigtem Klima darstellt.',
        klimaImage: '/assets/images/pazklima.jpg',
  },

    {
      id: 'indic',
      title: 'Indischer Ozean',
      text: 'Der Indische Ozean ist das kleinste der Weltmeere. Er liegt zwischen Afrika im Westen, Asien im Norden und Australien im Osten. Nach Süden geht er in das Südpolarmeer über, das heute meist als Antarktischer Ozean bezeichnet wird. Benannt ist der Indische Ozean nach dem Land Indien. Es ragt wie ein Keil vom asiatischen Kontinent her in den Ozean hinein.',
      image: '/assets/images/manta.jpg',
      tiefe: 7290,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Als tiefste Stelle wird ein 7290 m tiefes Meerestief im Sundagraben angenommen. Vorher galt teilweise das Diamantinatief mit über 8000 m als tiefster Punkt, die Messungen identifizierten aber das Dordrechttief bei nur 7100 m als tiefsten Punkt der Diamantina Zone. Rund 1200 Kilometer südlich von Indien hat der Ozean eine Delle: Hier liegt der Wasserspiegel gut 100 Meter tiefer als im umliegenden Meer. Dies wird durch eine Schwerkraft-Anomalie ausgelöst',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Barrakuda: Der Kopf, die starren Augen und das Maul sind groß, der Unterkiefer überragt den Oberkiefer. Er ist mit besonders großen, in tiefen Zahnfächern sitzenden Fangzähnen besetzt. Barrakudas können, je nach Art, 23 Zentimeter bis zwei Meter lang werden.', bilder: ['/assets/images/indbara.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'Vogl', bilder: ['/assets/images/indpiep.avif'] },
          { name: 'Auch Vogl, aber anderer', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'crust', bilder: [] },
          { name: 'Qual', bilder: [] },
        ] },
      ], klimaText: 'Es ist irgendwie auch hier warm.',
          klimaImage: '/assets/images/pazklima.jpg',
    },
    {
      id: 'atlantic',
      title: 'Der Atlantik',
      text: 'Der Atlantik ist nach dem Pazifischen Ozean der zweitgrößte Ozean.Er befindet sich zwischen Amerika im Westen und Europa sowie Afrika im Osten.Weil der Atlantische Ozean so groß ist, gibt es Temperaturunterschiede zwischen verschiedenen Bereichen. In den Polargebieten ist das Wasser eher kalt, nahe am Äquator dagegen wärmer. Dadurch bietet der Atlantik viele verschiedene Lebensräume für sehr unterschiedliche Tierarten.',
      image: '/assets/images/krake.jpg',
      tiefe: 8400,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Die maximale Tiefe wird mit etwa 8.400 Metern im Milwaukeetief erreicht, einem Teil des Puerto-Rico-Grabens. Der Mittelatlantische Rücken überragt den Tiefseeboden um bis zu 3000 Meter und trennt die west- von der ostatlantischen Senke des Ozeans.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Der Dornhai ist ein Hai, der hauptsächlich in kühleren Gewässern weltweit vorkommt und sich durch die zwei Stacheln vor seinen Rückenflossen auszeichnet. Er ist für den Menschen nicht gefährlich, da er kein giftiges Fleisch hat und die Stacheln nur zur Abwehr dienen. Dornhaie sind stark von Überfischung bedroht, da sie sich nur langsam vermehren.', bilder: ['/assets/images/atlafisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'VoglA', bilder: [] },
          { name: 'VoglB', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Kneif', bilder: [] },
          { name: 'Schleimi', bilder: [] },
        ] },
      ],
      klimaText: 'Hier ist es nicht so warm, aber geht',
      klimaImage: '/assets/images/pazklima.jpg',
    },
    {
      id: 'arctic',
      title: 'Arktischer Ozean',
      text: 'Der Arktische Ozean ist das Meer in der Arktis. Es liegt zum Großteil unter dem Eis. Man nennt es auch Nordpolarmeer, Nördliches Eismeer, Arktische See oder Arktik. Er ist der kleinste Ozean der Erde. Er ist auch nur knapp 1000 Meter tief. Manche Leute zählen ihn zum Atlantik.Der Arktische Ozean grenzt an Asien, Europa und Nordamerika.',
      image: '/assets/images/polar.jpg',
      tiefe: 5551,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Die tiefste Stelle der Arktis liegt im Molloytief und ist nach neuesten Messungen 5.551 Meter tief. Der Arktische Ozean ist mit einer durchschnittlichen Tiefe von 987 Metern eher flach. Die Tiefe am geografischen Nordpol beträgt etwa 4.261 Meter',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Grönlandhai: Eine der größten Haiarten der Welt, die in arktischen Gewässern vorkommt und sehr alt werden kann.', bilder: ['/assets/images/arcticfisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'VoglA', bilder: [] },
          { name: 'VoglB', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Krebs', bilder: [] },
          { name: 'Schnecki', bilder: [] },
        ] },
      ],
      klimaText: 'Bitterkalt',
      klimaImage: '/assets/images/pazklima.jpg',
    },
    {
      id: 'antarctic',
      title: 'Antarktischer Ozean',
      text: 'Der Antarktische Ozean ist das Meer rund um das antarktische Festland herum. Die Grenze verläuft dort, wo das kalte Wasser auf das wärmere Wasser des Atlantiks, des Pazifiks und des Indischen Ozeans stößt. Diese Grenze verschiebt sich je nach Jahreszeit und liegt zwischen dem 40. und dem 60. Breitengrad. Der Antarktische Ozean hat verschiedene Namen: Südlicher Ozean, Südpolarmeer oder Südliches Eismeer.Im Winter frieren große Teile zu. ',
      image: '/assets/images/penguin.webp',
      tiefe: 7235,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Die Tiefe der Antarktis variiert stark: Der Eispanzer ist im Durchschnitt etwa 2.126 Meter dick, kann aber stellenweise bis zu 4.897 Meter erreichen. Unter dem Eis liegt fester Landmasse, deren tiefster Punkt sich in einem Canyon befindet, der 3.500 Meter unter der Eisoberfläche liegt. In den Ozeanen rund um den Kontinent gibt es weitere Tiefen, beispielsweise die Süd-Sandwich-Rinne mit 7.235 Metern Tiefe.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Antarktis-Fische haben sich an die extrem kalten Bedingungen angepasst, indem sie unter anderem gefrierschutzproteine in ihrem Blut produzieren.  Bekannte Familien sind die Eisfische, die eine besondere Anpassung mit farblosem Blut aufweisen.', bilder: ['/assets/images/antfisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'Piepvogl', bilder: [] },
          { name: 'Kackvogl', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Tiefseefrosch', bilder: [] },
          { name: 'What?', bilder: [] },
        ] },
      ],
      klimaText: 'Zu kalt um zu schwimmen',
      klimaImage: '/assets/images/pazklima.jpg',
    },


    {
      id: 'mittelmeer',
      title: 'Mittelmeer',
      text: 'Das Mittelmeer ist das Meer zwischen Europa und Afrika. Im Westen kann man mit einem Schiff in den Atlantischen Ozean fahren, über eine Meerenge, die Straße von Gibraltar. Im Osten geht es durch die Dardanellen und den Bosporus in das Schwarze Meer. In Ägypten führt der Sues-Kanal in das Rote Meer. talien bildet im Mittelmeer eine große Halbinsel in Form eines Stiefels. Sie teilt das Mittelmeer in einen Ostteil und einen Westteil. ',
      image: '/assets/images/mediterean.avif',
      tiefe: 5109,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Im Calypsotief (westlich des Peloponnes) erreicht es eine maximale Tiefe von 5109 Metern. Die durchschnittliche Wassertiefe liegt bei rund 1430 Metern.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Muränen sind eine Familie aalartiger Knochenfische, die mit etwa 200 bisher bekannten Arten in flachen tropischen und subtropischen Meeren verbreitet sind. An den Küsten des südlichen Europa leben zwei Arten: die Mittelmeer-Muräne und die Braune Muräne.', bilder: ['/assets/images/mittelfisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'VoglA', bilder: [] },
            { name: 'VoglB', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Kneifer', bilder: [] },
            { name: 'Schwabbel', bilder: [] },] },
      ],
      klimaText: 'Es ist Badeklima',
      klimaImage: '/assets/images/pazklima.jpg',
    },
    {
      id: 'baltic',
      title: 'Baltisches Meer',
      text: 'Das Baltische Meer, hier auch Ostsee genannt, ist ein Meer im Norden von Europa. Es ist fast ganz von Ländern umgeben. Nur im Westen gibt es einen schmalen Meeresweg in die Nordsee. Das Wasser der Ostsee ist deutlich weniger salzig, denn aus den Flüssen erhält es viel Süßwasser.',
      image: '/assets/images/baltic4.avif',
      tiefe: 459,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'ie durchschnittliche Tiefe der Ostsee beträgt etwa 55 Meter, mit dem Landsorttief vor der schwedischen Küste als tiefsten Punkt mit 459 Metern.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Der Hering ist einer der am häufigsten vorkommenden Fische der Welt und lebt in riesigen Schwärmen. Die Bestände sind dementsprechend groß. Trotzdem hat die Bedeutung des Herings als Speisefisch in einigen Fanggebieten zu Überfischung geführt.', bilder: ['/assets/images/baltfisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'VOGLA', bilder: [] },
            { name: 'VOGLB', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Krabbe', bilder: [] },
            { name: 'Qualle', bilder: [] },
        ] },
      ],
      klimaText: 'Kühl, nicht so salzig',
      klimaImage: '/assets/images/pazklima.jpg',
    },

    {
      id: 'blacksea',
      title: 'Schwarzes Meer',
      text: 'Das Schwarze Meer liegt zwischen Europa und Asien. Es ist etwa so groß wie die Nordsee, aber viel tiefer, nämlich bis zu 2000 Meter tief. Es enthält viel weniger Salz als das Mittelmeer, weil viele Zuflüsse Süßwasser einbringen. Durch die Meerenge des Bosporus ist das Schwarze Meer im Südwesten mit dem Mittelmeer verbunden. Warum das Meer „schwarz“ heißt, weiß man nicht genau.',
      image: '/assets/images/blacksea.jpg',
      tiefe: 2212,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Die tiefste Stelle des Schwarzen Meeres liegt bei 2.212 m unter der Wasseroberfläche. Das Schwarze Meer verfügt über ein Wasservolumen von ca. 547.000 km³.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Im Schwarzen Meer gibt es giftige Fische wie das Petermännchen, das giftige Stacheln besitzt, die bei Berührung starke Schmerzen verursachen können. Außerdem haben sich invasive, giftige Arten wie der Silberpufferschnapper durch die Erwärmung der Meere aus dem Roten Meer dort ausgebreitet.', bilder: ['/assets/images/blackfisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'PiepA', bilder: [] },
            { name: 'MatzB', bilder: [] },
        ] },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Krabbel', bilder: [] },
            { name: 'Schleimspur', bilder: [] },
        ] },
      ],
      klimaText: 'Keine Ahnung, teils recht schön warm, denke ich',
      klimaImage: '/assets/images/pazklima.jpg',
    },

    {
      id: 'redsea',
      title: 'Rotes Meer',
      text: 'Das Rote Meer ist ein längliches Meer im Nahen Osten. Es ist ein Binnenmeer, das heißt, dass es zu einem großen Teil vom Festland umschlossen ist. Das Land auf beiden Seiten ist vor allem Wüste.Das Rote Meer liegt zwischen den beiden Kontinenten Afrika und Asien. Die große Halbinsel auf der asiatischen Seite heißt Arabien.Niemand weiß so recht, woher das Rote Meer seinen Namen hat.',
      image: '/assets/images/redsea2.avif',
      tiefe: 3040,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Im Norden verbindet der Suezkanal das Rote Meer mit dem Mittelmeer, im Süden ist es durch den Golf von Aden mit dem Indischen Ozean verbunden. Insgesamt zehn Länder grenzen an das bis zu 2604 m tiefe Meer, wenn nicht Moses kommt, dann ist es flacher.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Rotmeer-Anemonenfische sind nach Erreichen der Geschlechtsreife zunächst männlich. Sie leben in Polyandrie, ein Weibchen mit mehreren Männchen, in einer oder einer kleinen Gruppe von Anemonen.', bilder: ['/assets/images/rednemo.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'Fliegding', bilder: [] },
            { name: 'Schwimmding', bilder: [] },
        ] 
      },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Sponge', bilder: [] },
            { name: 'Bob', bilder: [] },
        ] 
      },
      ],
      klimaText: 'Es ist warm, finden auch die Haie',
      klimaImage: '/assets/images/pazklima.jpg',
    },

    {
      id: 'nordsee',
      title: 'Nordsee',
      text: 'Nordsee heißt das Meer nordwestlich von Deutschland. Die Nordsee ist 575.000 Quadratmeter groß, also größer als Frankreich. Allerdings ist sie nicht sehr tief, denn sie gehört noch zum Schelf, dem Meeresboden direkt am Kontinent Europa. Die tiefste Stelle liegt etwa 200 Meter unter dem Meeresspiegel, im Süden der Nordsee sind es höchstens 50 Meter.',
      image: '/assets/images/nordsee.avif',
      tiefe: 700,
      tiefeImage: '/assets/images/pelagic.jpg',
      tiefeText: 'Die Nordsee ist ein relativ flaches Schelfmeer auf dem nordwesteuropäischen Kontinentalschelf. Die durchschnittliche Wassertiefe beträgt 95 Meter . Die südliche Nordsee ist mit Wassertiefen von etwa 15–30 Metern deutlich flacher als der Norwegische Graben, der über 700 Meter tief ist. Bei Ebbe ist es mancherorts flacher.',
      tierartenText: 'Hier findest du die verschiedenen Tiere, welche sich so in den Ozeanen, oder darüber und darauf so tummeln. Dazu eine kurze Beschreibung über dieselben, wer sie sind und was für Sachen sie so machen.',
      tierartenimage: '/assets/images/fischi.jpg',
      tierarten: [
        {
          name: 'fische', tiere: [
            { name: 'Eine "Scholle" kann verschiedene Bedeutungen haben: ein Plattfisch, der auch „Goldbutt“ genannt wird, ein flaches Stück Erde oder ein Stück Eis. Der Fisch ist ein beliebter Speisefisch, der in den europäischen Meeren wie der Nord- und Ostsee vorkommt', bilder: ['/assets/images/nordfisch.jpg'] },
            { name: 'fischB', bilder: [] },
          ]
        },
        { name: 'voegel', tiere: [
          { name: 'VOGL', bilder: [] },
            { name: 'Vogl auch', bilder: [] },
        ] 
      },
        {
          name: 'sauge', tiere: [
            { name: 'saugA', bilder: [] },
            { name: 'saugB', bilder: [] },
          ]
        },
        { name: 'kruste', tiere: [
          { name: 'Krusty', bilder: [] },
            { name: 'Clown', bilder: [] },
        ] 
      },
      ],
      klimaText: 'Mir zu kühl',
      klimaImage: '/assets/images/pazklima.jpg',
    },



  ]


}
