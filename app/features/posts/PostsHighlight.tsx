export const dynamic = "force-dynamic";
import React from "react";

import { Banner } from "@/app/components/Banner";
import { Card } from "@/app/components/Card";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Heading } from "../../components/Heading";
import { List } from "@/app/components/List";
import { Skeleton } from "../../components/Skeleton";

import { PrintedEdition } from "../printed-edition/PrintedEdition";

import { fetchPrintedEdition } from "../printed-edition/service/printed-edition.service";
import {
  fetchPostsWithPagination,
  fetchPostsWithOptions,
  FetchPostsWithOptionsProps,
} from "./service/posts.service";
import { fetchAdServer, AdServerPositions } from "../../service/app.service";

interface PostsHighlightProps {
  fetchPostsProps: FetchPostsWithOptionsProps;
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
  const highlightPosts = await fetchPostsWithOptions({
    ...fetchPostsProps,
    postsLimit: 6,
  });
  const { docs: lastPosts } = await fetchPostsWithPagination({
    page: 1,
  });

  const { docs: printedEdition } = await fetchPrintedEdition();

  const banners = await fetchAdServer(bannerConfig);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
      {title ? (
        <div className="w-full xl:col-span-4">
          <Heading title={title} />
        </div>
      ) : null}

      <div className="col-span-3 grid grid-cols-3 xl:grid-rows-3 gap-3">
        <div className="col-span-3 lg:col-span-2 h-[300px] xl:row-span-2 xl:h-auto">
          {highlightPosts?.length > 0 ? (
            highlightPosts.slice(0, 1).map((post: any) => (
              <CardHighlight
                key={post._id}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                  liveSports: post.liveSports,
                }}
                className="xl:h-full"
              />
            ))
          ) : (
            <Skeleton className="col-span-2 xl:col-span-2 xl:row-span-2 xl:h-full" />
          )}
        </div>

        <div className="col-span-1 row-span-2 hidden xl:grid grid-rows-2 gap-3">
          {highlightPosts?.length > 0
            ? highlightPosts.slice(1, 3).map((post: any) => (
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
                  className="hidden xl:grid"
                />
              ))
            : [1, 2].map((_, index) => <Skeleton key={index} />)}
        </div>

        <div className="col-span-3 row-span-1 hidden xl:grid grid-cols-3 gap-3">
          {highlightPosts?.length > 0
            ? highlightPosts.slice(3, 6).map((post: any) => (
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
                  className="hidden xl:grid"
                />
              ))
            : [1, 2, 3].map((_, index) => <Skeleton key={index} />)}
        </div>
      </div>

      <span className="block xl:hidden col-span-3">
        <CardGridWithSwiper
          data={highlightPosts?.slice(1, 6)}
          className="col-span-2"
          cardClassName="lg:h-[460px]"
        />
      </span>

      <section className="hidden xl:flex flex-col h-full gap-5 xl:col-span-1 md:col-span-2">
        <span>
          <PrintedEdition printedEdition={printedEdition[0]} />
        </span>

        <List
          heading="Últimas Noticias"
          items={lastPosts}
          listClassName="max-h-[300px]"
        />

        <Banner banner={banners.docs[0]} className="relative" />
      </section>
    </div>
  );
};
