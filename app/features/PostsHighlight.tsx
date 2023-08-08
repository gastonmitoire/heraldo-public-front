import React from "react";

import { Banner } from "@/app/components/Banner";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Heading } from "../components/Heading";
import { List } from "@/app/components/List";
import { PrintedEdition } from "./printed-edition/PrintedEdition";
import { Skeleton } from "../components/Skeleton";

import { PostProps } from "@/types";

import { fetchPrintedEdition } from "./printed-edition/service/printed-edition.service";
import {
  fetchPosts,
  fetchPostsWithOptions,
  FetchPostsProps,
} from "./posts/service/posts.service";
import { fetchAdServer, AdServerPositions } from "../service/app.service";

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
    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-4">
      {title ? (
        <div className="w-full lg:col-span-4">
          <Heading title={title} />
        </div>
      ) : null}

      <section className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-rows-3 lg:grid-cols-3">
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
              className="col-span-2 lg:col-span-2 lg:row-span-2 lg:h-full"
            />
          ))
        ) : (
          <Skeleton className="col-span-2 lg:col-span-2 lg:row-span-2 lg:h-full" />
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
                className="h-full"
                imageClassName="h-[250px] object-cover"
              />
            ))
          : [1, 2, 3, 4, 5].map((_, index) => <Skeleton key={index} />)}
      </section>

      <section className="grid flex-col h-full gap-3 lg:col-span-1 md:col-span-2">
        {/* EDICION IMPRESA */}
        <PrintedEdition printedEdition={printedEdition[0]} />

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
