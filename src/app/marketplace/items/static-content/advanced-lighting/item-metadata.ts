import { ItemMetadata } from "../../types";
import fullres from "./images/fullres.png";
import Content from "./content.mdx";

export const metadata = {
  id: "advanced-lighting" as const,
  title: "Advanced Lighting" as const,
  description:
    "With Advanced Lighting, you can expect to see enhanced lighting effects, such as dynamic shadows and more realistic reflections, which bring a new level of depth to Scrap Mechanic's visuals. The improved lighting also creates a more vibrant and engaging atmosphere, allowing you to fully immerse themselves in the game's world.",
  price: 1900 as const,
  originalPrice: 2200 as const,
  rarity: "legendary",
  thumbnail: fullres,
  images: [fullres],
  content: Content,
} satisfies ItemMetadata;
