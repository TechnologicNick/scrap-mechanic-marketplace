import Carrousel from "@/components/carrousel";
import ItemGrid from "@/components/item-grid";
import PageHeading from "@/components/page-heading";
import Section from "@/components/section";
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
        <section>
          <h1 id="scrap-mechanic-marketplace">Scrap Mechanic Marketplace</h1>
          <p>
            Welcome to the Scrap Mechanic Marketplace! Here you can find all the items that are available for purchase
            in the game. With our newly launched premium currency, Wonk Credits, you can now conveniently buy items
            directly from us. Whether you're in search of basic game features or advanced mods, we have got you covered!
          </p>
        </section>
        <section>
          <h2 id="featured">Featured</h2>
          <ItemGrid
            variant="grid"
            items={[
              {
                metadata: await getItem("grow-labs"),
              },
              {
                metadata: await getItem("extra-hotbars"),
              },
              {
                metadata: await getItem("the-modpack-continuation"),
              },
              {
                metadata: await getItem("technician-bundle"),
              },
              {
                metadata: await getItem("duck-souvenir"),
              },
              {
                metadata: await getItem("revival-baguette-weapon-charm"),
              },
              {
                metadata: await getItem("advanced-lighting"),
              },
            ]}
          />
        </section>
        <Section
          heading="Chapter 2"
          id="chapter-2"
          description="If you're eagerly awaiting chapter 2, you can pre-order it here on our marketplace using your
            Wonk Credits. You'll be one of the first to play when it releases, and you'll have access to all the new
            content as soon as it's available."
        >
          <ItemGrid
            variant="grid"
            items={[{ metadata: await getItem("advanced-lighting") }, { metadata: await getItem("grow-labs") }]}
          />
        </Section>
        <Section
          heading="Wonk Credits"
          id="wonk-credits"
          description="Wonk Credits are the new premium currency used in the Scrap Mechanic marketplace. They allow you
            to purchase a variety of in-game items, including basic game features, cosmetics, advanced mods created by
            the community, and pre-order options for upcoming content releases."
        >
          <ItemGrid
            variant="two-three"
            items={[
              {
                metadata: await getItem("10000-wonk-credits"),
              },
              {
                metadata: await getItem("5000-wonk-credits"),
              },
              {
                metadata: await getItem("2000-wonk-credits"),
              },
              {
                metadata: await getItem("1000-wonk-credits"),
              },
              {
                metadata: await getItem("500-wonk-credits"),
              },
            ]}
          />
        </Section>
        <SystemRequirements />
        <div style={{ height: "200px" }}></div>
      </main>
    </>
  );
}
