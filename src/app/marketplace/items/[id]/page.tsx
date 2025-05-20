import Carrousel from "@/components/carrousel";
import Image from "next/image";
import SystemRequirements from "../../system-requirements";
import { getItem } from "../static-content/item-list";
import styles from "./page.module.scss";
import text from "@/styles/text.module.scss";
import bearing from "@/../public/bearing.png";
import PriceDisplay from "@/components/price-display";
import Button from "@/components/button";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/mdx-components";
import { PageParams } from "./layout";
import PageHeading from "@/components/page-heading";

useMDXComponents({});

export const dynamic = "force-static";

export { generateStaticParams } from "./layout";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const item = await getItem((await params).id as any);
  if (!item) {
    notFound();
  }

  const images = item.images.map((image, index) => (
    <div
      key={index}
      style={{
        aspectRatio: image.width / image.height,
        position: "relative",
      }}
    >
      <Image
        src={image}
        alt={item.title}
        fill
        quality={100}
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
      />
    </div>
  ));

  return (
    <>
      <PageHeading crumbs={[{ element: item.title, href: `/marketplace/items/${item.id}` }]} />
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
              <PriceDisplay
                price={
                  typeof item.price === "string" ? (
                    <span>
                      <span className={text.muted}>{item.title} - </span>
                      <span>{item.price}</span>
                    </span>
                  ) : (
                    item.price
                  )
                }
                originalPrice={"originalPrice" in item ? item.originalPrice : undefined}
              />
              <Button primary bold href={`/marketplace/items/${item.id}/buy-now`}>
                Buy Now
              </Button>
            </section>
          </div>
        </div>
        <SystemRequirements />
        <div style={{ height: "200px" }}></div>
      </main>
    </>
  );
}
