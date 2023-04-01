import ItemGrid from "@/components/item-grid";
import PageHeading from "@/components/page-heading";
import { getItem } from "../items/static-content/item-list";

export default async function AddFundsPage() {
  return (
    <>
      <PageHeading crumbs={[{ element: "Add funds", href: "/marketplace/add-funds" }]} />
      <main>
        <h1>Get more Wonk Credits</h1>
        <ItemGrid
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
      </main>
    </>
  );
}
