import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getItemList, getItem } from "../static-content/item-list";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return (await getItemList()).map((item) => ({
    id: item.id,
  }));
}

export type PageParams = Awaited<ReturnType<typeof generateStaticParams>>[number];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const item = await getItem((await params).id as any);
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

type LayoutParams = {
  params: PageParams;
  children: React.ReactNode;
};

export default async function Layout({ params, children }: LayoutParams) {
  return children;
}
