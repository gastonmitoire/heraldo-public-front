// posts-featured component
import React from "react";

import { PostProps } from "@/types";

import { Banner } from "../../components/Banner";
import { Card } from "@/app/components/Card";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { CardHighlight } from "@/app/components/CardHighlight";

import {
  fetchPostsWithOptions,
  FetchPostsProps,
} from "./service/posts.service";
import { fetchAdServer, AdServerPositions } from "../../service/app.service";
import { Heading } from "../../components/Heading";

interface PostsFeaturedProps {
  fetchPostsProps: FetchPostsProps;
  postsLimit?: number;
  title?: string;
  bannerNetblockConfig: {
    position: AdServerPositions;
  };
  bannerStickyConfig: {
    position: AdServerPositions;
  };
}

export const PostsFeatured: React.FC<PostsFeaturedProps> = async ({
  fetchPostsProps,
  postsLimit = 5,
  title,
  bannerNetblockConfig,
  bannerStickyConfig,
}) => {
  const posts = await fetchPostsWithOptions({
    ...fetchPostsProps,
    postsLimit,
  });

  const bannerNetblock = await fetchAdServer(bannerNetblockConfig);

  const bannerSticky = await fetchAdServer(bannerStickyConfig);

  const redirectUrl = (value: string) => {
    switch (value) {
      case "category":
        return posts[0].category?.slug;
      case "position":
        return posts[0].category?.slug;
      case "tag":
        return fetchPostsProps.value.replaceAll(" ", "_");
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-3 xl:grid xl:grid-cols-4">
      <div className="col-span-4">
        <Heading
          title={posts[0].category?.name}
          link={`/noticias/${redirectUrl(fetchPostsProps.option)}`}
        />
      </div>
      <div className="flex flex-col xl:grid grid-cols-2 gap-3 xl:col-span-3 xl:grid-rows-3 xl:grid-cols-3">
        {posts.length > 0
          ? posts.slice(0, 1).map((post: any) => (
              <CardHighlight
                key={post._id}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="col-span-2 xl:col-span-2 row-span-2 xl:h-full"
              />
            ))
          : null}

        {posts.length > 0
          ? posts.slice(1, 3).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="hidden xl:block xl:h-[460px] xl:col-span-1"
                imageClassName="h-[350px] object-cover"
              />
            ))
          : null}

        <Banner
          banner={bannerNetblock.docs[0]}
          className="h-[90%] py-5 mx-auto"
        />

        {posts.length > 0
          ? posts.slice(3, 6).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="hidden xl:block xl:h-[460px] xl:col-span-1"
                imageClassName="h-[350px] object-cover"
              />
            ))
          : null}
      </div>

      <span className="block xl:hidden">
        <CardGridWithSwiper
          data={posts.slice(1, 6)}
          className="col-span-2"
          cardClassName="xl:h-[460px]"
        />
      </span>

      <aside className="xl:col-span-1 flex flex-col items-center">
        <Banner
          banner={bannerSticky.docs[0]}
          sticky
          border
          className="h-[50%] px-3"
        />
      </aside>
    </div>
  );
};
