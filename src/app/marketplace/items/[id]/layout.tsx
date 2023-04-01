import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getItemList, getItem } from "../static-content/item-list";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return (await getItemList()).map((item) => ({
    params: { id: item.id },
  }));
}

export interface PageParams {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number]["params"];
}

export async function generateMetadata({ params }: PageParams) {
  const item = await getItem(params.id);
  if (!item) {
    notFound();
  }

  return {
    title: {
      default: item.title,
      template: `%s | ${item.title}}`,
    },
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

interface LayoutParams extends PageParams {
  children: React.ReactNode;
}

export default async function Layout({ params, children }: LayoutParams) {
  return children;
}
