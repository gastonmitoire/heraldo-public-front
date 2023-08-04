"use client";

import React, { useState, useEffect } from "react";

import { Banner } from "@/app/components/Banner";
import { Button } from "../components/Button";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { List } from "@/app/components/List";
import { PrintedEditionModal } from "./PrintedEditionModal";
import { Skeleton } from "../components/Skeleton";

import { Post } from "@/types";

interface PostsHighlightProps {
  posts: Post[];
}

export const PostsHighlight: React.FC<PostsHighlightProps> = ({ posts }) => {
  const [printedEditionModal, setPrintedEditionModal] = useState(false);
  // const listPosts =
  //   posts.map((post: any) => ({
  //     title: post.title,
  //   })) ?? [];

  const handlePrintedEditionModal = () => {
    setPrintedEditionModal(true);
  };

  const handleClosePrintedEditionModal = () => {
    setPrintedEditionModal(false);
  };

  return (
    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-4">
      <section className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-rows-3 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts
            .slice(0, 1)
            .map((post: any) => (
              <CardHighlight
                key={post._id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.images[0].url}
                className="col-span-2 lg:col-span-2 lg:row-span-2 lg:h-full"
              />
            ))
        ) : (
          <Skeleton className="col-span-2 lg:col-span-2 lg:row-span-2 lg:h-full" />
        )}

        {posts.length > 0
          ? posts.slice(1, 6).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.images[0],
                  category: post.category,
                }}
                className="h-full"
                imageClassName="h-[250px] object-cover"
              />
            ))
          : [1, 2, 3, 4, 5].map((_, index) => <Skeleton key={index} />)}
      </section>

      <section className="grid flex-col h-full gap-3 lg:col-span-1 md:col-span-2">
        {/* EDICION IMPRESA */}
        <article className="p-3 border">
          <img
            src="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/ediciones_impresas/2023/07/20_200723.jpg"
            alt=""
          />

          <Button
            onClick={handlePrintedEditionModal}
            variant="link"
            className="mx-auto"
            iconLeft={
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
              >
                <path
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            }
          >
            Ampliar
          </Button>

          <span className="md:sticky">
            <PrintedEditionModal
              isOpen={printedEditionModal}
              onClose={handleClosePrintedEditionModal}
              url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/ediciones_impresas/2023/07/20_200723.jpg"
            />
          </span>
        </article>

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
