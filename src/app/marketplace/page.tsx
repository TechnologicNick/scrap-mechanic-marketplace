import Carrousel from "@/components/carrousel";
import ItemGrid from "@/components/item-grid";
import PageHeading from "@/components/page-heading";
import Image from "next/image";
import { metadata } from "./items/static-content/advanced-lighting/item-metadata";
import { getItem, getItemList } from "./items/static-content/item-list";
import SystemRequirements from "./system-requirements";

export default async function Marketplace() {
  return (
    <>
      <PageHeading crumbs={[]} />
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
          items={(await getItemList()).map((item) => ({
            metadata: item,
          }))}
        />
        <SystemRequirements />
        <div style={{ height: "200px" }}></div>
      </main>
    </>
  );
}
