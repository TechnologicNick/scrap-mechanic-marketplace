import type { Metadata } from "next";
import SystemRequirements from "../../system-requirements";
import { getItem, getItemList } from "../static-content/item-list";

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

  return (
    <div>
      <item.content />
      <SystemRequirements />
    </div>
  );
}
