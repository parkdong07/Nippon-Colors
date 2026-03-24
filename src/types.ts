export interface JapaneseColor {
  name: string;
  kanji: string;
  romaji: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  cmyk: { c: number; m: number; y: number; k: number };
  category: string;
  description: string;
}

export interface ColorScheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  feeling: string;
  combinations: string;
  tips: string;
  imageUrl: string;
  imageCaption: string;
  colors: JapaneseColor[];
}

export type Category = 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'Nature' | 'Historical' | 'Schemes' | 'DataViz';

export type DataVizType = 'Sequential' | 'Diverging' | 'Qualitative';

export interface DataVizScheme {
  id: string;
  title: string;
  type: DataVizType;
  description: string;
  colors: JapaneseColor[];
}
