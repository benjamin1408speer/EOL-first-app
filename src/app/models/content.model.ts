export interface Content {
    id: number;
    title: string;
    text: string;
    image: string;
    menu:
    {
        id: number;
        buttonTitle: string;
    }[],
    tiefe?: number,
    tiefeImage?: string,
    tiefeText?: string

}

export interface ContentA {
    id: string;
    title: string;
    text: string;
    image: string;
    tiefe?: number,
    tiefeImage?: string,
    tiefeText?: string,
    tierartenText?: string,
    tierartenimage?: string,
    tierarten?: Tierart[],
    klimaText?: string,
    klimaImage?: string,
}

export interface Tierart {
    name: string;
    tiere: Tier[]
}

export interface Tier {
    name: string;
    bilder: string[];
}

export interface Tiefen {
    tiefe?: number,
    tiefeImage?: string,
    tiefeText?: string,

}

export interface Klima {
    klimaImage?: string,
    klimaText?: string,
}