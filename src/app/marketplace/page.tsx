import Carrousel from "@/components/carrousel";
import ItemGrid from "@/components/item-grid";
import Image from "next/image";
import { metadata } from "./items/static-content/advanced-lighting/item-metadata";
import { getItem } from "./items/static-content/item-list";

export default async function Marketplace() {
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
      <ItemGrid
        items={[
          {
            metadata: await getItem("advanced-lighting"),
          },
          {
            metadata: await getItem("extra-hotbars"),
          },
        ]}
      />
      <div style={{ height: "200px" }}></div>
    </main>
  );
}
