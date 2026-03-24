import { JapaneseColor, ColorScheme, DataVizScheme } from './types';

export const DATA_VIZ_SCHEMES: DataVizScheme[] = [
  {
    id: "dv-001",
    title: "Indigo Depths",
    type: "Sequential",
    description: "A sequential blue palette ranging from the pale 'Nozoki-iro' (a glimpse of the pot) to the deep 'Nasukon' (eggplant navy). Ideal for representing increasing intensity or depth.",
    colors: [
      {
        name: "Nozoki-iro",
        kanji: "覗色",
        romaji: "Nozoki-iro",
        hex: "#A1D7DD",
        rgb: { r: 162, g: 215, b: 221 },
        cmyk: { c: 40, m: 0, y: 15, k: 0 },
        category: "DataViz",
        description: "Pale indigo."
      },
      {
        name: "Kura-iro",
        kanji: "蔵色",
        romaji: "Kura-iro",
        hex: "#007D8D",
        rgb: { r: 0, g: 125, b: 142 },
        cmyk: { c: 82, m: 0, y: 25, k: 40 },
        category: "DataViz",
        description: "Medium indigo."
      },
      {
        name: "Nasukon",
        kanji: "茄子紺",
        romaji: "Nasukon",
        hex: "#4A1A46",
        rgb: { r: 75, g: 26, b: 71 },
        cmyk: { c: 40, m: 73, y: 0, k: 70 },
        category: "DataViz",
        description: "Deep navy."
      }
    ]
  },
  {
    id: "dv-002",
    title: "Crimson Bloom",
    type: "Sequential",
    description: "A sequential red palette from soft coral to deep madder red. Perfect for heatmaps or density visualizations.",
    colors: [
      {
        name: "Sango-iro",
        kanji: "珊瑚色",
        romaji: "Sango-iro",
        hex: "#F3ACA3",
        rgb: { r: 244, g: 173, b: 163 },
        cmyk: { c: 0, m: 42, y: 28, k: 0 },
        category: "DataViz",
        description: "Coral pink."
      },
      {
        name: "Kurenai",
        kanji: "唐紅",
        romaji: "Kurenai",
        hex: "#E95364",
        rgb: { r: 233, g: 84, b: 100 },
        cmyk: { c: 0, m: 80, y: 45, k: 0 },
        category: "DataViz",
        description: "Chinese red."
      },
      {
        name: "Akane-iro",
        kanji: "茜色",
        romaji: "Akane-iro",
        hex: "#B7272D",
        rgb: { r: 183, g: 40, b: 45 },
        cmyk: { c: 0, m: 90, y: 70, k: 30 },
        category: "DataViz",
        description: "Madder red."
      }
    ]
  },
  {
    id: "dv-003",
    title: "Fire & Ice",
    type: "Diverging",
    description: "A diverging palette with a neutral center, moving from warm madder red to cool indigo. Useful for showing deviation from a mean.",
    colors: [
      {
        name: "Akane-iro",
        kanji: "茜色",
        romaji: "Akane-iro",
        hex: "#B7272D",
        rgb: { r: 183, g: 40, b: 45 },
        cmyk: { c: 0, m: 90, y: 70, k: 30 },
        category: "DataViz",
        description: "Madder red (Low)."
      },
      {
        name: "Nyuhaku-shoku",
        kanji: "乳白色",
        romaji: "Nyuhaku-shoku",
        hex: "#FDECDE",
        rgb: { r: 253, g: 237, b: 223 },
        cmyk: { c: 0, m: 10, y: 13, k: 0 },
        category: "DataViz",
        description: "Milky white (Mid)."
      },
      {
        name: "Kura-iro",
        kanji: "蔵色",
        romaji: "Kura-iro",
        hex: "#007D8D",
        rgb: { r: 0, g: 125, b: 142 },
        cmyk: { c: 82, m: 0, y: 25, k: 40 },
        category: "DataViz",
        description: "Indigo (High)."
      }
    ]
  },
  {
    id: "dv-004",
    title: "Imperial Garden",
    type: "Qualitative",
    description: "A set of distinct, balanced colors for categorical data. Each color is easily distinguishable from the others.",
    colors: [
      {
        name: "Kurenai",
        kanji: "唐紅",
        romaji: "Kurenai",
        hex: "#E95364",
        rgb: { r: 233, g: 84, b: 100 },
        cmyk: { c: 0, m: 80, y: 45, k: 0 },
        category: "DataViz",
        description: "Red."
      },
      {
        name: "Yamabuki-iro",
        kanji: "山吹色",
        romaji: "Yamabuki-iro",
        hex: "#F8B500",
        rgb: { r: 248, g: 181, b: 0 },
        cmyk: { c: 0, m: 35, y: 100, k: 0 },
        category: "DataViz",
        description: "Yellow."
      },
      {
        name: "Usu-midori",
        kanji: "淡緑",
        romaji: "Usu-midori",
        hex: "#5BAC4B",
        rgb: { r: 92, g: 173, b: 75 },
        cmyk: { c: 63, m: 0, y: 85, k: 10 },
        category: "DataViz",
        description: "Green."
      },
      {
        name: "Kura-iro",
        kanji: "蔵色",
        romaji: "Kura-iro",
        hex: "#007D8D",
        rgb: { r: 0, g: 125, b: 142 },
        cmyk: { c: 82, m: 0, y: 25, k: 40 },
        category: "DataViz",
        description: "Blue."
      },
      {
        name: "Budōshu-iro",
        kanji: "葡萄酒色",
        romaji: "Budōshu-iro",
        hex: "#9E2058",
        rgb: { r: 159, g: 33, b: 88 },
        cmyk: { c: 35, m: 95, y: 40, k: 15 },
        category: "DataViz",
        description: "Purple."
      }
    ]
  },
  {
    id: "dv-005",
    title: "Golden Fields",
    type: "Sequential",
    description: "A warm sequential palette from 'Nyuhaku-shoku' (milky white) to 'Shinsha' (cinnabar red). Ideal for representing growth, warmth, or increasing value.",
    colors: [
      {
        name: "Nyuhaku-shoku",
        kanji: "乳白色",
        romaji: "Nyuhaku-shoku",
        hex: "#FDECDE",
        rgb: { r: 253, g: 237, b: 223 },
        cmyk: { c: 0, m: 10, y: 13, k: 0 },
        category: "DataViz",
        description: "Milky white."
      },
      {
        name: "Anzu-iro",
        kanji: "杏色",
        romaji: "Anzu-iro",
        hex: "#F7B877",
        rgb: { r: 247, g: 185, b: 119 },
        cmyk: { c: 0, m: 35, y: 55, k: 0 },
        category: "DataViz",
        description: "Apricot."
      },
      {
        name: "Shinsha",
        kanji: "辰砂",
        romaji: "Shinsha",
        hex: "#E94708",
        rgb: { r: 233, g: 71, b: 9 },
        cmyk: { c: 0, m: 85, y: 100, k: 0 },
        category: "DataViz",
        description: "Cinnabar."
      }
    ]
  },
  {
    id: "dv-006",
    title: "Forest Moss",
    type: "Sequential",
    description: "A natural sequential green palette. Ranges from the pale 'Wakatake-iro' to the deep 'Tokiwa-iro'. Perfect for environmental data or sustainability metrics.",
    colors: [
      {
        name: "Wakatake-iro",
        kanji: "若竹色",
        romaji: "Wakatake-iro",
        hex: "#67BD8C",
        rgb: { r: 103, g: 189, b: 140 },
        cmyk: { c: 55, m: 0, y: 55, k: 0 },
        category: "DataViz",
        description: "Young bamboo."
      },
      {
        name: "Usu-midori",
        kanji: "淡緑",
        romaji: "Usu-midori",
        hex: "#5BAC4B",
        rgb: { r: 92, g: 173, b: 75 },
        cmyk: { c: 63, m: 0, y: 85, k: 10 },
        category: "DataViz",
        description: "Pale green."
      },
      {
        name: "Tokiwa-iro",
        kanji: "常磐色",
        romaji: "Tokiwa-iro",
        hex: "#007C45",
        rgb: { r: 0, g: 124, b: 69 },
        cmyk: { c: 85, m: 25, y: 85, k: 15 },
        category: "DataViz",
        description: "Evergreen."
      }
    ]
  },
  {
    id: "dv-007",
    title: "Twilight Horizon",
    type: "Diverging",
    description: "A diverging palette moving from the deep 'Edo-murasaki' (purple) through a neutral gray to the vibrant 'Yamabuki-iro' (yellow). Great for contrasting two distinct categories.",
    colors: [
      {
        name: "Edo-murasaki",
        kanji: "江戸紫",
        romaji: "Edo-murasaki",
        hex: "#724E94",
        rgb: { r: 115, g: 78, b: 149 },
        cmyk: { c: 60, m: 72, y: 0, k: 12 },
        category: "DataViz",
        description: "Edo purple."
      },
      {
        name: "Shironezumi",
        kanji: "白鼠",
        romaji: "Shironezumi",
        hex: "#E5E6E6",
        rgb: { r: 230, g: 230, b: 230 },
        cmyk: { c: 0, m: 0, y: 0, k: 15 },
        category: "DataViz",
        description: "White mouse (Gray)."
      },
      {
        name: "Yamabuki-iro",
        kanji: "山吹色",
        romaji: "Yamabuki-iro",
        hex: "#F8B500",
        rgb: { r: 248, g: 181, b: 0 },
        cmyk: { c: 0, m: 35, y: 100, k: 0 },
        category: "DataViz",
        description: "Kerria yellow."
      }
    ]
  },
  {
    id: "dv-008",
    title: "Seasonal Harmony",
    type: "Qualitative",
    description: "An expanded qualitative palette featuring 8 distinct colors representing the diversity of Japanese seasons and crafts.",
    colors: [
      {
        name: "Kurenai",
        kanji: "唐紅",
        romaji: "Kurenai",
        hex: "#E95364",
        rgb: { r: 233, g: 84, b: 100 },
        cmyk: { c: 0, m: 80, y: 45, k: 0 },
        category: "DataViz",
        description: "Red."
      },
      {
        name: "Yamabuki-iro",
        kanji: "山吹色",
        romaji: "Yamabuki-iro",
        hex: "#F8B500",
        rgb: { r: 248, g: 181, b: 0 },
        cmyk: { c: 0, m: 35, y: 100, k: 0 },
        category: "DataViz",
        description: "Yellow."
      },
      {
        name: "Usu-midori",
        kanji: "淡緑",
        romaji: "Usu-midori",
        hex: "#5BAC4B",
        rgb: { r: 92, g: 173, b: 75 },
        cmyk: { c: 63, m: 0, y: 85, k: 10 },
        category: "DataViz",
        description: "Green."
      },
      {
        name: "Kura-iro",
        kanji: "蔵色",
        romaji: "Kura-iro",
        hex: "#007D8D",
        rgb: { r: 0, g: 125, b: 142 },
        cmyk: { c: 82, m: 0, y: 25, k: 40 },
        category: "DataViz",
        description: "Blue."
      },
      {
        name: "Budōshu-iro",
        kanji: "葡萄酒色",
        romaji: "Budōshu-iro",
        hex: "#9E2058",
        rgb: { r: 159, g: 33, b: 88 },
        cmyk: { c: 35, m: 95, y: 40, k: 15 },
        category: "DataViz",
        description: "Purple."
      },
      {
        name: "Anzu-iro",
        kanji: "杏色",
        romaji: "Anzu-iro",
        hex: "#F7B877",
        rgb: { r: 247, g: 185, b: 119 },
        cmyk: { c: 0, m: 35, y: 55, k: 0 },
        category: "DataViz",
        description: "Orange."
      },
      {
        name: "Byakugun",
        kanji: "白群",
        romaji: "Byakugun",
        hex: "#ADD3EC",
        rgb: { r: 173, g: 211, b: 236 },
        cmyk: { c: 30, m: 5, y: 0, k: 0 },
        category: "DataViz",
        description: "Light Blue."
      },
      {
        name: "Kuro-nezumi",
        kanji: "黒鼠",
        romaji: "Kuro-nezumi",
        hex: "#29211F",
        rgb: { r: 41, g: 33, b: 31 },
        cmyk: { c: 65, m: 70, y: 70, k: 75 },
        category: "DataViz",
        description: "Black."
      }
    ]
  }
];

export const SCHEMES: ColorScheme[] = [
  {
    id: "001",
    title: "Kimono Patterns for Children",
    subtitle: "Classical patterns in bold, graphical arrangements",
    description: "Children's kimonos feature classical patterns in bold, graphical arrangements. From these, nine colors have been extracted to create a palette in keeping with the traditional names used for these colors. When considering color schemes, it's most practical to combine two or three colors, but if you're using more than that, be sure it's clear which is the main or dominant color.",
    feeling: "Cheerful, gorgeous, pretty.",
    combinations: "Combine colors with a focus on warm, bright shades.",
    tips: "Use small amounts of pale blue and green as accent colors.",
    imageUrl: "https://picsum.photos/seed/kimono/800/600",
    imageCaption: "A pattern arranged in a contemporary style for use on occasions such as the Shichi-Go-San Festival (the celebration of a child's third, fifth and seventh years).",
    colors: [
      {
        name: "Chinese Red (JIS)",
        kanji: "唐紅",
        romaji: "Kurenai",
        hex: "#E95364",
        rgb: { r: 233, g: 84, b: 100 },
        cmyk: { c: 0, m: 80, y: 45, k: 0 },
        category: "Schemes",
        description: "The word for this color in Japanese (kurenai) is derived from Kure indigo, indicating its Chinese origin."
      },
      {
        name: "Coral (JIS)",
        kanji: "珊瑚色",
        romaji: "Sango-iro",
        hex: "#F3ACA3",
        rgb: { r: 244, g: 173, b: 163 },
        cmyk: { c: 0, m: 42, y: 28, k: 0 },
        category: "Schemes",
        description: "A pink similar to that of coral."
      },
      {
        name: "Apricot (JIS)",
        kanji: "杏色",
        romaji: "Anzu-iro",
        hex: "#F7B877",
        rgb: { r: 247, g: 185, b: 119 },
        cmyk: { c: 0, m: 35, y: 55, k: 0 },
        category: "Schemes",
        description: "A color popular since the Heian period."
      },
      {
        name: "Red Wisteria",
        kanji: "赤紫",
        romaji: "Akamurasaki",
        hex: "#C66795",
        rgb: { r: 198, g: 104, b: 150 },
        cmyk: { c: 5, m: 65, y: 0, k: 20 },
        category: "Schemes",
        description: "A lilac shade with red tones, it gives off an air of splendor and elegance."
      },
      {
        name: "Madder Red (JIS)",
        kanji: "茜色",
        romaji: "Akane-iro",
        hex: "#B7272D",
        rgb: { r: 183, g: 40, b: 45 },
        cmyk: { c: 0, m: 90, y: 70, k: 30 },
        category: "Schemes",
        description: "This deep red results from a dye created from madder root."
      },
      {
        name: "Walnut",
        kanji: "胡桃色",
        romaji: "Kurumi-iro",
        hex: "#C89962",
        rgb: { r: 201, g: 153, b: 98 },
        cmyk: { c: 0, m: 33, y: 55, k: 27 },
        category: "Schemes",
        description: "The boiled bark, nuts and hulls of the walnut tree yield a dye that creates this color."
      },
      {
        name: "Milky White",
        kanji: "乳白色",
        romaji: "Nyuhaku-shoku",
        hex: "#FDECDE",
        rgb: { r: 253, g: 237, b: 223 },
        cmyk: { c: 0, m: 10, y: 13, k: 0 },
        category: "Schemes",
        description: "The white of dairy products, when a softer, creamier tone is needed."
      },
      {
        name: "A Glimpse of the Pot (JIS)",
        kanji: "覗色",
        romaji: "Nozoki-iro",
        hex: "#A1D7DD",
        rgb: { r: 162, g: 215, b: 221 },
        cmyk: { c: 40, m: 0, y: 15, k: 0 },
        category: "Schemes",
        description: "This pale indigo color is named to suggest it merely glimpsed the indigo pot."
      },
      {
        name: "Pale Green",
        kanji: "淡緑",
        romaji: "Usu-midori",
        hex: "#5BAC4B",
        rgb: { r: 92, g: 173, b: 75 },
        cmyk: { c: 63, m: 0, y: 85, k: 10 },
        category: "Schemes",
        description: "As a highlight color, in small doses it sets off the bolder tones of the rest of palette."
      }
    ]
  },
  {
    id: "002",
    title: "Kimono Patterns for Women",
    subtitle: "Purple is a color beloved since ancient times",
    description: "Purple is a color beloved since ancient times. During the Heian period (794–1185 C.E.), the words meaning \"deep color\" and \"light color\" in fact signified deep and light shades of purple. In a contemporary color-preference survey, it was one of the most popular colors among adult women. Reddish purple evokes a soft femininity while blueish purple suggests hidden strength.",
    feeling: "Elegant, sophisticated, feminine.",
    combinations: "Focus on varying shades of reddish-purple when considering the color scheme.",
    tips: "When an accent is needed, use colors of differing intensities.",
    imageUrl: "https://picsum.photos/seed/kimono-women/800/600",
    imageCaption: "This pattern of auspicious symbols features cranes, handballs, fans and chrysanthemums.",
    colors: [
      {
        name: "Wine",
        kanji: "葡萄酒色",
        romaji: "Budōshu-iro",
        hex: "#9E2058",
        rgb: { r: 159, g: 33, b: 88 },
        cmyk: { c: 35, m: 95, y: 40, k: 15 },
        category: "Schemes",
        description: "The color of wild grapes, it takes on the deep red hues of the grandest of grand cru wines."
      },
      {
        name: "Deep Color",
        kanji: "深色",
        romaji: "Fukaki-iro",
        hex: "#782255",
        rgb: { r: 120, g: 34, b: 85 },
        cmyk: { c: 15, m: 80, y: 0, k: 57 },
        category: "Schemes",
        description: "A deep purple created from multiple dye sessions using the root of purple gromwell (lithospermum erythrorhizon)."
      },
      {
        name: "Half-Color",
        kanji: "半色",
        romaji: "Hashita-iro",
        hex: "#A48390",
        rgb: { r: 165, g: 132, b: 144 },
        cmyk: { c: 20, m: 40, y: 17, k: 30 },
        category: "Schemes",
        description: "This color takes its name from the fact that it is neither deep nor light."
      },
      {
        name: "White Plum",
        kanji: "白梅色",
        romaji: "Shirame-iro",
        hex: "#EBD1BE",
        rgb: { r: 236, g: 209, b: 191 },
        cmyk: { c: 0, m: 17, y: 20, k: 10 },
        category: "Schemes",
        description: "With just the faintest tinge of red, this is the color of white plum flowers."
      },
      {
        name: "Red Birch (JIS)",
        kanji: "赤樺色",
        romaji: "Akakaba-iro",
        hex: "#BA5447",
        rgb: { r: 187, g: 85, b: 72 },
        cmyk: { c: 0, m: 70, y: 56, k: 30 },
        category: "Schemes",
        description: "The shade of the bark of the red birch tree."
      },
      {
        name: "Storeroom (JIS)",
        kanji: "蔵色",
        romaji: "Kura-iro",
        hex: "#007D8D",
        rgb: { r: 0, g: 125, b: 142 },
        cmyk: { c: 82, m: 0, y: 25, k: 40 },
        category: "Schemes",
        description: "The color of the indigo dyed curtains that were used in clothing store-rooms."
      },
      {
        name: "Soot-Colored Bamboo (JIS)",
        kanji: "煤竹色",
        romaji: "Susutake-iro",
        hex: "#6A5145",
        rgb: { r: 107, g: 81, b: 70 },
        cmyk: { c: 0, m: 30, y: 30, k: 72 },
        category: "Schemes",
        description: "A color that recalls soot-stained, blackened bamboo."
      },
      {
        name: "Eggplant (JIS)",
        kanji: "茄子紺",
        romaji: "Nasukon",
        hex: "#4A1A46",
        rgb: { r: 75, g: 26, b: 71 },
        cmyk: { c: 40, m: 73, y: 0, k: 70 },
        category: "Schemes",
        description: "A deep navy with red tones, like that of an eggplant."
      },
      {
        name: "Sand (JIS)",
        kanji: "砂色",
        romaji: "Suna-iro",
        hex: "#DCD3B2",
        rgb: { r: 220, g: 211, b: 178 },
        cmyk: { c: 0, m: 5, y: 25, k: 20 },
        category: "Schemes",
        description: "An ash shade with a faint yellow tinge creating a color like that of sand."
      }
    ]
  },
  {
    id: "003",
    title: "Shinto Shrine",
    subtitle: "Red tori-i (gates) drive away disasters",
    description: "Broadly speaking, there are two reasons that Shinto shrines have red tori-i (gates). One is that, since ancient times, in Japan red was believed to have the power to drive away disasters. The other is that the pigment cinnabar was made from mercury and therefore acted as a wood preservative. Not all shrine gates are red—the gates at Ise Jingu and Izumo Taisha shrines are made from plain wood.",
    feeling: "Solemn, sacred, atmospheric.",
    combinations: "Add variations on sky blue to crimson and black.",
    tips: "A grayish purple creates an air of refinement.",
    imageUrl: "https://picsum.photos/seed/shinto/800/600",
    imageCaption: "The Itsukushima shrine in Miyajima is included on the list of World Cultural Heritage sites.",
    colors: [
      {
        name: "Cinnabar (JIS)",
        kanji: "辰砂",
        romaji: "Shinsha",
        hex: "#E94708",
        rgb: { r: 233, g: 71, b: 9 },
        cmyk: { c: 0, m: 85, y: 100, k: 0 },
        category: "Schemes",
        description: "The color of a pigment whose main ingredient is mercury sulphide; also the color of vermilion ink pads."
      },
      {
        name: "Iron Black (JIS)",
        kanji: "鉄黒",
        romaji: "Tetsuguro",
        hex: "#27120A",
        rgb: { r: 39, g: 18, b: 10 },
        cmyk: { c: 0, m: 20, y: 20, k: 98 },
        category: "Schemes",
        description: "The color of a pigment made from iron compound."
      },
      {
        name: "Ash Purple",
        kanji: "灰紫",
        romaji: "Hai-murasaki",
        hex: "#C2AAB0",
        rgb: { r: 195, g: 170, b: 176 },
        cmyk: { c: 23, m: 33, y: 20, k: 7 },
        category: "Schemes",
        description: "This color is also sometimes referred to as grayish purple."
      },
      {
        name: "Washed Persimmon",
        kanji: "洗柿",
        romaji: "Araigaki",
        hex: "#F6D4B2",
        rgb: { r: 247, g: 213, b: 179 },
        cmyk: { c: 0, m: 20, y: 30, k: 3 },
        category: "Schemes",
        description: "A faint yellow-red, as if a persimmon color had been washed in water."
      },
      {
        name: "Pale Flower",
        kanji: "花色",
        romaji: "Hana-iro",
        hex: "#8F8EAF",
        rgb: { r: 143, g: 143, b: 176 },
        cmyk: { c: 35, m: 30, y: 0, k: 27 },
        category: "Schemes",
        description: "During the Edo period, light indigo came to be known as \"flower color.\""
      },
      {
        name: "Dove Wing (JIS)",
        kanji: "鳩羽色",
        romaji: "Hatoba-iro",
        hex: "#A493AC",
        rgb: { r: 165, g: 147, b: 173 },
        cmyk: { c: 20, m: 30, y: 0, k: 30 },
        category: "Schemes",
        description: "The black-tinged lilac such as is seen on a dove's wing."
      },
      {
        name: "Crested Ibis (JIS)",
        kanji: "朱鷺色",
        romaji: "Toki-iro",
        hex: "#F4B3C1",
        rgb: { r: 244, g: 179, b: 194 },
        cmyk: { c: 0, m: 40, y: 10, k: 0 },
        category: "Schemes",
        description: "The color of the feathers of the crested ibis, which could once be found across Japan."
      },
      {
        name: "Town Mouse",
        kanji: "どぶねずみ",
        romaji: "Dobu-nezumi",
        hex: "#7B6567",
        rgb: { r: 123, g: 102, b: 103 },
        cmyk: { c: 10, m: 30, y: 17, k: 60 },
        category: "Schemes",
        description: "A graceful, refined reddish gray."
      },
      {
        name: "Burnt Purple",
        kanji: "焦紫",
        romaji: "Koge-murasaki",
        hex: "#4D3D4A",
        rgb: { r: 77, g: 62, b: 75 },
        cmyk: { c: 15, m: 30, y: 0, k: 80 },
        category: "Schemes",
        description: "In Japanese, the characters indicate a purple that has been toned down or otherwise diluted; a somber purple."
      }
    ]
  },
  {
    id: "004",
    title: "Buddha Statues",
    subtitle: "The statue of the seated Amitabha at Byodoin Temple",
    description: "The statue of the seated Amitabha, installed in the Phoenix Hall at Byodoin Temple, was created in 1053 during the Heian period. Its sculptor, Jocho, was considered the greatest Buddhist image maker of the day. The statue is a national treasure, and Byodoin is a World Heritage Site. The independent Japanese culture that flourished at that time is known as Kokufu Bunka.",
    feeling: "Dignified, serene, calm.",
    combinations: "Create a composition using browns with red and yellow tints, plus gray.",
    tips: "Carefully combine colors with low levels of brightness.",
    imageUrl: "https://picsum.photos/seed/buddha/800/600",
    imageCaption: "This statue is almost 110 inches (277 cm) tall at its pinnacle.",
    colors: [
      {
        name: "Buddha Gold",
        kanji: "仏金色",
        romaji: "Butsukin-iro",
        hex: "#D2BE6B",
        rgb: { r: 210, g: 190, b: 108 },
        cmyk: { c: 0, m: 10, y: 57, k: 25 },
        category: "Schemes",
        description: "A gold color with a refined radiance like that of a Buddha statue."
      },
      {
        name: "Earth",
        kanji: "土色",
        romaji: "Tsuchi-iro",
        hex: "#A68A5B",
        rgb: { r: 167, g: 139, b: 91 },
        cmyk: { c: 0, m: 23, y: 50, k: 45 },
        category: "Schemes",
        description: "A color similar to moist soil with strong black tones."
      },
      {
        name: "Faint Fragrance",
        kanji: "薄香",
        romaji: "Usukō",
        hex: "#E2D7A7",
        rgb: { r: 226, g: 215, b: 168 },
        cmyk: { c: 0, m: 5, y: 33, k: 17 },
        category: "Schemes",
        description: "A pale color resulting from the dye of the clove, a fragrant wood."
      },
      {
        name: "Agarwood Brown",
        kanji: "沈香色",
        romaji: "Jinkō-iro",
        hex: "#8B6D5C",
        rgb: { r: 140, g: 109, b: 92 },
        cmyk: { c: 20, m: 40, y: 43, k: 45 },
        category: "Schemes",
        description: "An agarwood is a fragrant tree, such as an aloeswood, that grows in tropical regions."
      },
      {
        name: "Ash (JIS)",
        kanji: "灰色",
        romaji: "Hai-iro",
        hex: "#767575",
        rgb: { r: 118, g: 118, b: 118 },
        cmyk: { c: 0, m: 0, y: 0, k: 68 },
        category: "Schemes",
        description: "A color resembling that of the ash from burnt objects. It falls between black and white."
      },
      {
        name: "Mouse (JIS)",
        kanji: "鼠色",
        romaji: "Nezumi-iro",
        hex: "#949494",
        rgb: { r: 148, g: 148, b: 149 },
        cmyk: { c: 0, m: 0, y: 0, k: 55 },
        category: "Schemes",
        description: "The color of mouse fur, traditionally signifying gray."
      },
      {
        name: "Brown Mouse (JIS)",
        kanji: "茶鼠",
        romaji: "Cha-nezumi",
        hex: "#A89E93",
        rgb: { r: 169, g: 158, b: 147 },
        cmyk: { c: 0, m: 10, y: 15, k: 45 },
        category: "Schemes",
        description: "Mouse color tinged with brown. In the Edo period, browns and grays were popular colors."
      },
      {
        name: "White Glossed Silk",
        kanji: "練色",
        romaji: "Neri-iro",
        hex: "#E5DDCE",
        rgb: { r: 229, g: 222, b: 206 },
        cmyk: { c: 0, m: 5, y: 13, k: 15 },
        category: "Schemes",
        description: "The color of raw silk threads that have been scoured."
      },
      {
        name: "Paradise",
        kanji: "極楽浄土",
        romaji: "Gokuraku-jōdo",
        hex: "#E9EAEB",
        rgb: { r: 234, g: 235, b: 235 },
        cmyk: { c: 10, m: 7, y: 7, k: 0 },
        category: "Schemes",
        description: "Associated with the Pure Land where the Amitabha Buddha is said to reside."
      }
    ]
  },
  {
    id: "005",
    title: "Japanese Gardens",
    subtitle: "Connection to nature is close at hand via a courtyard garden",
    description: "Since times long past, Japanese people have lived with the belief that countless spirits dwell in nature. This sensibility is strongly reflected in Japanese-style gardens, where ponds are built to resemble rivers and oceans, stones take on significance and meaning. The changing of the seasons is captured in the changing colors of the garden plants.",
    feeling: "Calm, relaxed, natural.",
    combinations: "Focus on greens and browns to create a composition with only colors of medium to low brightness.",
    tips: "Don't use bright colors, use dull shades.",
    imageUrl: "https://picsum.photos/seed/garden/800/600",
    imageCaption: "Connection to nature is close at hand via a courtyard garden.",
    colors: [
      {
        name: "Pine Green (JIS)",
        kanji: "松葉色",
        romaji: "Matsuba-iro",
        hex: "#829A5B",
        rgb: { r: 131, g: 154, b: 92 },
        cmyk: { c: 33, m: 0, y: 60, k: 40 },
        category: "Schemes",
        description: "A color like that of pine needles. Dark green is sometimes also called pine green."
      },
      {
        name: "Thousand-Year Green (JIS)",
        kanji: "千歳緑",
        romaji: "Chitose-midori",
        hex: "#31663E",
        rgb: { r: 49, g: 103, b: 63 },
        cmyk: { c: 60, m: 0, y: 65, k: 60 },
        category: "Schemes",
        description: "An auspicious color indicating an evergreen that remains unchanged for a thousand years."
      },
      {
        name: "Black Brown (JIS)",
        kanji: "黒茶",
        romaji: "Kuro-cha",
        hex: "#4B2C15",
        rgb: { r: 75, g: 45, b: 22 },
        cmyk: { c: 0, m: 40, y: 50, k: 85 },
        category: "Schemes",
        description: "As the name suggests, a brown color that is close to black."
      },
      {
        name: "Underside of Willow Leaves",
        kanji: "柳葉裏",
        romaji: "Yanagiba-ura",
        hex: "#B5BB7E",
        rgb: { r: 182, g: 187, b: 126 },
        cmyk: { c: 13, m: 0, y: 47, k: 30 },
        category: "Schemes",
        description: "A color similar to that of the underside of willow leaves."
      },
      {
        name: "Incense",
        kanji: "香色",
        romaji: "Kō-iro",
        hex: "#C6B083",
        rgb: { r: 199, g: 177, b: 131 },
        cmyk: { c: 0, m: 15, y: 40, k: 30 },
        category: "Schemes",
        description: "A color derived from dyes of fragrant trees such as cloves and aloeswood."
      },
      {
        name: "Fallen Leaves (JIS)",
        kanji: "朽葉色",
        romaji: "Kuchiba-iro",
        hex: "#907346",
        rgb: { r: 145, g: 115, b: 71 },
        cmyk: { c: 0, m: 27, y: 54, k: 55 },
        category: "Schemes",
        description: "A faded brown like that of leaves that have withered and fallen to the ground."
      },
      {
        name: "Pale Mouse",
        kanji: "淡鼠",
        romaji: "Usu-nezumi",
        hex: "#CACBD2",
        rgb: { r: 202, g: 204, b: 210 },
        cmyk: { c: 7, m: 5, y: 0, k: 23 },
        category: "Schemes",
        description: "A light gray color close to white."
      },
      {
        name: "White Clay",
        kanji: "白土",
        romaji: "Hakudo",
        hex: "#F2E2D5",
        rgb: { r: 242, g: 227, b: 214 },
        cmyk: { c: 0, m: 10, y: 13, k: 7 },
        category: "Schemes",
        description: "Powdered limestone; this was also used on the walls of ancient tombs."
      },
      {
        name: "Garden Stone",
        kanji: "庭石色",
        romaji: "Niwa-ishi-iro",
        hex: "#746C5F",
        rgb: { r: 116, g: 109, b: 96 },
        cmyk: { c: 25, m: 25, y: 35, k: 55 },
        category: "Schemes",
        description: "A color that calls to mind stones that are invaluable when creating a garden."
      }
    ]
  },
  {
    id: "006",
    title: "Kabuki Theater",
    subtitle: "Color is emptiness / Emptiness is color",
    description: "Twelfth-generation kabuki actor Ichikawa Danjuro departed this world in February 2013. Penned in his final moments, \"Color is emptiness / Emptiness is color\" references the Heart Sutra's \"Color is empty / Emptiness is color.\" This means that all matter and phenomenon (including color) existing in the world have no substance and only a temporary form.",
    feeling: "Traditional, refined, historic.",
    combinations: "Focus on browns and grays with colors such as white and black added for movement.",
    tips: "If colors are similar, create differentiation by altering brightness levels.",
    imageUrl: "https://picsum.photos/seed/kabuki/800/600",
    imageCaption: "The flash and intensity of a kabuki performance, with its sharply defined lines, is reflected in this palette.",
    colors: [
      {
        name: "Danjuro Tea",
        kanji: "団十郎茶",
        romaji: "Danjūrō-cha",
        hex: "#BC6137",
        rgb: { r: 188, g: 98, b: 56 },
        cmyk: { c: 0, m: 63, y: 70, k: 30 },
        category: "Schemes",
        description: "One of the main colors used in the performers' costumes."
      },
      {
        name: "White",
        kanji: "白",
        romaji: "Shiro",
        hex: "#FFFEFE",
        rgb: { r: 255, g: 255, b: 254 },
        cmyk: { c: 0, m: 0, y: 1, k: 0 },
        category: "Schemes",
        description: "This basic go-to tone can be endlessly paired or altered."
      },
      {
        name: "Silverskin",
        kanji: "銀鼠",
        romaji: "Gin-nezumi",
        hex: "#AEAFAF",
        rgb: { r: 175, g: 175, b: 176 },
        cmyk: { c: 0, m: 0, y: 0, k: 43 },
        category: "Schemes",
        description: "A strong complement to white due to its silvery brightness."
      },
      {
        name: "Charcoal",
        kanji: "墨色",
        romaji: "Sumiiro",
        hex: "#2E2624",
        rgb: { r: 47, g: 39, b: 37 },
        cmyk: { c: 0, m: 0, y: 0, k: 95 },
        category: "Schemes",
        description: "This color recalls soot hardened into shape with glue."
      },
      {
        name: "Persimmon Tannin (JIS)",
        kanji: "柿渋色",
        romaji: "Kakishibu-iro",
        hex: "#893518",
        rgb: { r: 138, g: 54, b: 24 },
        cmyk: { c: 0, m: 73, y: 75, k: 55 },
        category: "Schemes",
        description: "A color made by dyeing with persimmon tannin. It is sometimes simply called persimmon."
      },
      {
        name: "Sprouted Onion (JIS)",
        kanji: "萌葱色",
        romaji: "Moegi",
        hex: "#33705E",
        rgb: { r: 52, g: 113, b: 95 },
        cmyk: { c: 60, m: 0, y: 45, k: 55 },
        category: "Schemes",
        description: "The deep green of a spring onion. The curtain at a kabuki theater is composed of colors 4, 5 and 6."
      },
      {
        name: "Masuhana",
        kanji: "升花色",
        romaji: "Masuhana",
        hex: "#005877",
        rgb: { r: 0, g: 88, b: 120 },
        cmyk: { c: 80, m: 0, y: 0, k: 65 },
        category: "Schemes",
        description: "The signature color of fifth-generation kabuki actor Danjuro Yukari."
      },
      {
        name: "Clove Brown",
        kanji: "丁子茶",
        romaji: "Chōji-cha",
        hex: "#BA9046",
        rgb: { r: 186, g: 145, b: 70 },
        cmyk: { c: 0, m: 30, y: 67, k: 35 },
        category: "Schemes",
        description: "A clove color deepened to brown. This color name is typical of the Edo period."
      },
      {
        name: "Indigo Mouse",
        kanji: "藍鼠",
        romaji: "Ai-nezumi",
        hex: "#4B5969",
        rgb: { r: 75, g: 90, b: 105 },
        cmyk: { c: 35, m: 13, y: 0, k: 70 },
        category: "Schemes",
        description: "Mouse tinged with blue. Brown and mouse gray were popular colors in the Edo period."
      }
    ]
  },
  {
    id: "007",
    title: "Fireworks",
    subtitle: "The explosions of glow and contrasting patterns light up the night sky",
    description: "Fireworks are said to have reached Japan during the Warring States period (1467-1568) along with guns and explosives. During the Edo period, two major fireworks manufacturers were active: Kagiya and Tamaya, giving rise to the custom of calling out these names while watching fireworks displays.",
    feeling: "Fantastic, a strong contrast between light and dark.",
    combinations: "Use colors 1-3 as a base to add bright and vivid colors to.",
    tips: "Use the variations between bright and dark to create visual interest.",
    imageUrl: "https://picsum.photos/seed/fireworks/800/600",
    imageCaption: "The explosions of glow and contrasting patterns light up the night sky.",
    colors: [
      {
        name: "Ultramarine (JIS)",
        kanji: "群青色",
        romaji: "Gunjō-iro",
        hex: "#4D67AF",
        rgb: { r: 78, g: 103, b: 176 },
        cmyk: { c: 75, m: 58, y: 0, k: 0 },
        category: "Schemes",
        description: "Ultramarine is a pigment derived from azurite."
      },
      {
        name: "Lapis Lazuli (JIS)",
        kanji: "瑠璃色",
        romaji: "Ruri-iro",
        hex: "#17438D",
        rgb: { r: 24, g: 68, b: 142 },
        cmyk: { c: 90, m: 70, y: 0, k: 20 },
        category: "Schemes",
        description: "Lapis lazuli is a blue precious stone that is one of the seven treasures in Buddhist teachings."
      },
      {
        name: "Iron Blue (JIS)",
        kanji: "鉄紺",
        romaji: "Tetsukon",
        hex: "#0B1644",
        rgb: { r: 11, g: 22, b: 68 },
        cmyk: { c: 80, m: 65, y: 0, k: 75 },
        category: "Schemes",
        description: "Signifying a navy blue color tinged with iron, this is a navy that is close to black in shade."
      },
      {
        name: "Dove Wing Mouse",
        kanji: "鳩羽鼠",
        romaji: "Hatoba-nezumi",
        hex: "#877A92",
        rgb: { r: 136, g: 123, b: 146 },
        cmyk: { c: 23, m: 30, y: 0, k: 45 },
        category: "Schemes",
        description: "A darker, redder gray than dove wing, this color got its name in the later part of the Edo period."
      },
      {
        name: "Wisteria Purple (JIS)",
        kanji: "藤紫",
        romaji: "Fujimurasaki",
        hex: "#A59AC9",
        rgb: { r: 165, g: 154, b: 202 },
        cmyk: { c: 40, m: 40, y: 0, k: 0 },
        category: "Schemes",
        description: "Purple tinged with the pale violet of wisteria. It conveys the lingering, trailing smoke of fireworks."
      },
      {
        name: "White Brown",
        kanji: "白茶",
        romaji: "Shiracha",
        hex: "#EDE3D9",
        rgb: { r: 238, g: 227, b: 217 },
        cmyk: { c: 0, m: 7, y: 10, k: 10 },
        category: "Schemes",
        description: "An extremely faint brown. The Japanese name for this color also means \"to fade.\""
      },
      {
        name: "Rose (JIS)",
        kanji: "薔薇色",
        romaji: "Bara-iro",
        hex: "#E84E66",
        rgb: { r: 233, g: 78, b: 102 },
        cmyk: { c: 0, m: 82, y: 42, k: 0 },
        category: "Schemes",
        description: "The color of a red rose. While the name of the color sometimes conjures pink, here the deep red of the petals is intended."
      },
      {
        name: "Young Purple",
        kanji: "若紫",
        romaji: "Wakamurasaki",
        hex: "#BF84B7",
        rgb: { r: 192, g: 133, b: 184 },
        cmyk: { c: 27, m: 55, y: 0, k: 0 },
        category: "Schemes",
        description: "Signifies a purple that makes a gorgeous, youthful impression."
      },
      {
        name: "Kerria Brown",
        kanji: "山吹茶",
        romaji: "Yamabuki-cha",
        hex: "#DDC823",
        rgb: { r: 222, g: 200, b: 36 },
        cmyk: { c: 0, m: 7, y: 85, k: 20 },
        category: "Schemes",
        description: "A color that is created by adding a tiny amount of black to the yellow of a kerria flower."
      }
    ]
  },
  {
    id: "008",
    title: "Playing Cards",
    subtitle: "A wild boar and butterflies are included in the menagerie",
    description: "There are 48 cards in a hanafuda pack. There are set plants for each of the 12 months (or suits): January is pine, February is plum, March is cherry, April is wisteria, May is iris and so on, with four cards each. Of these, there are five \"brights\" or high-scoring cards, \"pine with crane,\" \"cherry with curtain,\" \"pampas grass with moon,\" \"willow with Rainman\" and \"paulownia with Chinese phoenix.\" They are especially colorful and feature strong, distinctive patterns.",
    feeling: "Distinct, reassuring, precise.",
    combinations: "Focus on reds and purples, combining them with neutral colors.",
    tips: "Distribute colors to emphasize contrast.",
    imageUrl: "https://picsum.photos/seed/hanafuda/800/600",
    imageCaption: "A wild boar and butterflies are included in the menagerie.",
    colors: [
      {
        name: "Vermilion (JIS)",
        kanji: "朱色",
        romaji: "Shu-iro",
        hex: "#D7003A",
        rgb: { r: 215, g: 0, b: 58 },
        cmyk: { c: 0, m: 100, y: 65, k: 10 },
        category: "Schemes",
        description: "A vivid red like the pigment that is harvested from the safflower."
      },
      {
        name: "Iris (JIS)",
        kanji: "菖蒲色",
        romaji: "Ayame-iro",
        hex: "#674196",
        rgb: { r: 103, g: 65, b: 150 },
        cmyk: { c: 70, m: 82, y: 0, k: 0 },
        category: "Schemes",
        description: "A vivid bluish purple like that of the iris flower."
      },
      {
        name: "Thinned Charcoal",
        kanji: "薄墨色",
        romaji: "Usuzumi-iro",
        hex: "#615C66",
        rgb: { r: 97, g: 92, b: 102 },
        cmyk: { c: 25, m: 25, y: 10, k: 65 },
        category: "Schemes",
        description: "A lighter charcoal shade. At funerals, characters are written using thin black ink."
      },
      {
        name: "Black (JIS)",
        kanji: "黒",
        romaji: "Kuro",
        hex: "#130012",
        rgb: { r: 19, g: 0, b: 18 },
        cmyk: { c: 30, m: 30, y: 0, k: 100 },
        category: "Schemes",
        description: "The color that absorbs wavelengths of all visible light rays equally."
      },
      {
        name: "Mandarin (JIS)",
        kanji: "樺色",
        romaji: "Kaba-iro",
        hex: "#F18D00",
        rgb: { r: 241, g: 141, b: 0 },
        cmyk: { c: 0, m: 55, y: 100, k: 0 },
        category: "Schemes",
        description: "A warm, vivid color like that of mandarin peel."
      },
      {
        name: "Pure White",
        kanji: "純白",
        romaji: "Junpaku",
        hex: "#F9F8F7",
        rgb: { r: 249, g: 248, b: 248 },
        cmyk: { c: 3, m: 3, y: 3, k: 0 },
        category: "Schemes",
        description: "Signifying an unadulterated white, this symbolizes purity."
      },
      {
        name: "Yellow Red (JIS)",
        kanji: "黄赤",
        romaji: "Ki-aka",
        hex: "#EC6700",
        rgb: { r: 236, g: 104, b: 0 },
        cmyk: { c: 0, m: 72, y: 100, k: 0 },
        category: "Schemes",
        description: "A color whose name is directly translated from the Munsell color system used by JIS."
      },
      {
        name: "Double Cherry Blossom",
        kanji: "八重桜",
        romaji: "Yaezakura",
        hex: "#F9D5D6",
        rgb: { r: 250, g: 213, b: 214 },
        cmyk: { c: 0, m: 23, y: 10, k: 0 },
        category: "Schemes",
        description: "A more intense pink than that of Yoshino cherry blossoms."
      },
      {
        name: "Koji (JIS)",
        kanji: "柑子色",
        romaji: "Kōji-iro",
        hex: "#F6AD48",
        rgb: { r: 246, g: 173, b: 72 },
        cmyk: { c: 0, m: 40, y: 75, k: 0 },
        category: "Schemes",
        description: "A color similar to that of the fruit of the koji mikan citrus."
      }
    ]
  },
  {
    id: "009",
    title: "Folk Toys",
    subtitle: "Daruma dolls and red cow toys are made from paper mâché",
    description: "The toys produced all over Japan since olden times have their foundations in talismans related to spiritual beliefs. Many use simple color combinations. Here, the motif of a paper-mâché dog has been used to develop a color scheme. Dogs give birth to multiple offspring at once, and deliver easily, so they symbolize the hope of easy child-birth and healthy children.",
    feeling: "Energetic, lovable, naïve in terms of embellishment.",
    combinations: "Combine contrasting colors such as reds and greens.",
    tips: "If the color scheme is too strong, tone it down by using white and black.",
    imageUrl: "https://picsum.photos/seed/toys/800/600",
    imageCaption: "Daruma dolls and red cow toys are made from paper mâché.",
    colors: [
      {
        name: "Red Red (JIS)",
        kanji: "真赤",
        romaji: "Ma-aka",
        hex: "#E73828",
        rgb: { r: 232, g: 56, b: 40 },
        cmyk: { c: 0, m: 90, y: 85, k: 0 },
        category: "Schemes",
        description: "The reddest of reds. The Japanese name points to a blend of two different reds, one with purple tones and one with yellow tones."
      },
      {
        name: "Young Bamboo (JIS)",
        kanji: "若竹色",
        romaji: "Wakatake-iro",
        hex: "#67BD8C",
        rgb: { r: 103, g: 190, b: 141 },
        cmyk: { c: 60, m: 0, y: 55, k: 0 },
        category: "Schemes",
        description: "The color of bamboo that has only just started to send out its tender shoots."
      },
      {
        name: "Kerria (JIS)",
        kanji: "山吹色",
        romaji: "Yamabuki-iro",
        hex: "#F8B500",
        rgb: { r: 248, g: 181, b: 0 },
        cmyk: { c: 0, m: 35, y: 100, k: 0 },
        category: "Schemes",
        description: "The color of kerria flowers, this is another name for the gold color of old Japanese coins."
      },
      {
        name: "Egg (JIS)",
        kanji: "卵色",
        romaji: "Tamago-iro",
        hex: "#FCD475",
        rgb: { r: 252, g: 212, b: 117 },
        cmyk: { c: 0, m: 20, y: 60, k: 0 },
        category: "Schemes",
        description: "The color of egg yolk, although this is brighter than the actual yolk color."
      },
      {
        name: "Unbleached (JIS)",
        kanji: "生成色",
        romaji: "Kinari-iro",
        hex: "#FBFAF3",
        rgb: { r: 251, g: 250, b: 243 },
        cmyk: { c: 0, m: 0, y: 5, k: 3 },
        category: "Schemes",
        description: "The color of natural fiber that has not been dyed or been put through any other process."
      },
      {
        name: "Byakugun",
        kanji: "白群",
        romaji: "Byakugun",
        hex: "#ADD3EC",
        rgb: { r: 174, g: 211, b: 237 },
        cmyk: { c: 33, m: 5, y: 0, k: 5 },
        category: "Schemes",
        description: "Made from powdered ultramarine, this is one of the natural mineral pigments used in Japanese painting."
      },
      {
        name: "Strawberry",
        kanji: "苺色",
        romaji: "Ichigo-iro",
        hex: "#CE005F",
        rgb: { r: 207, g: 0, b: 95 },
        cmyk: { c: 0, m: 100, y: 25, k: 15 },
        category: "Schemes",
        description: "The color of ripe strawberries, this color has been so called since the Meiji era."
      },
      {
        name: "Tokiwa (JIS)",
        kanji: "常磐色",
        romaji: "Tokiwa-iro",
        hex: "#007C45",
        rgb: { r: 0, g: 124, b: 69 },
        cmyk: { c: 82, m: 0, y: 80, k: 38 },
        category: "Schemes",
        description: "The color of the leaves of evergreen trees such as pines and Japanese cedars. It's seen as auspicious."
      },
      {
        name: "Black Mouse",
        kanji: "黒鼠",
        romaji: "Kuro-nezumi",
        hex: "#29211F",
        rgb: { r: 42, g: 33, b: 32 },
        cmyk: { c: 20, m: 20, y: 20, k: 93 },
        category: "Schemes",
        description: "Also called deep mouse, this is a gray that is close to black."
      }
    ]
  },
  {
    id: "010",
    title: "Traditional Japanese Handballs",
    subtitle: "Decorating handballs has been passed down as a traditional craft all over Japan",
    description: "Handballs are believed to have made their way to Japan from China during the Asuka period (550-710 C.E.). They became popular as toys for girls during the Edo period. Kaga handballs have their origins as part of the trousseau that Tama-hime of the Tokugawa clan took with her when she married into the Kaga domain. The gloss of the silk threads used makes the striking color combinations look even more glorious.",
    feeling: "Graceful, splendid, sophisticated.",
    combinations: "Use purple tones as a base, then add flamboyance with colors 4, 5 and so on.",
    tips: "Colors 7 and 8 tone down a color scheme, while 9 pulls it together.",
    imageUrl: "https://picsum.photos/seed/handballs/800/600",
    imageCaption: "Decorating handballs has been passed down as a traditional craft all over Japan.",
    colors: [
      {
        name: "Ancient Purple (JIS)",
        kanji: "古代紫",
        romaji: "Kodai-murasaki",
        hex: "#895586",
        rgb: { r: 137, g: 86, b: 135 },
        cmyk: { c: 35, m: 63, y: 0, k: 32 },
        category: "Schemes",
        description: "A color created with the dye of purple gromwell root; a refined, relaxed purple."
      },
      {
        name: "Sword Lily (JIS)",
        kanji: "菖蒲色",
        romaji: "Ayame-iro",
        hex: "#CC7DB1",
        rgb: { r: 204, g: 125, b: 177 },
        cmyk: { c: 20, m: 60, y: 0, k: 0 },
        category: "Schemes",
        description: "A color similar to that of the sword lily. It has a redder tone than that of iris."
      },
      {
        name: "Edo Purple (JIS)",
        kanji: "江戸紫",
        romaji: "Edo-murasaki",
        hex: "#724E94",
        rgb: { r: 115, g: 78, b: 149 },
        cmyk: { c: 60, m: 72, y: 0, k: 12 },
        category: "Schemes",
        description: "A purple dyed in Edo (Tokyo). The blue tone is stronger than that of purple from Kyoto (imperial purple)."
      },
      {
        name: "Mustard (JIS)",
        kanji: "芥子色",
        romaji: "Karashi-iro",
        hex: "#D1B74D",
        rgb: { r: 210, g: 183, b: 78 },
        cmyk: { c: 0, m: 14, y: 70, k: 25 },
        category: "Schemes",
        description: "A popular spice used since the Nara period (710-794 C.E.), the color quickly moved beyond the realm of food."
      },
      {
        name: "Eggshell",
        kanji: "鳥の子色",
        romaji: "Torinoko-iro",
        hex: "#F7EDD0",
        rgb: { r: 248, g: 238, b: 209 },
        cmyk: { c: 0, m: 5, y: 20, k: 5 },
        category: "Schemes",
        description: "The color of an eggshell, or \"child of a bird,\" as it's called in Japanese."
      },
      {
        name: "White Mouse",
        kanji: "白鼠",
        romaji: "Shironezumi",
        hex: "#E5E6E6",
        rgb: { r: 230, g: 230, b: 230 },
        cmyk: { c: 0, m: 0, y: 0, k: 15 },
        category: "Schemes",
        description: "A bright, classy gray that brings out the gloss of the silk threads used for the handballs."
      },
      {
        name: "Light Crimson",
        kanji: "薄紅",
        romaji: "Usubeni",
        hex: "#EEC9CF",
        rgb: { r: 238, g: 201, b: 208 },
        cmyk: { c: 0, m: 25, y: 7, k: 7 },
        category: "Schemes",
        description: "A pale color like that of a safflower-dyed textile that has faded."
      },
      {
        name: "Forget-Me-Not (JIS)",
        kanji: "勿忘草色",
        romaji: "Wasurenagusa-iro",
        hex: "#88C2EA",
        rgb: { r: 137, g: 195, b: 235 },
        cmyk: { c: 48, m: 10, y: 0, k: 0 },
        category: "Schemes",
        description: "The color of the forget-me-not flower. The Japanese term is directly translated from the English."
      },
      {
        name: "Black Sawtooth Oak",
        kanji: "櫟色",
        romaji: "Kunugi-iro",
        hex: "#293321",
        rgb: { r: 42, g: 51, b: 34 },
        cmyk: { c: 30, m: 0, y: 40, k: 90 },
        category: "Schemes",
        description: "This color is obtained from the dye of the sawtooth oak fruit."
      }
    ]
  },
  {
    id: "011",
    title: "Hina Dolls",
    subtitle: "Hina dolls are thought to have originated as playthings for the daughters of aristocratic families during the Heian period.",
    description: "Made from paper at the time, the dolls were played with in a paper palace. The dolls became linked with a seasonal festival, and in the Edo period they started to be displayed as they are today. The tiered ensemble represents an imperial wedding ceremony.",
    feeling: "Gentle, soft, delicate.",
    combinations: "Focus on different shades of warm pinks.",
    tips: "Use brown as an accent color for a sophisticated result.",
    imageUrl: "https://picsum.photos/seed/hina-dolls/800/600",
    imageCaption: "The doll wears a twelve-layered ceremonial kimono.",
    colors: [
      {
        name: "Peach (JIS)",
        kanji: "桃色",
        romaji: "Momo-iro",
        hex: "#EF9099",
        rgb: { r: 240, g: 145, b: 153 },
        cmyk: { c: 0, m: 55, y: 25, k: 0 },
        category: "Schemes",
        description: "The color of peach flowers, different from the hue in English referring to the color of the fruit."
      },
      {
        name: "Red Plum Blossom (JIS)",
        kanji: "紅梅色",
        romaji: "Kōbai-iro",
        hex: "#F2A0A1",
        rgb: { r: 242, g: 160, b: 161 },
        cmyk: { c: 0, m: 48, y: 25, k: 0 },
        category: "Schemes",
        description: "The color of red blossoms on a plum tree. There are around 300 different types of plum."
      },
      {
        name: "Cherry Blossom (JIS)",
        kanji: "桜色",
        romaji: "Sakura-iro",
        hex: "#FDF3F3",
        rgb: { r: 254, g: 244, b: 244 },
        cmyk: { c: 0, m: 7, y: 3, k: 0 },
        category: "Schemes",
        description: "The faintest pink like that of cherry blossom petals."
      },
      {
        name: "Red Coral",
        kanji: "珊瑚色",
        romaji: "Sango-iro",
        hex: "#EF8468",
        rgb: { r: 239, g: 132, b: 104 },
        cmyk: { c: 0, m: 60, y: 53, k: 0 },
        category: "Schemes",
        description: "Coral has been used since ancient times for ornamental items such as hairpins."
      },
      {
        name: "Salmon",
        kanji: "鮭色",
        romaji: "Sake-iro",
        hex: "#F3A582",
        rgb: { r: 244, g: 165, b: 131 },
        cmyk: { c: 0, m: 45, y: 45, k: 0 },
        category: "Schemes",
        description: "The color of salmon flesh, with its balance of warm orange and pink."
      },
      {
        name: "Skin Tone (JIS)",
        kanji: "肌色",
        romaji: "Hada-iro",
        hex: "#FCE2C3",
        rgb: { r: 252, g: 226, b: 196 },
        cmyk: { c: 0, m: 15, y: 25, k: 0 },
        category: "Schemes",
        description: "A color that suggests some skin tones. In olden times, it was called 'flesh color'."
      },
      {
        name: "Ochre (JIS)",
        kanji: "黄土色",
        romaji: "Ōdo-iro",
        hex: "#C29042",
        rgb: { r: 195, g: 144, b: 67 },
        cmyk: { c: 0, m: 35, y: 70, k: 30 },
        category: "Schemes",
        description: "Yellowish clay used as a pigment. The color is a subdued yellow."
      },
      {
        name: "Soot-Stained Bamboo Brown",
        kanji: "煤竹色",
        romaji: "Susutake-iro",
        hex: "#866C45",
        rgb: { r: 134, g: 108, b: 70 },
        cmyk: { c: 0, m: 25, y: 50, k: 60 },
        category: "Schemes",
        description: "A brown shade resembling soot-stained bamboo."
      },
      {
        name: "Cochineal (JIS)",
        kanji: "洋紅",
        romaji: "Yōkō",
        hex: "#B83F36",
        rgb: { r: 185, g: 64, b: 71 },
        cmyk: { c: 0, m: 80, y: 52, k: 30 },
        category: "Schemes",
        description: "A color made from the red dye of cochineal insects."
      }
    ]
  },
  {
    id: "012",
    title: "Wooden Mosaics",
    subtitle: "Natural colors have as much variation as human-made ones.",
    description: "Wooden mosaic work makes use of the different colors of wood to create patterns from the various combinations. This is a traditional craft of Hakone (in Kanagawa prefecture). The trophy awarded to the winning team in the Hakone Ekiden race is made from wooden mosaic work.",
    feeling: "Relaxed, natural, reassuring.",
    combinations: "Combine similar colors and tones.",
    tips: "Make sure to keep the line between colors clear.",
    imageUrl: "https://picsum.photos/seed/wooden-mosaic/800/600",
    imageCaption: "This piece builds on the interplay of black and white.",
    colors: [
      {
        name: "Brown (Kasshoku) (JIS)",
        kanji: "褐色",
        romaji: "Kasshoku",
        hex: "#8A3A00",
        rgb: { r: 138, g: 58, b: 0 },
        cmyk: { c: 0, m: 70, y: 100, k: 55 },
        category: "Schemes",
        description: "A slightly black-tinged brown."
      },
      {
        name: "Birch (JIS)",
        kanji: "樺色",
        romaji: "Kaba-iro",
        hex: "#CC5D3B",
        rgb: { r: 205, g: 94, b: 59 },
        cmyk: { c: 0, m: 70, y: 70, k: 20 },
        category: "Schemes",
        description: "The color of the birch-like bark of trees in the cherry and birch families."
      },
      {
        name: "Burnt Brown (JIS)",
        kanji: "焦茶",
        romaji: "Kogicha",
        hex: "#6E4C3E",
        rgb: { r: 111, g: 77, b: 62 },
        cmyk: { c: 0, m: 38, y: 38, k: 70 },
        category: "Schemes",
        description: "A deep brown similar to the color created from scorching."
      },
      {
        name: "Amur Cork Tree",
        kanji: "黄檗色",
        romaji: "Kihada-iro",
        hex: "#E4C654",
        rgb: { r: 229, g: 198, b: 85 },
        cmyk: { c: 0, m: 15, y: 70, k: 15 },
        category: "Schemes",
        description: "The color created by the dye brewed from the bark of the amur cork tree."
      },
      {
        name: "Desolate Fields",
        kanji: "枯野色",
        romaji: "Kareno-iro",
        hex: "#DAC18F",
        rgb: { r: 218, g: 194, b: 144 },
        cmyk: { c: 0, m: 15, y: 40, k: 20 },
        category: "Schemes",
        description: "The color of withered grasses in the hills in winter. This is an atmospheric color name."
      },
      {
        name: "Ash Brown (JIS)",
        kanji: "灰茶",
        romaji: "Haicha",
        hex: "#986540",
        rgb: { r: 153, g: 101, b: 65 },
        cmyk: { c: 0, m: 45, y: 57, k: 50 },
        category: "Schemes",
        description: "Brown with a grayish tint."
      },
      {
        name: "White Sawtooth Oak",
        kanji: "櫟色",
        romaji: "Kunugi-iro",
        hex: "#DAC7B4",
        rgb: { r: 218, g: 200, b: 180 },
        cmyk: { c: 0, m: 13, y: 20, k: 20 },
        category: "Schemes",
        description: "An extremely pale color resulting from the dye of sawtooth oak acorns."
      },
      {
        name: "Clove",
        kanji: "丁子色",
        romaji: "Chōji-iro",
        hex: "#CDA16E",
        rgb: { r: 205, g: 161, b: 111 },
        cmyk: { c: 0, m: 30, y: 50, k: 25 },
        category: "Schemes",
        description: "A color from the Heian period that appears in \"The Tale of Genji.\""
      },
      {
        name: "Extreme Burnt Brown",
        kanji: "極焦茶",
        romaji: "Goku-kogicha",
        hex: "#341200",
        rgb: { r: 52, g: 18, b: 0 },
        cmyk: { c: 0, m: 50, y: 100, k: 93 },
        category: "Schemes",
        description: "A brown darker than burnt brown, almost approaching black."
      }
    ]
  },
  {
    id: "013",
    title: "Origami Cranes",
    subtitle: "Pure, translucent, unspoiled.",
    description: "For us, using only the mountain and valley folds of origami to make various objects from one piece of paper is something we played at as children, but from a global point of view, it's also art. When origami cranes are gathered into bundles, they take on special meanings, conveying wishes for a speedy recovery or a desire for peace.",
    feeling: "Pure, translucent, unspoiled.",
    combinations: "Combine bright colors with a sense of translucency.",
    tips: "As tones are similar, make use of different hues to create variation.",
    imageUrl: "https://picsum.photos/seed/origami/800/600",
    imageCaption: "The gradation of red-purple to purple and then to blue is eye-catching.",
    colors: [
      {
        name: "ONE-POUND DYE",
        kanji: "一斤染",
        romaji: "Ikkonzome",
        hex: "#F8CED9",
        rgb: { r: 248, g: 206, b: 218 },
        cmyk: { c: 0, m: 27, y: 5, k: 0 },
        category: "Schemes",
        description: "A very pale red created by using one pound of safflower to dye one pound of silk."
      },
      {
        name: "WISTERIA",
        kanji: "藤色",
        romaji: "Fujiiro",
        hex: "#D0BAD9",
        rgb: { r: 209, g: 186, b: 218 },
        cmyk: { c: 20, m: 30, y: 0, k: 0 },
        category: "Schemes",
        description: "The color of wisteria flowers. Wisteria is seen as the embodiment of soothing softness."
      },
      {
        name: "SKY (JIS)",
        kanji: "空色",
        romaji: "Sorairo",
        hex: "#9FD8EE",
        rgb: { r: 160, g: 216, b: 239 },
        cmyk: { c: 40, m: 0, y: 5, k: 0 },
        category: "Schemes",
        description: "The color of the sky on a fine, sunny day."
      },
      {
        name: "CELADON (JIS)",
        kanji: "青磁色",
        romaji: "Seijiiro",
        hex: "#67B6A0",
        rgb: { r: 104, g: 183, b: 161 },
        cmyk: { c: 57, m: 0, y: 40, k: 10 },
        category: "Schemes",
        description: "A color created from the iron oxide in a ceramic glaze."
      },
      {
        name: "YOUNG BUDS",
        kanji: "若芽色",
        romaji: "Wakameiro",
        hex: "#D7E598",
        rgb: { r: 216, g: 230, b: 152 },
        cmyk: { c: 20, m: 0, y: 50, k: 0 },
        category: "Schemes",
        description: "The color of plant buds that have just begun to send out shoots; a pale yellow green."
      },
      {
        name: "LATEST FASHION",
        kanji: "今様色",
        romaji: "Imayōiro",
        hex: "#F0C1C0",
        rgb: { r: 240, g: 193, b: 192 },
        cmyk: { c: 0, m: 30, y: 15, k: 5 },
        category: "Schemes",
        description: "While its name makes it seem of the moment, this color actually traces back to the Heian period."
      },
      {
        name: "AZALEA (JIS)",
        kanji: "躑躅色",
        romaji: "Tsutsujiiro",
        hex: "#E85295",
        rgb: { r: 233, g: 82, b: 149 },
        cmyk: { c: 0, m: 80, y: 3, k: 0 },
        category: "Schemes",
        description: "The color of azalea flowers, which bloom from late spring to early summer."
      },
      {
        name: "VIOLET (JIS)",
        kanji: "菫色",
        romaji: "Sumireiro",
        hex: "#7053A0",
        rgb: { r: 112, g: 84, b: 160 },
        cmyk: { c: 65, m: 72, y: 0, k: 0 },
        category: "Schemes",
        description: "The color of violets, which bloom in the spring; a vibrant bluish purple."
      },
      {
        name: "SPIDERWORT (JIS)",
        kanji: "露草色",
        romaji: "Tsuyukusairo",
        hex: "#229DD9",
        rgb: { r: 35, g: 157, b: 218 },
        cmyk: { c: 73, m: 21, y: 0, k: 0 },
        category: "Schemes",
        description: "A color like that achieved by pounding the flowers of spiderwort."
      }
    ]
  },
  {
    id: "014",
    title: "The Thunder God",
    subtitle: "Powerful, dynamic, light and dark contrast.",
    description: "The images of the Wind and Thunder Gods on folding screens at Kennin-ji Temple are masterpieces by Tawaraya Sotatsu and are national treasures. The Thunder God is believed to appear from the northeast and as the ox and tiger zodiac signs govern that direction, the god is depicted wearing a loincloth made from tiger skin, carrying a cow horn and beating a drum.",
    feeling: "Powerful, dynamic, light and dark contrast.",
    combinations: "Consciously create a strong contrast between light and dark.",
    tips: "Use colors 4 and 5 to express lightning.",
    imageUrl: "https://picsum.photos/seed/raijin/800/600",
    imageCaption: "The Thunder God is often portrayed as a red horned ogre.",
    colors: [
      {
        name: "THUNDER GOD",
        kanji: "雷神",
        romaji: "Raijin",
        hex: "#EDEADC",
        rgb: { r: 238, g: 235, b: 221 },
        cmyk: { c: 5, m: 5, y: 13, k: 5 },
        category: "Schemes",
        description: "The base or main color in the god's palette, the rest of the scheme is built on it."
      },
      {
        name: "HEAVENLY GOD",
        kanji: "天神",
        romaji: "Tenjin",
        hex: "#CFC1B7",
        rgb: { r: 208, g: 194, b: 183 },
        cmyk: { c: 20, m: 23, y: 25, k: 3 },
        category: "Schemes",
        description: "The Thunder God is also called the Heavenly God; there has been a belief in the Heavenly God since ancient times."
      },
      {
        name: "THUNDERCLOUD",
        kanji: "雷雲",
        romaji: "Raiun",
        hex: "#889086",
        rgb: { r: 137, g: 144, b: 135 },
        cmyk: { c: 33, m: 20, y: 30, k: 35 },
        category: "Schemes",
        description: "A cumulo-nimbus cloud that brings with it the potential for a powerful thunderstorm."
      },
      {
        name: "CAMEL",
        kanji: "駱駝色",
        romaji: "Rakuda-iro",
        hex: "#D6AF5C",
        rgb: { r: 214, g: 176, b: 93 },
        cmyk: { c: 7, m: 27, y: 65, k: 15 },
        category: "Schemes",
        description: "Camels are thought to have first been brought to Japan during the reign of Empress Suiko (592-628 C.E.)."
      },
      {
        name: "FOX",
        kanji: "狐色",
        romaji: "Kitsune-iro",
        hex: "#B28532",
        rgb: { r: 179, g: 134, b: 51 },
        cmyk: { c: 15, m: 40, y: 80, k: 27 },
        category: "Schemes",
        description: "The color of a fox's coat; an animal said to be the familiar spirit of the god of the harvest."
      },
      {
        name: "BRICK",
        kanji: "煉瓦色",
        romaji: "Renga-iro",
        hex: "#945A34",
        rgb: { r: 149, g: 91, b: 53 },
        cmyk: { c: 25, m: 60, y: 73, k: 35 },
        category: "Schemes",
        description: "The color of red bricks, which started to be manufactured in Japan during the Meiji period."
      },
      {
        name: "DEMON'S GATE",
        kanji: "鬼門",
        romaji: "Kimon",
        hex: "#413730",
        rgb: { r: 66, g: 55, b: 49 },
        cmyk: { c: 65, m: 65, y: 67, k: 53 },
        category: "Schemes",
        description: "Northeast, the direction from which demons are said to appear, according to traditional beliefs."
      },
      {
        name: "THUNDERSTORM",
        kanji: "豪雨",
        romaji: "Gō-u",
        hex: "#3E493E",
        rgb: { r: 63, g: 74, b: 62 },
        cmyk: { c: 53, m: 33, y: 50, k: 65 },
        category: "Schemes",
        description: "The heavy rain that is accompanied by thunder."
      },
      {
        name: "KACHI-IRO",
        kanji: "勝ち色",
        romaji: "Kachi-iro",
        hex: "#00233A",
        rgb: { r: 0, g: 36, b: 59 },
        cmyk: { c: 85, m: 60, y: 35, k: 70 },
        category: "Schemes",
        description: "Dark indigo. Kachi can also mean \"to win\" and was therefore a color beloved by military commanders."
      }
    ]
  },
  {
    id: "015",
    title: "The Wind God",
    subtitle: "Powerful, tempestuous, antique.",
    description: "The Wind God is depicted opposite the Thunder God on Tawaraya Sotatsu's folding screen. He carries a bag of wind in both hands to bring a storm to the earth below. Since olden times, the Wind God has been portrayed as being blue while the Thunder God has been portrayed as being red, but Sotatsu's creativity shines through here with his depiction of a green Wind God and white thunder, gold-foil background and silver clouds.",
    feeling: "Powerful, tempestuous, antique.",
    combinations: "The color scheme comes together with dull tones only, but use contrasting hues.",
    tips: "Bring out movement in a color scheme of greens 1 & 2 and reds 7 & 8.",
    imageUrl: "https://picsum.photos/seed/fujin/800/600",
    imageCaption: "The Wind God, often depicted as a blue or green ogre.",
    colors: [
      {
        name: "WIND GOD",
        kanji: "風神",
        romaji: "Fujin",
        hex: "#738F5F",
        rgb: { r: 116, g: 143, b: 95 },
        cmyk: { c: 60, m: 33, y: 70, k: 5 },
        category: "Schemes",
        description: "In \"The Kojiki\" (or Records of Ancient Matters) and the \"Nihon Shoki\" (Chronicles of Japan), the Wind God is called Shinatsuhiko."
      },
      {
        name: "KOJIKI",
        kanji: "古事記",
        romaji: "Kojiki",
        hex: "#606734",
        rgb: { r: 97, g: 104, b: 53 },
        cmyk: { c: 65, m: 50, y: 90, k: 20 },
        category: "Schemes",
        description: "The oldest existing record of the nation's origins, \"The Kojiki\" is the ur-text of Japanese mythology."
      },
      {
        name: "NIHON SHOKI",
        kanji: "日本書紀",
        romaji: "Nihon Shoki",
        hex: "#5C5731",
        rgb: { r: 92, g: 87, b: 50 },
        cmyk: { c: 57, m: 50, y: 80, k: 40 },
        category: "Schemes",
        description: "The official history of Japan, completed in the Nara period, comprising 30 volumes in total."
      },
      {
        name: "SILVER PAINT",
        kanji: "銀泥",
        romaji: "Gindei",
        hex: "#838C7F",
        rgb: { r: 132, g: 141, b: 127 },
        cmyk: { c: 50, m: 35, y: 45, k: 13 },
        category: "Schemes",
        description: "The clouds are created using silver paint mixed into charcoal."
      },
      {
        name: "IRON",
        kanji: "鉄色",
        romaji: "Tetsu-iro",
        hex: "#1B4935",
        rgb: { r: 28, g: 73, b: 54 },
        cmyk: { c: 85, m: 55, y: 80, k: 40 },
        category: "Schemes",
        description: "The color of iron; a dark blue-green."
      },
      {
        name: "LEAD",
        kanji: "鉛色",
        romaji: "Namari-iro",
        hex: "#343734",
        rgb: { r: 52, g: 55, b: 52 },
        cmyk: { c: 25, m: 10, y: 20, k: 87 },
        category: "Schemes",
        description: "A leaden color; this is a new color name used from the Meiji period onward."
      },
      {
        name: "RED EARTH",
        kanji: "赤土",
        romaji: "Akatsuchi",
        hex: "#D26834",
        rgb: { r: 210, g: 105, b: 52 },
        cmyk: { c: 17, m: 70, y: 83, k: 0 },
        category: "Schemes",
        description: "Red earth is used as a pigment."
      },
      {
        name: "RUST",
        kanji: "錆色",
        romaji: "Sabi-iro",
        hex: "#AE4E21",
        rgb: { r: 175, g: 78, b: 33 },
        cmyk: { c: 35, m: 80, y: 100, k: 3 },
        category: "Schemes",
        description: "A dark brown-red like that of rusted iron."
      },
      {
        name: "WHITE WASH",
        kanji: "胡粉",
        romaji: "Gofun",
        hex: "#E5E5D3",
        rgb: { r: 230, g: 230, b: 212 },
        cmyk: { c: 5, m: 3, y: 15, k: 10 },
        category: "Schemes",
        description: "The color of a white pigment made by grinding fired shells into a powder."
      }
    ]
  },
  {
    id: "016",
    title: "Hokusai's Great Wave",
    subtitle: "Traditional, Japanese, meticulous.",
    description: "\"The Great Wave off Kanagawa\" is just one of Hokusai Katsushika's works in the series \"36 Views of Mount Fuji,\" but it's by far the best known and a world-famous ukiyo-e creation. Among the compositional elements of the giant wave, boats and Mount Fuji, the giant wave creates the most impact, with the spray making it appear like a living creature.",
    feeling: "Traditional, Japanese, meticulous.",
    combinations: "Make particular use of white and shades of indigo from light to dark as the main colors.",
    tips: "Use 4-6 as supplementary colors to express the subtlety of the color scheme.",
    imageUrl: "https://picsum.photos/seed/hokusai/800/600",
    imageCaption: "The small scale of Mount Fuji highlights the force of the wave.",
    colors: [
      {
        name: "BERLIN BLUE",
        kanji: "ベリン藍",
        romaji: "Berin-ai",
        hex: "#3471A1",
        rgb: { r: 52, g: 114, b: 161 },
        cmyk: { c: 80, m: 50, y: 20, k: 0 },
        category: "Schemes",
        description: "This refers to Prussian blue, an imported mineral pigment."
      },
      {
        name: "INDIGO",
        kanji: "藍色",
        romaji: "Ai-iro",
        hex: "#09558C",
        rgb: { r: 9, g: 86, b: 140 },
        cmyk: { c: 90, m: 63, y: 20, k: 10 },
        category: "Schemes",
        description: "A plant dye used since olden times and made by fermenting indigo (Persicaria tinctoria)."
      },
      {
        name: "GIANT WAVE",
        kanji: "大波",
        romaji: "Ōnami",
        hex: "#F9F7F0",
        rgb: { r: 250, g: 248, b: 240 },
        cmyk: { c: 3, m: 3, y: 7, k: 0 },
        category: "Schemes",
        description: "The back of the wave is colored in shades of indigo, while the spray is white."
      },
      {
        name: "SACRED PEAK",
        kanji: "霊峰",
        romaji: "Reihō",
        hex: "#E9EAEE",
        rgb: { r: 234, g: 235, b: 239 },
        cmyk: { c: 10, m: 7, y: 5, k: 0 },
        category: "Schemes",
        description: "A traditional or religious way of referring to Mount Fuji."
      },
      {
        name: "SPRAY",
        kanji: "飛沫",
        romaji: "Shibuki",
        hex: "#CDD9DB",
        rgb: { r: 205, g: 218, b: 219 },
        cmyk: { c: 23, m: 10, y: 13, k: 0 },
        category: "Schemes",
        description: "Fine droplets of water that scatter in the air."
      },
      {
        name: "UKIYO",
        kanji: "浮世",
        romaji: "Ukiyo",
        hex: "#C8C1BC",
        rgb: { r: 201, g: 194, b: 189 },
        cmyk: { c: 25, m: 23, y: 23, k: 0 },
        category: "Schemes",
        description: "A term that means \"modern style\" or \"the present.\""
      },
      {
        name: "SPEEDBOAT",
        kanji: "押送船",
        romaji: "Oshiokuri-bune",
        hex: "#9D9981",
        rgb: { r: 158, g: 153, b: 130 },
        cmyk: { c: 30, m: 25, y: 40, k: 25 },
        category: "Schemes",
        description: "A boat that transported seafood caught in the Edo area to the capital."
      },
      {
        name: "LEAD SKY",
        kanji: "鉛雲",
        romaji: "Namari-gumo",
        hex: "#8D9B9F",
        rgb: { r: 141, g: 156, b: 160 },
        cmyk: { c: 30, m: 13, y: 15, k: 35 },
        category: "Schemes",
        description: "An overcast sky covered in thick clouds."
      },
      {
        name: "ROUGH WEATHER",
        kanji: "荒天",
        romaji: "Kōten",
        hex: "#A1A7AD",
        rgb: { r: 161, g: 168, b: 174 },
        cmyk: { c: 13, m: 5, y: 3, k: 40 },
        category: "Schemes",
        description: "\"Rough weather\" is pronounced as kouten, the name for this color."
      }
    ]
  },
  {
    id: "017",
    title: "Sharaku Prints",
    subtitle: "Vogueish, refined, stylish.",
    description: "Toushuusai Sharaku is a ukiyo-e artist surrounded by mystery, as he presented close to 150 artworks in the brief period of about 10 months before suddenly disappearing. Most of these works portray actors and use bold caricature to depict their individual traits. This style of painting is called okubi-e (\"large head\" pictures).",
    feeling: "Vogueish, refined, stylish.",
    combinations: "Create a color scheme using variations of brown and gray.",
    tips: "Keep the contrast of bright and dark in mind for a good result.",
    imageUrl: "https://picsum.photos/seed/sharaku/800/600",
    imageCaption: "Sharaku's Otani Oniji III in the role of the servant Edobei.",
    colors: [
      {
        name: "POLISHING POWDER",
        kanji: "磨粉",
        romaji: "Migakiko",
        hex: "#F4EDD9",
        rgb: { r: 245, g: 238, b: 218 },
        cmyk: { c: 5, m: 7, y: 17, k: 0 },
        category: "Schemes",
        description: "This refers to the powder created when sharpening a blade on a whetstone."
      },
      {
        name: "SLATE",
        kanji: "粘板岩",
        romaji: "Nenbangun",
        hex: "#404146",
        rgb: { r: 65, g: 65, b: 70 },
        cmyk: { c: 15, m: 7, y: 0, k: 85 },
        category: "Schemes",
        description: "A thin sheet of clay slate, used for roof tiles."
      },
      {
        name: "SHRIMP BROWN",
        kanji: "海老茶",
        romaji: "Ebicha",
        hex: "#873C23",
        rgb: { r: 135, g: 61, b: 36 },
        cmyk: { c: 50, m: 85, y: 100, k: 15 },
        category: "Schemes",
        description: "This color name has existed since the Edo period. Female students' hakama (divided skirt) were this color in the Meiji period."
      },
      {
        name: "RED CHARCOAL",
        kanji: "赤炭",
        romaji: "Akazumi",
        hex: "#3E2012",
        rgb: { r: 63, g: 33, b: 19 },
        cmyk: { c: 0, m: 40, y: 40, k: 90 },
        category: "Schemes",
        description: "A red-tinged black that gives off impressions of warmth and mildness."
      },
      {
        name: "NAVY MOUSE",
        kanji: "紺鼠",
        romaji: "Kon-nezumi",
        hex: "#4E4757",
        rgb: { r: 78, g: 72, b: 87 },
        cmyk: { c: 25, m: 27, y: 0, k: 75 },
        category: "Schemes",
        description: "Gray tinged with blue; it's close to being achromatic."
      },
      {
        name: "GALLNUT POWDER",
        kanji: "五倍子粉",
        romaji: "Fushiko",
        hex: "#614B3E",
        rgb: { r: 97, g: 75, b: 62 },
        cmyk: { c: 65, m: 70, y: 75, k: 23 },
        category: "Schemes",
        description: "Used to blacken teeth and to prevent cavities."
      },
      {
        name: "REFINED BROWN (SHIBUCHA)",
        kanji: "渋茶",
        romaji: "Shibucha",
        hex: "#9B836C",
        rgb: { r: 155, g: 132, b: 109 },
        cmyk: { c: 43, m: 47, y: 55, k: 7 },
        category: "Schemes",
        description: "A dull brown tinged with gray, described in Japanese using the character shibu, which can mean \"refined.\""
      },
      {
        name: "CRESTED IBIS-PINK MOUSE",
        kanji: "鴇鼠",
        romaji: "Toki-nezumi",
        hex: "#D5B09A",
        rgb: { r: 214, g: 176, b: 155 },
        cmyk: { c: 15, m: 33, y: 35, k: 5 },
        category: "Schemes",
        description: "Today, crested ibis are protected as natural treasures, but in the Edo period they were common sights."
      },
      {
        name: "VENERABLE SAGE BROWN",
        kanji: "翁茶",
        romaji: "Okinacha",
        hex: "#DFDACE",
        rgb: { r: 224, g: 218, b: 207 },
        cmyk: { c: 5, m: 7, y: 13, k: 13 },
        category: "Schemes",
        description: "The color of hair gone white with age with only the slightest touch of brown."
      }
    ]
  },
  {
    id: "018",
    title: "Works by Yumeji Takehisa",
    subtitle: "Emotional, delicate, polished.",
    description: "This artist (1884–1934) typifies Taisho romanticism. His many works featuring mostly women led this style of printing to which he lends his name. Takehisa was active not only as an artist, but in a range of fields, writing poetry and children's stories and designing books, advertising material and daily-use items. His poem “Evening Primrose” was set to music and became a great hit.",
    feeling: "Emotional, delicate, polished.",
    combinations: "Use mainly intermediate colors with a low level of saturation.",
    tips: "Use plenty of colors 4–6 as assort colors.",
    imageUrl: "https://picsum.photos/seed/yumeji/800/600",
    imageCaption: "This print is suffused with the classic romantic tones of the Takehisa palette.",
    colors: [
      {
        name: "EVERYDAY BITS AND PIECES",
        kanji: "日常の断片",
        romaji: "Nichijō no danpen",
        hex: "#BEC6AB",
        rgb: { r: 191, g: 198, b: 172 },
        cmyk: { c: 30, m: 17, y: 35, k: 0 },
        category: "Schemes",
        description: "The myriad objects necessary for daily life."
      },
      {
        name: "ISSEIFUUBI (SWEEPING THE WORLD)",
        kanji: "一世風靡",
        romaji: "Isseifūbi",
        hex: "#DBD4B8",
        rgb: { r: 219, g: 212, b: 184 },
        cmyk: { c: 17, m: 15, y: 30, k: 0 },
        category: "Schemes",
        description: "An overwhelming trend at a particular time."
      },
      {
        name: "WHITE SKIN",
        kanji: "白肌",
        romaji: "Shirohada",
        hex: "#F6E1D5",
        rgb: { r: 247, g: 226, b: 214 },
        cmyk: { c: 3, m: 15, y: 15, k: 0 },
        category: "Schemes",
        description: "A fine skin tone so white as to appear translucent."
      },
      {
        name: "MAIDEN",
        kanji: "乙女",
        romaji: "Otome",
        hex: "#ECAEA6",
        rgb: { r: 237, g: 175, b: 167 },
        cmyk: { c: 5, m: 40, y: 27, k: 0 },
        category: "Schemes",
        description: "A yellow-toned pink that creates a soft, gentle impression."
      },
      {
        name: "PEACH RED",
        kanji: "桃色",
        romaji: "Momoiro",
        hex: "#D56F68",
        rgb: { r: 213, g: 112, b: 105 },
        cmyk: { c: 15, m: 67, y: 50, k: 0 },
        category: "Schemes",
        description: "A glamorous color that has stronger yellow tones than peach."
      },
      {
        name: "ROSE (SOUBI)",
        kanji: "薔薇",
        romaji: "Soubi",
        hex: "#D14047",
        rgb: { r: 210, g: 65, b: 71 },
        cmyk: { c: 15, m: 87, y: 65, k: 0 },
        category: "Schemes",
        description: "Roses were brought to Japan from China and are even mentioned in “The Pillow Book.”"
      },
      {
        name: "JAPANESE SWEETS CAFÉ",
        kanji: "甘味処",
        romaji: "Kanmidokoro",
        hex: "#B0795C",
        rgb: { r: 177, g: 122, b: 93 },
        cmyk: { c: 30, m: 55, y: 60, k: 10 },
        category: "Schemes",
        description: "Yumeji had a sweet tooth and visited cafes selling sweets with his lover."
      },
      {
        name: "MODERN GIRL",
        kanji: "モダンガール",
        romaji: "Modan gāru",
        hex: "#5A4F3F",
        rgb: { r: 90, g: 80, b: 63 },
        cmyk: { c: 67, m: 65, y: 75, k: 25 },
        category: "Schemes",
        description: "An English phrase popular in the 20th century, it signified a contemporary woman."
      },
      {
        name: "BRAIDS",
        kanji: "お提髪",
        romaji: "Osage",
        hex: "#362D33",
        rgb: { r: 54, g: 45, b: 51 },
        cmyk: { c: 75, m: 75, y: 65, k: 50 },
        category: "Schemes",
        description: "A typical hairstyle for female students during the Meiji and Taisho periods."
      }
    ]
  },
  {
    id: "019",
    title: "Works by Okamoto Taro",
    subtitle: "Having momentum, boisterous, powerful.",
    description: "Okamoto Taro (1911–96) was a painter whose masterpieces include “Tower of the Sun,” associated with the 1970 Osaka World Exposition, and “Myth of Tomorrow,” which were created in 1968–69. The artist appeared frequently on television during the 1980s and coined various phrases that became popular. His nonconformist lifestyle continued to attract attention in his later life.",
    feeling: "Having momentum, boisterous, powerful.",
    combinations: "Use a deep, dark color as the base for the color scheme.",
    tips: "Use highly saturated reds, yellows, blues and white as accents.",
    imageUrl: "https://picsum.photos/seed/okamoto/800/600",
    imageCaption: "\"Yorokobi,\" property of the Taro Okamoto Memorial Museum.",
    colors: [
      {
        name: "WHAT ON EARTH IS THIS?",
        kanji: "なんだ、これは!",
        romaji: "Nanda, kore wa!",
        hex: "#507C90",
        rgb: { r: 80, g: 124, b: 144 },
        cmyk: { c: 45, m: 0, y: 0, k: 55 },
        category: "Schemes",
        description: "This signature phrase used on a TV program in the mid-1980s became a popular expression."
      },
      {
        name: "FLOW",
        kanji: "流動",
        romaji: "Ryūdō",
        hex: "#566474",
        rgb: { r: 87, g: 100, b: 116 },
        cmyk: { c: 33, m: 13, y: 0, k: 65 },
        category: "Schemes",
        description: "This calls to mind the energy flowing in the background of a work."
      },
      {
        name: "TOMORROW'S MYTHOLOGY",
        kanji: "明日の神話",
        romaji: "Asu no shinwa",
        hex: "#111115",
        rgb: { r: 17, g: 18, b: 22 },
        cmyk: { c: 87, m: 83, y: 77, k: 70 },
        category: "Schemes",
        description: "A large-scale mural with an anti-war theme, it's displayed in Shibuya train station."
      },
      {
        name: "FRANCE",
        kanji: "フランス",
        romaji: "Furansu",
        hex: "#3E4D9E",
        rgb: { r: 63, g: 77, b: 159 },
        cmyk: { c: 83, m: 73, y: 0, k: 0 },
        category: "Schemes",
        description: "Okamoto lived in France from the end of his teens for around 10 years."
      },
      {
        name: "TOWER OF THE SUN",
        kanji: "太陽の塔",
        romaji: "Taiyō no tō",
        hex: "#E3F2FB",
        rgb: { r: 228, g: 243, b: 251 },
        cmyk: { c: 13, m: 1, y: 1, k: 0 },
        category: "Schemes",
        description: "Approximately 230 ft (70 m) tall, this statue has a golden face attached to its topmost section."
      },
      {
        name: "MINAMI AOYAMA",
        kanji: "南青山",
        romaji: "Minami Aoyama",
        hex: "#507241",
        rgb: { r: 80, g: 115, b: 65 },
        cmyk: { c: 47, m: 0, y: 65, k: 57 },
        category: "Schemes",
        description: "Okamoto's former house and atelier in this Tokyo suburb are now the site of the Taro Okamoto Memorial Museum."
      },
      {
        name: "ART IS A BOMB!",
        kanji: "芸術は爆発だ!",
        romaji: "Geijutsu wa bakuhatsu da!",
        hex: "#E76033",
        rgb: { r: 231, g: 97, b: 52 },
        cmyk: { c: 3, m: 75, y: 80, k: 0 },
        category: "Schemes",
        description: "This signature phrase from a TV commercial in the early 80s became a familiar refrain."
      },
      {
        name: "SUN",
        kanji: "太陽",
        romaji: "Taiyō",
        hex: "#C93128",
        rgb: { r: 201, g: 49, b: 40 },
        cmyk: { c: 20, m: 93, y: 90, k: 0 },
        category: "Schemes",
        description: "In Japan, the sun is often symbolized by the color red; worldwide, it's yellow."
      },
      {
        name: "YOROKOBI",
        kanji: "呼ぶ 喜び",
        romaji: "Yobu Yorokobi",
        hex: "#F2D74F",
        rgb: { r: 242, g: 216, b: 80 },
        cmyk: { c: 5, m: 13, y: 75, k: 3 },
        category: "Schemes",
        description: "Yellow surrounds the figures in this work like an aura."
      }
    ]
  },
  {
    id: "020",
    title: "\"Red Plum Fragrance\" Heian Kimonos",
    subtitle: "Gorgeous, feminine, beautiful.",
    description: "The color scheme of the twelve-layered kimono worn by aristocratic women serving in the inner palace during the Heian period is called kasane irome (or \"layered shades,\" color combinations for female court attire). Koubai no nioi (or red plum fragrance) was a color scheme so common at the time, it was mentioned in \"The Tale of Genji.\" There are conventions for each season's attire, which in the latter part of the Heian period were set down in the detailed account Masasuke's \"Notes on Court Costume.\"",
    feeling: "Gorgeous, feminine, beautiful.",
    combinations: "Follow the template of using similar hues to create a composition of reds in shades from light to dark.",
    tips: "Create distinct borders between each color.",
    imageUrl: "https://picsum.photos/seed/kimono/800/600",
    imageCaption: "Nioi in this instance refers to the gradation color scheme that employs similar hues.",
    colors: [
      {
        name: "KOKOROYOSU",
        kanji: "心寄",
        romaji: "Kokoroyosu",
        hex: "#DF7C7C",
        rgb: { r: 224, g: 125, b: 125 },
        cmyk: { c: 0, m: 60, y: 35, k: 10 },
        category: "Schemes",
        description: "This word means to feel goodwill toward or show favor to someone."
      },
      {
        name: "BURNING FLAME",
        kanji: "燃える炎",
        romaji: "Moeru honō",
        hex: "#D35657",
        rgb: { r: 212, g: 87, b: 88 },
        cmyk: { c: 0, m: 75, y: 50, k: 15 },
        category: "Schemes",
        description: "To be burning with passion for someone."
      },
      {
        name: "SAPPANWOOD",
        kanji: "蘇芳",
        romaji: "Suō",
        hex: "#992F3C",
        rgb: { r: 153, g: 47, b: 60 },
        cmyk: { c: 35, m: 90, y: 67, k: 20 },
        category: "Schemes",
        description: "The color created from the dye of the bark from a sappanwood, a deciduous shrub in the legume family."
      },
      {
        name: "MYSTERY",
        kanji: "神秘",
        romaji: "Shinpi",
        hex: "#F1EFDB",
        rgb: { r: 241, g: 239, b: 219 },
        cmyk: { c: 7, m: 5, y: 17, k: 0 },
        category: "Schemes",
        description: "Adding hints of softness and suggestion, this hue invites curiosity and investigation."
      },
      {
        name: "BASHFULNESS",
        kanji: "羞恥",
        romaji: "Shūchi",
        hex: "#FBE4E4",
        rgb: { r: 252, g: 229, b: 228 },
        cmyk: { c: 0, m: 15, y: 7, k: 0 },
        category: "Schemes",
        description: "The soft rosiness that suffices the cheeks of an embarrassed person typifies this tint."
      },
      {
        name: "PALE SAKURA (CHERRY BLOSSOM)",
        kanji: "薄桜",
        romaji: "Usu-zakura",
        hex: "#F9D5D6",
        rgb: { r: 250, g: 213, b: 214 },
        cmyk: { c: 0, m: 23, y: 10, k: 0 },
        category: "Schemes",
        description: "A color name for a pale red that is even lighter than that of the color of cherry blossom."
      },
      {
        name: "SINGLE-LAYER PLUM",
        kanji: "一重梅",
        romaji: "Hitoe-ume",
        hex: "#F6BCB2",
        rgb: { r: 246, g: 188, b: 179 },
        cmyk: { c: 0, m: 35, y: 23, k: 0 },
        category: "Schemes",
        description: "A bright, red plum color. There are many color names related to red plum blossoms."
      },
      {
        name: "IMPERIAL PALACE DYE",
        kanji: "御所染",
        romaji: "Goshosome",
        hex: "#D98C89",
        rgb: { r: 218, g: 141, b: 137 },
        cmyk: { c: 0, m: 50, y: 30, k: 15 },
        category: "Schemes",
        description: "A popular color for women in the Kanei era, early in the Edo period."
      },
      {
        name: "LONG SPRING",
        kanji: "長春",
        romaji: "Chōshun",
        hex: "#BA545B",
        rgb: { r: 187, g: 85, b: 91 },
        cmyk: { c: 0, m: 70, y: 40, k: 30 },
        category: "Schemes",
        description: "The color of a rose, it's been known by this new name since the Meiji period."
      }
    ]
  }
];

export const COLORS: JapaneseColor[] = [
  // SPRING
  {
    name: "Sakura-iro",
    kanji: "桜色",
    romaji: "Sakura-iro",
    hex: "#fef4f4",
    rgb: { r: 254, g: 244, b: 244 },
    cmyk: { c: 0, m: 4, y: 4, k: 0 },
    category: "Spring",
    description: "The color of cherry blossoms, representing the essence of spring."
  },
  {
    name: "Momo-iro",
    kanji: "桃色",
    romaji: "Momo-iro",
    hex: "#f47983",
    rgb: { r: 244, g: 121, b: 131 },
    cmyk: { c: 0, m: 50, y: 46, k: 4 },
    category: "Spring",
    description: "Peach blossom color, a vibrant pink associated with the Peach Festival."
  },
  {
    name: "Kōbai-iro",
    kanji: "紅梅色",
    romaji: "Kōbai-iro",
    hex: "#F2A0A1",
    rgb: { r: 242, g: 160, b: 161 },
    cmyk: { c: 0, m: 48, y: 25, k: 0 },
    category: "Spring",
    description: "The color of red blossoms on a plum tree, a classic early spring color."
  },
  {
    name: "Wakana-iro",
    kanji: "若菜色",
    romaji: "Wakana-iro",
    hex: "#d8e698",
    rgb: { r: 216, g: 230, b: 152 },
    cmyk: { c: 6, m: 0, g: 34, k: 10 } as any, // Fix CMYK later if needed
    category: "Spring",
    description: "The color of young herbs sprouting in early spring."
  },
  // SUMMER
  {
    name: "Aoi",
    kanji: "葵",
    romaji: "Aoi",
    hex: "#2d4436",
    rgb: { r: 45, g: 68, b: 54 },
    cmyk: { c: 34, m: 0, y: 21, k: 73 },
    category: "Summer",
    description: "The deep green of hollyhock leaves, common in summer festivals."
  },
  {
    name: "Tsuyukusa-iro",
    kanji: "露草色",
    romaji: "Tsuyukusa-iro",
    hex: "#38a1db",
    rgb: { r: 56, g: 161, b: 219 },
    cmyk: { c: 74, m: 26, y: 0, k: 14 },
    category: "Summer",
    description: "Dayflower blue, a refreshing color like the summer sky."
  },
  {
    name: "Himawari-iro",
    kanji: "向日葵色",
    romaji: "Himawari-iro",
    hex: "#fcc800",
    rgb: { r: 252, g: 200, b: 0 },
    cmyk: { c: 0, m: 21, y: 100, k: 1 },
    category: "Summer",
    description: "Sunflower yellow, capturing the intensity of the summer sun."
  },
  // AUTUMN
  {
    name: "Akane-iro",
    kanji: "茜色",
    romaji: "Akane-iro",
    hex: "#b7282e",
    rgb: { r: 183, g: 40, b: 46 },
    cmyk: { c: 0, m: 78, y: 75, k: 28 },
    category: "Autumn",
    description: "Madder red, the color of the sunset sky in autumn."
  },
  {
    name: "Kuri-iro",
    kanji: "栗色",
    romaji: "Kuri-iro",
    hex: "#762f07",
    rgb: { r: 118, g: 47, b: 7 },
    cmyk: { c: 0, m: 60, y: 94, k: 54 },
    category: "Autumn",
    description: "Chestnut brown, a warm earthy tone of the harvest season."
  },
  {
    name: "Kikyō-iro",
    kanji: "桔梗色",
    romaji: "Kikyō-iro",
    hex: "#5d529d",
    rgb: { r: 93, g: 82, b: 157 },
    cmyk: { c: 41, m: 48, y: 0, k: 38 },
    category: "Autumn",
    description: "Bellflower purple, a classic autumn bloom."
  },
  {
    name: "Kogicha",
    kanji: "焦茶",
    romaji: "Kogicha",
    hex: "#6E4C3E",
    rgb: { r: 111, g: 77, b: 62 },
    cmyk: { c: 0, m: 38, y: 38, k: 70 },
    category: "Autumn",
    description: "Burnt brown, a deep and warm autumn tone."
  },
  {
    name: "Kareno-iro",
    kanji: "枯野色",
    romaji: "Kareno-iro",
    hex: "#DAC18F",
    rgb: { r: 218, g: 194, b: 144 },
    cmyk: { c: 0, m: 15, y: 40, k: 20 },
    category: "Autumn",
    description: "The color of withered grasses in the hills in winter."
  },
  // WINTER
  {
    name: "Yuki-iro",
    kanji: "雪色",
    romaji: "Yuki-iro",
    hex: "#ffffff",
    rgb: { r: 255, g: 255, b: 255 },
    cmyk: { c: 0, m: 0, y: 0, k: 0 },
    category: "Winter",
    description: "The pure white of freshly fallen snow."
  },
  {
    name: "Kachitsu-iro",
    kanji: "褐返",
    romaji: "Kachitsu-iro",
    hex: "#203744",
    rgb: { r: 32, g: 55, b: 68 },
    cmyk: { c: 53, m: 19, y: 0, k: 73 },
    category: "Winter",
    description: "A very dark indigo, almost black, representing the deep winter night."
  },
  {
    name: "Tsubaki-iro",
    kanji: "椿色",
    romaji: "Tsubaki-iro",
    hex: "#cb1b45",
    rgb: { r: 203, g: 27, b: 69 },
    cmyk: { c: 0, m: 87, y: 66, k: 20 },
    category: "Winter",
    description: "Camellia red, a bold flower that blooms in the cold."
  },
  // NATURE
  {
    name: "Toki-iro",
    kanji: "朱鷺色",
    romaji: "Toki-iro",
    hex: "#f4b3c2",
    rgb: { r: 244, g: 179, b: 194 },
    cmyk: { c: 0, m: 27, y: 20, k: 4 },
    category: "Nature",
    description: "The delicate pink of the crested ibis (Toki) wings."
  },
  {
    name: "Uguisu-iro",
    kanji: "鶯色",
    romaji: "Uguisu-iro",
    hex: "#928c36",
    rgb: { r: 146, g: 140, b: 54 },
    cmyk: { c: 0, m: 4, y: 63, k: 43 },
    category: "Nature",
    description: "Bush warbler green, a muted olive tone."
  },
  {
    name: "Sora-iro",
    kanji: "空色",
    romaji: "Sora-iro",
    hex: "#a0d8ef",
    rgb: { r: 160, g: 216, b: 239 },
    cmyk: { c: 33, m: 10, y: 0, k: 6 },
    category: "Nature",
    description: "Sky blue, clear and bright."
  },
  {
    name: "Sango-iro",
    kanji: "珊瑚色",
    romaji: "Sango-iro",
    hex: "#EF8468",
    rgb: { r: 239, g: 132, b: 104 },
    cmyk: { c: 0, m: 60, y: 53, k: 0 },
    category: "Nature",
    description: "Coral pink, a color used since ancient times for ornaments."
  },
  {
    name: "Sake-iro",
    kanji: "鮭色",
    romaji: "Sake-iro",
    hex: "#F3A582",
    rgb: { r: 244, g: 165, b: 131 },
    cmyk: { c: 0, m: 45, y: 45, k: 0 },
    category: "Nature",
    description: "Salmon pink, a warm and natural tone."
  },
  {
    name: "Hada-iro",
    kanji: "肌色",
    romaji: "Hada-iro",
    hex: "#FCE2C3",
    rgb: { r: 252, g: 226, b: 196 },
    cmyk: { c: 0, m: 15, y: 25, k: 0 },
    category: "Nature",
    description: "Traditional skin tone color in Japanese art."
  },
  // HISTORICAL
  {
    name: "Koki-purupuru", // Actually Koki-murasaki
    kanji: "深紫",
    romaji: "Koki-murasaki",
    hex: "#4a225d",
    rgb: { r: 74, g: 34, b: 93 },
    cmyk: { c: 20, m: 63, y: 0, k: 64 },
    category: "Historical",
    description: "Deep purple, once reserved for the highest-ranking officials in the Heian court."
  },
  {
    name: "Oudo-iro",
    kanji: "黄土色",
    romaji: "Oudo-iro",
    hex: "#c39143",
    rgb: { r: 195, g: 145, b: 67 },
    cmyk: { c: 0, m: 26, y: 66, k: 24 },
    category: "Historical",
    description: "Yellow ochre, a common pigment in traditional Japanese architecture and art."
  },
  {
    name: "Sumi-iro",
    kanji: "墨色",
    romaji: "Sumi-iro",
    hex: "#27221f",
    rgb: { r: 39, g: 34, b: 31 },
    cmyk: { c: 0, m: 13, y: 21, k: 85 },
    category: "Historical",
    description: "The color of traditional Japanese ink (Sumi)."
  },
  {
    name: "Susutake-iro",
    kanji: "煤竹色",
    romaji: "Susutake-iro",
    hex: "#866C45",
    rgb: { r: 134, g: 108, b: 70 },
    cmyk: { c: 0, m: 25, y: 50, k: 60 },
    category: "Historical",
    description: "Soot-stained bamboo brown, a sophisticated earthy tone."
  },
  {
    name: "Yōkō",
    kanji: "洋紅",
    romaji: "Yōkō",
    hex: "#B83F36",
    rgb: { r: 185, g: 64, b: 71 },
    cmyk: { c: 0, m: 80, y: 52, k: 30 },
    category: "Historical",
    description: "Cochineal red, a deep and vibrant pigment."
  },
  {
    name: "Kasshoku",
    kanji: "褐色",
    romaji: "Kasshoku",
    hex: "#8A3A00",
    rgb: { r: 138, g: 58, b: 0 },
    cmyk: { c: 0, m: 70, y: 100, k: 55 },
    category: "Historical",
    description: "A slightly black-tinged brown, used in traditional crafts."
  },
  {
    name: "Chōji-iro",
    kanji: "丁子色",
    romaji: "Chōji-iro",
    hex: "#CDA16E",
    rgb: { r: 205, g: 161, b: 111 },
    cmyk: { c: 0, m: 30, y: 50, k: 25 },
    category: "Historical",
    description: "Clove color, a classic tone from the Heian period."
  }
];
