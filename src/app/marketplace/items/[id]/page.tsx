import Carrousel from "@/components/carrousel";
import type { Metadata } from "next";
import Image from "next/image";
import SystemRequirements from "../../system-requirements";
import { getItem, getItemList } from "../static-content/item-list";
import styles from "./page.module.scss";
import bearing from "@/../public/bearing.png";
import PriceDisplay from "@/components/price-display";
import Button from "@/components/button";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/mdx-components";

useMDXComponents({});

export async function generateStaticParams() {
  return (await getItemList()).map((item) => ({
    params: { id: item.id },
  }));
}

interface PageParams {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number]["params"];
}

export async function generateMetadata({ params }: PageParams) {
  const item = await getItem(params.id);
  if (!item) {
    notFound();
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      type: "website",
      siteName: "Scrap Mechanic Marketplace",
      title: item.title,
      description: item.description,
      images: [
        {
          url: item.thumbnail.src,
          width: item.thumbnail.width,
          height: item.thumbnail.height,
        },
      ],
    },
  } satisfies Metadata;
}

export default async function Page({ params }: PageParams) {
  const item = await getItem(params.id);
  if (!item) {
    notFound();
  }

  const images = item.images.map((image, index) => (
    <div
      key={index}
      style={{
        maxWidth: "100%",
        aspectRatio: item.thumbnail.width / item.thumbnail.height,
        overflowY: "hidden",
      }}
    >
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={1600}
        quality={100}
        style={{
          objectFit: "contain",
          objectPosition: "center top",
          maxWidth: "100%",
        }}
      />
    </div>
  ));

  return (
    <main>
      <div className={styles.item}>
        <section>
          <div>{images.length > 1 ? <Carrousel>{images}</Carrousel> : images}</div>
          <item.content />
        </section>
        <div>
          <section className={styles.card}>
            <div className={styles.heading}>
              <Image src={bearing} alt="Scrap Mechanic icon" width={48} height={48} quality={90} />
              <div>
                <h2 className={styles.title}>{item.title}</h2>
                <span className={styles.rarity}>{item.rarity}</span>
              </div>
            </div>
            <PriceDisplay {...item} />
            <Button primary href={`/marketplace/items/${item.id}/buy-now`}>
              Buy Now
            </Button>
          </section>
        </div>
      </div>
      <SystemRequirements />
    </main>
  );
}
