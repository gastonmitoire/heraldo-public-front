import type { Metadata } from "next";

import { AdServerComponent } from "@/app/features/ad-servers/AdServerComponent";
import { PostsHighlight } from "@/app/features/posts/PostsHighlight";
import { PostsWithPagination } from "@/app/features/posts/PostsWithPagination";

import { AdServerPositions } from "@/app/features/ad-servers/service/ad-servers.service";
import { fetchCategory } from "@/app/service/app.service";
import {
  PostsCategories,
  PostsPositions,
} from "@/app/features/posts/service/posts.service";

export const generateMetadata = async ({
  params,
}: {
  params: {
    categoryOrTagSlug: string;
  };
}) => {
  const { categoryOrTagSlug } = params;

  return {
    title: categoryOrTagSlug.replaceAll(/%20|_/g, " "),
    description: "Noticias de " + categoryOrTagSlug.replaceAll(/%20|_/g, " "),
    alternates: {
      canonical: `/noticias/${categoryOrTagSlug}`,
    },
    openGraph: {
      title: categoryOrTagSlug.replaceAll(/%20|_/g, " "),
      description: "Noticias de " + categoryOrTagSlug.replaceAll(/%20|_/g, " "),
      type: "article",
    },
    twitter: {
      title: categoryOrTagSlug.replaceAll(/%20|_/g, " "),
      description: "Noticias de " + categoryOrTagSlug.replaceAll(/%20|_/g, " "),
      creator: "@zaroweb",
      cardType: "summary_large_image",
    },
  };
};

export default async function Page({
  params,
}: {
  params: { categoryOrTagSlug: string };
}) {
  const ifCategory = Object.keys(PostsCategories).includes(
    params.categoryOrTagSlug
  );

  let title;

  if (ifCategory) {
    const category = await fetchCategory(params.categoryOrTagSlug);
    title = category.name;
  } else {
    title = params.categoryOrTagSlug.replaceAll(/%20|_/g, " ");
  }

  return (
    <div className="container mx-auto flex flex-col pt-5 gap-5">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-gray-800 capitalize">{title}</h1>

      <PostsWithPagination
        option={
          Object.keys(PostsCategories).includes(params.categoryOrTagSlug)
            ? "category"
            : "tag"
        }
        value={params.categoryOrTagSlug}
        aside={
          <AdServerComponent sticky position={AdServerPositions.sticky2} />
        }
      />

      <div className="col-span-4 flex flex-col gap-0.5">
        <h5 className="text-xl font-semibold text-gray-800 capitalize px-1 sm:px-0">
          Noticias de portada
        </h5>
        <PostsHighlight
          fetchPostsProps={{
            option: "position",
            value: PostsPositions.highlight + "/",
          }}
          bannerConfig={{
            position: AdServerPositions.netblock1,
          }}
        />
      </div>
    </div>
  );
}
