import { StaticImageData } from 'next/image';

export interface cardData {
  id: number;
  image: StaticImageData;
  icon: StaticImageData;
  headline: string;
  courseType: string;
  category: string;
}
