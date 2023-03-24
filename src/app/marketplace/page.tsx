import Carrousel from "@/components/carrousel";
import Image from "next/image";
import { metadata } from "./items/static-content/advanced-lighting/item-metadata";

export default function Marketplace() {
  return (
    <main>
      <Carrousel>
        {[
          <Image
            key={0}
            src={metadata.thumbnail}
            alt="Advanced Lighting"
            width={1600}
            height={360}
            quality={100}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />,
          <Image
            key={1}
            src={metadata.thumbnail}
            alt="Advanced Lighting"
            width={1600}
            height={360}
            quality={100}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />,
          <Image
            key={2}
            src={metadata.thumbnail}
            alt="Advanced Lighting"
            width={1600}
            height={360}
            quality={100}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />,
        ]}
      </Carrousel>
      <h1>Scrap Mechanic Marketplace</h1>
    </main>
  );
}
