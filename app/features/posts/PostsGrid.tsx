// posts-grid component by category or position

import React from "react";

import { Banner } from "@/app/components/Banner";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { Heading } from "@/app/components/Heading";

import { AdServerComponent } from "../ad-servers/AdServerComponent";

import { PostProps } from "@/types";
import {
  fetchAdServer,
  AdServerPositions,
} from "../ad-servers/service/ad-servers.service";
import {
  fetchPostsWithOptions,
  FetchPostsWithOptionsProps,
  PostsPositions,
} from "./service/posts.service";

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

  const filteredPosts = posts.filter(
    (post: PostProps) =>
      (post.position !== PostsPositions.super_highlight &&
        post.position !== PostsPositions.highlight &&
        post.position !== PostsPositions.top) ||
      post.tags?.some((tag) => tag === "vivo deportes")
  );

  const banner = bannerConfig ? await fetchAdServer(bannerConfig) : null;

  const dataWithBanner =
    filteredPosts?.length > 0 && banner
      ? [
          ...filteredPosts.slice(0, 3),
          {
            type: "banner",
            ...banner.docs[0],
          },
        ]
      : filteredPosts;

  const dataWithoutBanner = filteredPosts;

  const redirectUrl = (value: string) => {
    switch (value) {
      case "category":
        return filteredPosts[0].category?.slug;
      case "position":
        return filteredPosts[0].category?.slug;
      case "tag":
        return fetchPostsProps.value;
      default:
        return "";
    }
  };

  return (
    <div>
      {filteredPosts?.length > 0 && title ? (
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
            <Banner banner={banner.docs[0]} className="h-full px-3 xl:px-0" />
          </span>
        </>
      ) : filteredPosts?.length > 0 ? (
        <CardGridWithSwiper data={dataWithoutBanner} />
      ) : null}
    </div>
  );
};
