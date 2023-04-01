import { ItemMetadata } from "../../types";
import thumbnail from "./images/component-kits.png";
import Content from "./content.mdx";

const description =
  "Are you an avid player of the video game Scrap Mechanic? Do you want to gain access to premium items that can enhance your gaming experience? If so, then you need Wonk Credits! Wonk Credits are the premium currency used in the Scrap Mechanic marketplace to purchase a wide variety of items.";

export const metadata = [
  {
    id: "500-wonk-credits" as const,
    title: "500 Wonk Credits" as const,
    description: description,
    price: "$4.99" as const,
    rarity: "common",
    thumbnail: thumbnail,
    images: [thumbnail],
    content: Content,
  },
  {
    id: "1000-wonk-credits" as const,
    title: "1000 Wonk Credits" as const,
    description: description,
    price: "$9.99" as const,
    rarity: "uncommon",
    thumbnail: thumbnail,
    images: [thumbnail],
    content: Content,
  },
  {
    id: "2000-wonk-credits" as const,
    title: "2000 (+300 Bonus) Wonk Credits" as const,
    description: description,
    price: "$19.99" as const,
    rarity: "rare",
    thumbnail: thumbnail,
    images: [thumbnail],
    content: Content,
  },
  {
    id: "5000-wonk-credits" as const,
    title: "5000 (+900 Bonus) Wonk Credits" as const,
    description: description,
    price: "$49.99" as const,
    rarity: "epic",
    thumbnail: thumbnail,
    images: [thumbnail],
    content: Content,
  },
  {
    id: "10000-wonk-credits" as const,
    title: "10000 (+2000 Bonus) Wonk Credits" as const,
    description: description,
    price: "Your firstborn child" as const,
    rarity: "legendary",
    thumbnail: thumbnail,
    images: [thumbnail],
    content: Content,
  },
] satisfies ItemMetadata[];
