// posts grid component

import React from "react";

import { Post, PostsWithPagination } from "@/types";

import { Card } from "../components/Card";

interface PostsGridProps extends PostsWithPagination {
  aside?: React.ReactNode;
  hasHeader?: {
    title: string;
  };
  hasPagination?: boolean;
}

export const PostsGrid: React.FC<PostsGridProps> = ({
  docs,
  totalDocs,
  limit = 4,
  totalPages,
  page,
  pagingCounter,
  hasPrevPage,
  hasNextPage,
  prevPage,
  nextPage,
  aside,
  hasHeader,
  hasPagination,
}) => {
  return (
    <div className={`grid grid-cols-4 ${aside && "gap-4"}`}>
      {hasHeader && <h2>{hasHeader.title}</h2>}

      <div
        className={`${
          aside ? "col-span-3" : "col-span-4"
        } grid grid-cols-1 md:grid-cols-2 gap-4 ${
          aside ? " lg:grid-cols-3" : "lg:grid-cols-4"
        }`}
      >
        {docs.map((post: Post) => (
          <Card
            key={post._id}
            post={post}
            imageClassName="h-[200px] 2xl:h-[300px] object-cover"
          />
        ))}
      </div>

      {aside && <aside className="col-span-1">{aside}</aside>}
    </div>
  );
};
