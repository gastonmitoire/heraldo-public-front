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
        posts={initialData}
        option={
          Object.keys(PostsCategories).includes(params.categoryOrTagSlug)
            ? "category"
            : "tag"
        }
        value={params.categoryOrTagSlug}
      />

      {/* CATEGORY POSTS HIGHLIGHT */}
      {/* <div className="grid grid-cols-2 gap-3">
        {posts[0]
          ? posts.slice(0, 2).map((post: any) => (
              <CardHighlight
                key={`highlight-post-${post._id}`}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                  liveSports: post.liveSports,
                }}
                className="min-h-[500px]"
              />
            ))
          : null}
      </div> */}

      {/* CATEGORY POSTS */}
      <div className="grid grid-cols-4 gap-3">
        {/* <div className="grid grid-cols-3 col-span-3 gap-3">
          {posts[0] ? (
            posts.slice(2).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                  liveSports: post.liveSports,
                }}
                imageClassName="h-[200px] 2xl:h-[300px] object-cover"
              />
            ))
          ) : (
            <div className="col-span-3 flex flex-col justify-center items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-500 mx-auto mb-3"
              >
                <path
                  d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-gray-500 text-lg font-semibold">
                No se encontraron noticias para esta categoría.
              </p>
            </div>
          )}
        </div> */}

        {/* CATEGORY POSTS SIDEBAR */}
        <aside className="grid grid-cols-1 col-span-1 gap-3">
          {/* BANNER */}
          {/* <Banner
            banner={{
              title: sticky2[0]?.title,
              site: sticky2[0]?.site,
              url: sticky2[0]?.url,
              desktopImage: sticky2[0]?.desktopImage,
              mobileImage: sticky2[0]?.mobileImage,
            }}
            className="max-h-[600px] object-contain px-5"
            sticky
            border
          /> */}
        </aside>
      </div>

      {/* POSTS HIGHLIGHT */}
      <div className="flex flex-col gap-0.5">
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
