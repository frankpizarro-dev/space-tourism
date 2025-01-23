export interface TechnologyModel {
    order: number;
    name: string;
    description: string;
    imagePortrait: string;
    imageLandscape: string;
}

export enum ImageTechnologyType{
    Portrait = "PORTRAIT",
    Landscape = "LANDSCAPE"
}