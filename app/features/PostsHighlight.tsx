"use client";

import React, { useState, useEffect } from "react";

import { Banner } from "@/app/components/Banner";
import { Button } from "../components/Button";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { List } from "@/app/components/List";
import { PrintedEditionModal } from "./PrintedEditionModal";

interface Post {
  title: string;
  excerpt: string;
  images: { url: string }[];
  category: { name: string };
}

interface PostsHighlightProps {
  posts: {
    docs: Post[];
  };
}

export const PostsHighlight: React.FC<PostsHighlightProps> = ({ posts }) => {
  const [printedEditionModal, setPrintedEditionModal] = useState(false);

  const handlePrintedEditionModal = () => {
    setPrintedEditionModal(true);
  };

  const handleClosePrintedEditionModal = () => {
    setPrintedEditionModal(false);
  };

  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="col-span-5 grid grid-cols-3 gap-3">
        <div className="col-span-2 flex flex-col gap-3">
          <CardHighlight
            title={posts.docs[0].title}
            excerpt={posts.docs[0].excerpt}
            image={posts.docs[0].images[0].url}
            className="col-span-2"
          />
          <div className="flex justify-evenly gap-3">
            <Card
              title={posts.docs[0].title}
              excerpt={posts.docs[0].excerpt}
              image={posts.docs[0].images[0].url}
              category={posts.docs[0].category.name}
            />
            <Card
              title={posts.docs[0].title}
              excerpt={posts.docs[0].excerpt}
              image={posts.docs[0].images[0].url}
              category={posts.docs[0].category.name}
            />
          </div>
        </div>
        <Banner
          url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05_Banner265x620BotUn.jpg"
          title="titulo"
          className="col-span-1 max-h-[600px]"
          sticky
        />
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        {/* ULTIMAS NOTICIAS */}
        <List
          heading="Ultimas Noticias"
          items={posts.docs.map((post: any) => ({
            title: post.title,
          }))}
          className="border"
        />

        {/* EDICION IMPRESA */}
        <article className="border p-3">
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
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
              >
                <path
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            }
          >
            Ampliar
          </Button>

          <PrintedEditionModal
            isOpen={printedEditionModal}
            onClose={handleClosePrintedEditionModal}
            url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/ediciones_impresas/2023/07/20_200723.jpg"
          />
        </article>
      </div>
    </div>
  );
};
