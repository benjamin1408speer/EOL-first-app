export interface Content {
    id: number;
    title: string;
    text: string;
    image: string;
    menu: 
        {
            id: number;
            buttonTitle: string;
        } [],
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
    tiere?: string[],
    klimaText?: string,   
}

export interface ContentX {
    id: string;
    title: string;
    text: string;
    image: string;
    tiefen?: Tiefen; 
    tiere?: Tier[]    
}
export interface Tier {
    name: string;
    bild: string[];
}



export interface Tiefen {
    tiefe?: number,
    tiefeImage?: string,
    tiefeText?: string,

}