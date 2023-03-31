import { ItemMetadata } from "../../types";
import thumbnail from "./images/thumbnail.png";
import Content from "./content.mdx";

export const metadata = {
  id: "duck-souvenir" as const,
  title: "Duck Souvenir" as const,
  description:
    "Looking for a cute addition to your Scrap Mechanic base or vehicle? Check out the Duck Souvenir! This charming statuette features a delightful baby duck, perfect for adding a touch of whimsy to your surroundings.",
  price: 500 as const,
  originalPrice: 700 as const,
  rarity: "epic",
  thumbnail: thumbnail,
  images: [thumbnail],
  content: Content,
} satisfies ItemMetadata;
