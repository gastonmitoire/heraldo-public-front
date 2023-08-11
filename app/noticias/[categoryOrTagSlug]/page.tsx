import type { Metadata } from "next";

import { AdServerComponent } from "@/app/features/ad-servers/AdServerComponent";
import { PostsHighlight } from "@/app/features/posts/PostsHighlight";
import { PostsWithPagination } from "@/app/features/posts/PostsWithPagination";

import { AdServerPositions } from "@/app/features/ad-servers/service/ad-servers.service";
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
          <AdServerComponent sticky position={AdServerPositions.sticky2} />
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
