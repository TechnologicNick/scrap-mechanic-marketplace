import type { MDXContent } from "mdx/types";
import type { StaticImageData } from "next/image";

export type ItemMetadata = Readonly<{
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  thumbnail: StaticImageData;
  images: StaticImageData[];
  content: MDXContent;
}>;
