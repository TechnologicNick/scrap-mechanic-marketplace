import type { MDXContent } from "mdx/types";
import type { StaticImageData } from "next/image";

export type ItemMetadata = Readonly<{
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: StaticImageData;
  images: StaticImageData[];
  content: MDXContent;
}>;
