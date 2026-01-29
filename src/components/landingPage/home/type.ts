import { StaticImageData } from "next/image";

export interface CardDataTypes {
    icon: StaticImageData,
    title: string,
    description: string
}

export interface SlideDataType {
    icon: StaticImageData | string;
    title: string;
    description: string;
    text: string;
}

export interface LearningCardType {
    Image: StaticImageData | string,
    title: string,
    price: string,

}