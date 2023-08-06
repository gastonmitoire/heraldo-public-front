import type { Metadata } from "next";
import Link from "next/link";

import { Banner } from "@/app/components/Banner";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Skeleton } from "@/app/components/Skeleton";

import { PostsHighlight } from "@/app/features/PostsHighlight";

import {
  PostsCategories,
  PostsPositions,
  fetchPosts,
  AdServerPositions,
  fetchAdServer,
} from "@/app/service/app.service";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Noticias de El Heraldo",
};

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const URL = process.env.API_URL;

  // Posts Calls (Highlight, Category)
  const postsHighlight = await fetchPosts({
    position: PostsPositions.highlight,
    postsLimit: 7,
  });
  const categoryPosts = await fetchPosts({
    category: params.categorySlug as PostsCategories,
    postsLimit: 14,
  });

  // AdServer Calls (sticky2)
  const { docs: sticky2 } = await fetchAdServer({
    position: AdServerPositions.sticky2,
  });

  return (
    <div className="container flex flex-col gap-5 mx-auto">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-gray-800 capitalize">
        {categoryPosts
          ? categoryPosts[0].category.name
          : params.categorySlug.replaceAll("_", " ")}
      </h1>

      {/* CATEGORY POSTS HIGHLIGHT */}
      <div className="grid grid-cols-2 gap-3">
        {categoryPosts
          ? categoryPosts.slice(0, 2).map((post: any) => (
              <Link
                key={post._id}
                href={`/noticias/${post.category.slug}/${post.slug}`}
              >
                <CardHighlight
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.images[0].url}
                />
              </Link>
            ))
          : [1, 2].map((n) => (
              <Skeleton
                key={n}
                className="h-[400px] 2xl:h-[450px] object-cover"
              />
            ))}
      </div>

      {/* CATEGORY POSTS */}
      <div className="grid grid-cols-4 gap-3">
        <div className="grid grid-cols-3 col-span-3 gap-3">
          {categoryPosts
            ? categoryPosts.slice(2).map((post: any) => (
                <Card
                  key={post._id}
                  item={{
                    title: post.title,
                    excerpt: post.excerpt,
                    image: post.images[0],
                    category: post.category,
                    slug: post.slug,
                  }}
                  imageClassName="h-[200px] 2xl:h-[300px] object-cover"
                />
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <Skeleton
                  key={n}
                  className="h-[250px] 2xl:h-[300px] object-cover"
                />
              ))}
        </div>

        {/* CATEGORY POSTS SIDEBAR */}
        <aside className="grid grid-cols-1 col-span-1 gap-3">
          {/* BANNER */}
          <Banner
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
          />
        </aside>
      </div>

      {/* POSTS HIGHLIGHT */}
      <div className="flex flex-col gap-0.5">
        <h5 className="text-xl font-semibold text-gray-800 capitalize">
          Noticias de portada
        </h5>
        <PostsHighlight posts={postsHighlight} />
      </div>
    </div>
  );
}
