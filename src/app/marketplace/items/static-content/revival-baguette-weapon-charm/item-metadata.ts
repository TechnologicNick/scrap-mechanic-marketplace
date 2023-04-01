import { ItemMetadata } from "../../types";
import thumbnail from "./images/thumbnail.png";
import Content from "./content.mdx";

export const metadata = {
  id: "revival-baguette-weapon-charm" as const,
  title: "Revival Baguette Weapon Charm" as const,
  description:
    "Looking for a unique charm to adorn your spudguns and other weapons in Scrap Mechanic? Look no further than the Revival Baguette Weapon Charm! This charming add-on is designed to resemble the Revival Baguette, a delicious loaf that can be used to bring yourself back to life after taking fatal damage in the game.",
  price: 500 as const,
  originalPrice: 700 as const,
  rarity: "epic",
  thumbnail: thumbnail,
  images: [thumbnail],
  content: Content,
} satisfies ItemMetadata;
