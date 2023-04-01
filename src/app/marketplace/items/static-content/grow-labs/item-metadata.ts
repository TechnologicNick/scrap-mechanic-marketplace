import { ItemMetadata } from "../../types";
import thumbnail from "./images/thumbnail.png";
import running from "./images/running.png";
import Content from "./content.mdx";

export const metadata = {
  id: "grow-labs" as const,
  title: "Grow Labs" as const,
  description:
    "Are you ready for the next level of Scrap Mechanic? Get ready to explore the Grow Labs, a new area that's waiting for you in the upcoming Chapter 2 update! These subterranean dungeons are home to swarms of Green and Yellow Tapebots, offering thrilling combat experiences and fantastic loot for the bravest adventurers.",
  price: 900 as const,
  originalPrice: 1100 as const,
  rarity: "legendary",
  thumbnail: thumbnail,
  images: [thumbnail, running],
  content: Content,
} satisfies ItemMetadata;
