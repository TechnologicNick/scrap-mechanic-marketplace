import { ItemMetadata } from "../../types";
import front from "./images/front.png";
import right from "./images/right.png";
import back from "./images/back.png";
import left from "./images/left.png";
import Content from "./content.mdx";

export const metadata = {
  id: "technician-bundle" as const,
  title: "Technician Bundle" as const,
  description:
    "Looking for a way to show off your mechanical prowess in Scrap Mechanic? Look no further than the Technician Bundle! This bundle includes everything you need to outfit your character with the perfect look for a skilled technician like yourself.",
  price: 1900 as const,
  originalPrice: 2200 as const,
  rarity: "legendary",
  thumbnail: front,
  images: [front, right, back, left],
  content: Content,
} satisfies ItemMetadata;
