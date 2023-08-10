import type { Metadata } from "next";

import { Banner } from "@/app/components/Banner";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";

import { PostsHighlight } from "@/app/features/posts/PostsHighlight";
import { PostsWithPagination } from "@/app/features/posts/PostsWithPagination";

import { AdServerPositions, fetchAdServer } from "@/app/service/app.service";

import {
  fetchPostsWithPagination,
  PostsCategories,
  PostsPositions,
} from "@/app/features/posts/service/posts.service";

export default async function Page({
  params,
}: {
  params: { categoryOrTagSlug: string };
}) {
  const ifCategory = Object.keys(PostsCategories).includes(
    params.categoryOrTagSlug
  );

  const { docs: initialData } = await fetchPostsWithPagination({
    page: 1,
    option: ifCategory ? "category" : "tag",
    value: params.categoryOrTagSlug,
  });

  console.log("initialData", params.categoryOrTagSlug);

  // AdServer Calls (sticky2)
  const { docs: sticky2 } = await fetchAdServer({
    position: AdServerPositions.sticky2,
  });

  return (
    <div className="container flex flex-col pt-5 gap-5 mx-auto">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-gray-800 capitalize">
        {params.categoryOrTagSlug.replaceAll(/%20|_/g, " ")}
      </h1>

      <PostsWithPagination
        option={
          Object.keys(PostsCategories).includes(params.categoryOrTagSlug)
            ? "category"
            : "tag"
        }
        value={params.categoryOrTagSlug}
        aside={
          <Banner
            banner={{
              title: sticky2[0]?.title,
              site: sticky2[0]?.site,
              url: sticky2[0]?.url,
              desktopImage: sticky2[0]?.desktopImage,
              mobileImage: sticky2[0]?.mobileImage,
            }}
            className="w-[75%] h-min object-contain px-5"
            sticky
            border
          />
        }
      />

      <div className="col-span-4 flex flex-col gap-0.5">
        <h5 className="text-xl font-semibold text-gray-800 capitalize">
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
