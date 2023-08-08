// posts-grid component by category or position

import React from "react";

import { Banner } from "@/app/components/Banner";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { Heading } from "@/app/components/Heading";

import {
  fetchPostsWithOptions,
  FetchPostsProps,
} from "./service/posts.service";
import { AdServerPositions, fetchAdServer } from "@/app/service/app.service";

interface PostsGridProps {
  fetchPostsProps: FetchPostsProps;
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

  // if (fetchPostsProps.option === "tag") {
  //   console.log("posts", posts);
  // }

  const banner = bannerConfig ? await fetchAdServer(bannerConfig) : null;

  const dataWithBanner =
    posts.length > 0 && banner
      ? [
          ...posts.slice(0, 3),
          {
            type: "banner",
            ...banner.docs[0],
          },
        ]
      : posts;
  const dataWithoutBanner = posts;

  return (
    <div>
      {posts.length > 0 && title ? (
        <Heading title={title} link={`/noticias/${posts[0].category?.slug}`} />
      ) : posts.length > 0 ? (
        <Heading
          title={posts[0].category?.name}
          link={`/noticias/${posts[0].category?.slug}`}
        />
      ) : null}

      {banner ? (
        <>
          <span className="hidden xl:block">
            <CardGridWithSwiper data={dataWithBanner} />
          </span>
          <span className="xl:hidden block">
            <CardGridWithSwiper data={dataWithoutBanner} />
            <Banner banner={banner.docs[0]} />
          </span>
        </>
      ) : (
        <CardGridWithSwiper data={dataWithoutBanner} />
      )}
    </div>
  );
};