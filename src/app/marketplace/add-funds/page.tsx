import ItemGrid from "@/components/item-grid";
import PageHeading from "@/components/page-heading";
import { getItem } from "../items/static-content/item-list";
import SystemRequirements from "../system-requirements";

export default async function AddFundsPage() {
  return (
    <>
      <PageHeading crumbs={[{ element: "Add funds", href: "/marketplace/add-funds" }]} />
      <main>
        <h1>Get more Wonk Credits</h1>
        <p>
          Wonk Credits are the new premium currency used in the Scrap Mechanic marketplace. They allow you to purchase a
          variety of in-game items, including basic game features, cosmetics, advanced mods created by the community,
          and pre-order options for upcoming content releases.
        </p>
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
        <SystemRequirements />
        <div style={{ height: "200px" }}></div>
      </main>
    </>
  );
}
