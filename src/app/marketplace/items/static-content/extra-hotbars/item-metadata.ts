import { ItemMetadata } from "../../types";
import thumbnail from "./images/thumbnail.png";
import Content from "./content.mdx";

export const metadata = {
  id: "extra-hotbars" as const,
  title: "Extra Hotbars" as const,
  description:
    "Are you tired of constantly switching between hotbars? Look no further than Extra Hotbars! With this marketplace item, you'll receive 3 additional hotbars, bringing your total to 6. That's enough space for up to 60 items right at your fingertips!",
  price: 1900 as const,
  thumbnail: thumbnail,
  images: [thumbnail],
  content: Content,
} satisfies ItemMetadata;
