// posts-grid component by category or position

import React from "react";

import { Banner } from "@/app/components/Banner";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { Heading } from "@/app/components/Heading";

import {
  fetchPostsWithOptions,
  FetchPostsWithOptionsProps,
} from "./service/posts.service";
import { AdServerPositions, fetchAdServer } from "@/app/service/app.service";

interface PostsGridProps {
  fetchPostsProps: FetchPostsWithOptionsProps;
  postsLimit?: number;
  title?: string;
  bannerConfig?: {
    position: AdServerPositions;
  };
}

export const PostsGrid: React.FC<PostsGridProps> = async ({
  fetchPostsProps,
  postsLimit = 4,
  title,
  bannerConfig,
}) => {
  const posts = await fetchPostsWithOptions({
    ...fetchPostsProps,
    postsLimit,
  });

  const banner = bannerConfig ? await fetchAdServer(bannerConfig) : null;

  const dataWithBanner =
    posts?.length > 0 && banner
      ? [
          ...posts.slice(0, 3),
          {
            type: "banner",
            ...banner.docs[0],
          },
        ]
      : posts;

  const dataWithoutBanner = posts;

  const redirectUrl = (value: string) => {
    switch (value) {
      case "category":
        return posts[0].category?.slug;
      case "position":
        return posts[0].category?.slug;
      case "tag":
        return fetchPostsProps.value;
      default:
        return "";
    }
  };

  return (
    <div>
      {posts?.length > 0 && title ? (
        <Heading
          title={title}
          link={`/noticias/${redirectUrl(fetchPostsProps.option)}`}
        />
      ) : null}

      {banner ? (
        <>
          <span className="hidden xl:block">
            <CardGridWithSwiper data={dataWithBanner} />
          </span>
          <span className="xl:hidden block">
            <CardGridWithSwiper data={dataWithoutBanner} />
            <Banner banner={banner.docs[0]} className="h-full px-3 lg:px-0" />
          </span>
        </>
      ) : posts?.length > 0 ? (
        <CardGridWithSwiper data={dataWithoutBanner} />
      ) : null}
    </div>
  );
};
