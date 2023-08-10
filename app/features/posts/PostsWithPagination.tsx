// posts with pagination component
"use client";

import React, { useState } from "react";

import { useQueryClient, useQuery } from "@tanstack/react-query";

import { DocsWithPaginationProps } from "@/types";

import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";

import { fetchPostsWithPagination } from "./service/posts.service";

interface PostsWithPaginationProps {
  posts: any[];
  option: "category" | "tag";
  value: string;
}

export const PostsWithPagination: React.FC<PostsWithPaginationProps> = ({
  option,
  value,
}) => {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["posts", { page, option, value }],
    queryFn: () =>
      fetchPostsWithPagination({
        page,
        option,
        value,
      }),
  });

  console.log(value);

  const posts = data?.docs;

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {posts
          ? posts.slice(0, 2).map((post: any) => (
              <CardHighlight
                key={`highlight-post-${post._id}`}
                item={{
                  title: post.title,
                  flywheel: post.flywheel,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                  liveSports: post.liveSports,
                }}
                className="min-h-[500px]"
              />
            ))
          : null}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <div className="grid grid-cols-3 col-span-3 gap-3">
          {posts ? (
            posts.slice(2).map((post: any) => (
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
                imageClassName="h-[200px] 2xl:h-[300px] object-cover"
              />
            ))
          ) : (
            <div className="col-span-3 flex flex-col justify-center items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-500 mx-auto mb-3"
              >
                <path
                  d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-gray-500 text-lg font-semibold">
                No se encontraron noticias para esta categoría.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
