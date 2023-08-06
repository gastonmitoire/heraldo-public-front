import React, { useState, useEffect } from "react";

import { Banner } from "@/app/components/Banner";
import { Button } from "../components/Button";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { List } from "@/app/components/List";
import { PrintedEdition } from "./printed-edition/PrintedEdition";
import { Skeleton } from "../components/Skeleton";

import { Post } from "@/types";

import { fetchPrintedEdition } from "./printed-edition/service/printed-edition.service";

interface PostsHighlightProps {
  posts: Post[];
}

export const PostsHighlight: React.FC<PostsHighlightProps> = async ({
  posts,
}) => {
  const { docs: printedEdition } = await fetchPrintedEdition();

  // const listPosts =
  //   posts.map((post: any) => ({
  //     title: post.title,
  //   })) ?? [];

  return (
    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-4">
      <section className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-rows-3 lg:grid-cols-3">
        {posts && posts.length > 0 ? (
          posts.slice(0, 1).map((post: any) => (
            <CardHighlight
              key={post._id}
              item={{
                title: post.title,
                excerpt: post.excerpt,
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

        {posts && posts.length > 0
          ? posts.slice(1, 6).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="h-full"
                imageClassName="h-[150px] object-cover"
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
          items={[]}
          listClassName="max-h-[450px]"
        />

        <Banner
          banner={{
            title: "titulo",
            site: "site",
            url: "url",
            desktopImage: {
              url: "https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05__bannerweb970x90px_GIF.gif",
            },
            mobileImage: {
              url: "https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05__bannerweb970x90px_GIF.gif",
            },
          }}
          className="max-h-[300px]"
        />
      </section>
    </div>
  );
};
