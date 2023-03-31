import { ItemMetadata } from "../../types";
import preview from "./images/preview.jpg";
import Content from "./content.mdx";

export const metadata = {
  id: "scrap-factory" as const,
  title: "Scrap Factory" as const,
  description:
    "Welcome to the exciting world of Scrap Factory, a custom game mode in Scrap Mechanic where you get to build your very own factory and become a tycoon! In this game mode, you'll start with just a few droppers and furnaces, but with hard work and determination, you'll be able to expand your factory and become a true master of the scrap industry.",
  price: 2200 as const,
  originalPrice: 2500 as const,
  rarity: "legendary",
  thumbnail: preview,
  images: [preview],
  content: Content,
} satisfies ItemMetadata;
