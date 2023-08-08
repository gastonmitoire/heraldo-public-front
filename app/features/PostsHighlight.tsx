import React from "react";

import { Banner } from "@/app/components/Banner";
import { Card } from "@/app/components/Card";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Heading } from "../components/Heading";
import { List } from "@/app/components/List";
import { Skeleton } from "../components/Skeleton";

import { PrintedEdition } from "./printed-edition/PrintedEdition";

import { PostProps } from "@/types";

import { fetchPrintedEdition } from "./printed-edition/service/printed-edition.service";
import {
  fetchPosts,
  fetchPostsWithOptions,
  FetchPostsProps,
} from "./posts/service/posts.service";
import {
  fetchAdServer,
  AdServerPositions,
  PostsPositions,
} from "../service/app.service";

interface PostsHighlightProps {
  fetchPostsProps: FetchPostsProps;
  title?: string;
  bannerConfig: {
    position: AdServerPositions;
  };
}

export const PostsHighlight: React.FC<PostsHighlightProps> = async ({
  fetchPostsProps,
  title,
  bannerConfig,
}) => {
  const { docs: lastPosts } = await fetchPosts();
  const highlightPosts = await fetchPostsWithOptions({
    ...fetchPostsProps,
    postsLimit: 6,
  });

  const { docs: printedEdition } = await fetchPrintedEdition();

  const banners = await fetchAdServer(bannerConfig);

  // const listPosts =
  //   posts.map((post: any) => ({
  //     title: post.title,
  //   })) ?? [];

  return (
    <div className="flex flex-col gap-3 xl:grid xl:grid-cols-4">
      {title ? (
        <div className="w-full xl:col-span-4">
          <Heading title={title} />
        </div>
      ) : null}

      <section className="grid grid-cols-2 gap-3 xl:col-span-3 xl:grid-rows-3 xl:grid-cols-3">
        {highlightPosts && highlightPosts.length > 0 ? (
          highlightPosts.slice(0, 1).map((post: any) => (
            <CardHighlight
              key={post._id}
              item={{
                title: post.title,
                flywheel: post.flywheel,
                image: post.images[0],
                category: post.category,
                slug: post.slug,
              }}
              className="col-span-2 xl:col-span-2 xl:row-span-2 xl:h-full"
            />
          ))
        ) : (
          <Skeleton className="col-span-2 xl:col-span-2 xl:row-span-2 xl:h-full" />
        )}

        {highlightPosts && highlightPosts.length > 0
          ? highlightPosts.slice(1, 6).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="hidden xl:block h-full"
                imageClassName="h-[350px] object-cover"
              />
            ))
          : [1, 2, 3, 4, 5].map((_, index) => <Skeleton key={index} />)}
      </section>

      <span className="block xl:hidden">
        <CardGridWithSwiper
          data={highlightPosts.slice(1, 6)}
          className="col-span-2"
          cardClassName="lg:h-[460px]"
        />
      </span>

      <section className="hidden xl:flex flex-col h-full gap-5 xl:col-span-1 md:col-span-2">
        {/* EDICION IMPRESA */}
        <span>
          <PrintedEdition printedEdition={printedEdition[0]} />
        </span>

        {/* ULTIMAS NOTICIAS */}
        <List
          heading="Últimas Noticias"
          items={lastPosts}
          listClassName="max-h-[500px]"
        />

        <Banner banner={banners.docs[0]} className="max-h-[300px]" />
      </section>
    </div>
  );
};
