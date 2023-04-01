import SystemRequirements from "@/app/marketplace/system-requirements";
import Button from "@/components/button";
import CreditsDisplay from "@/components/credits-display";
import PageHeading from "@/components/page-heading";
import type { Metadata, Route } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getItem } from "../../static-content/item-list";
import { PageParams } from "../layout";
import styles from "./page.module.scss";

export const metadata = {
  title: "Not enough Wonk Credits",
} satisfies Metadata;

export default async function BuyNowPage({ params }: PageParams) {
  const item = await getItem(params.id);
  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeading
        crumbs={[
          { element: item.title, href: `/marketplace/items/${item.id}` as Route },
          { element: "Checkout", href: `/marketplace/items/${item.id}/buy-now` as Route },
        ]}
      />
      <main>
        <div className={styles.page}>
          <section className={styles.message}>
            <h1>You don't have enough Wonk Credits for this transaction!</h1>
            <div className={styles.buttons}>
              <Button primary bold href="/marketplace/add-funds">
                Get more Wonk Credits
              </Button>
              <Button href={`/marketplace/items/${item.id}`}>Cancel</Button>
            </div>
          </section>
          <section className={styles.purchaseDetails}>
            <Image src={item.thumbnail} alt={item.title} width={250} quality={100} />
            <dl>
              <dt>
                <h2>You are purchasing</h2>
              </dt>
              <dd>{item.title}</dd>
              <dt>Total price</dt>
              <dd>
                <CreditsDisplay children={item.price} />
              </dd>
              <dt>Current balance</dt>
              <dd>
                <CreditsDisplay children={0} />
              </dd>
            </dl>
          </section>
        </div>
        <SystemRequirements />
        <div style={{ height: "200px" }}></div>
      </main>
    </>
  );
}
