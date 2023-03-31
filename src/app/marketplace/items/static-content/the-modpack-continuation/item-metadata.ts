import { ItemMetadata } from "../../types";
import preview from "./images/preview.jpg";
import Content from "./content.mdx";

export const metadata = {
  id: "the-modpack-continuation" as const,
  title: "The Modpack Continuation" as const,
  description:
    "With the The Modpack Continuation mod, you'll have access to a range of powerful number logic parts that allow you to process analog signals with ease. Say goodbye to the limitations of traditional logic gates and hello to a world of possibilities! You'll be able to create complex circuits and machines that were previously impossible, opening up a whole new world of gameplay.",
  price: 1100 as const,
  originalPrice: 1400 as const,
  rarity: "epic",
  thumbnail: preview,
  images: [preview],
  content: Content,
} satisfies ItemMetadata;
