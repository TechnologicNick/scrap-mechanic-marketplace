export const itemList = [
  import("./advanced-lighting/item-metadata").then((item) => item.metadata),
  import("./extra-hotbars/item-metadata").then((item) => item.metadata),
  import("./the-modpack-continuation/item-metadata").then((item) => item.metadata),
  import("./technician-bundle/item-metadata").then((item) => item.metadata),
  import("./duck-souvenir/item-metadata").then((item) => item.metadata),
  import("./scrap-factory/item-metadata").then((item) => item.metadata),
  import("./grow-labs/item-metadata").then((item) => item.metadata),
  import("./revival-baguette-weapon-charm/item-metadata").then((item) => item.metadata),
];

export type ItemId = Awaited<(typeof itemList)[number]>["id"];

export async function getItemList() {
  return Promise.all(itemList);
}

export async function getItem(id: ItemId) {
  return (await getItemList()).find((item) => item.id === id)!;
}
