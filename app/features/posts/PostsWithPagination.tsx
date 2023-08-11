// posts with pagination component
"use client";

import React, { useState } from "react";

import { useQueryClient, useQuery } from "@tanstack/react-query";

import { DocsWithPaginationProps } from "@/types";

import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Skeleton } from "@/app/components/Skeleton";

import { fetchPostsWithPagination } from "./service/posts.service";

interface PostsWithPaginationProps {
  option: "category" | "tag";
  value: string;
  aside?: React.ReactNode;
}

export const PostsWithPagination: React.FC<PostsWithPaginationProps> = ({
  option,
  value,
  aside,
}) => {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);

  const { status, data, error, isFetching, isPreviousData, isSuccess } =
    useQuery({
      queryKey: ["posts", { page, option, value }],
      queryFn: () =>
        fetchPostsWithPagination({
          page,
          option,
          value,
        }),
    });

  const posts = data?.docs;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 w-full">
      <div className="col-span-1 xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-3 px-3 xl:px-0">
        {isSuccess
          ? posts!.slice(0, 2).map((post: any) => (
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
                className="h-[300px] xl:h-[500px]"
              />
            ))
          : [1, 2].map((n) => <Skeleton key={n} className="min-h-[500px]" />)}
      </div>

      <div className="col-span-1 xl:col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-3 px-3 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-span-3 gap-3">
          {isSuccess
            ? posts!.slice(2).map((post: any) => (
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
                />
              ))
            : [1, 2, 3, 4, 5, 6].map((n) => (
                <Skeleton key={n} className="h-[300px]" />
              ))}
        </div>
      </div>

      <aside className="col-span-1 flex justify-center">{aside}</aside>
    </div>
  );
};
