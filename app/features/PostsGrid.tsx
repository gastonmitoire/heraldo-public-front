// posts grid component

import React from "react";

import { AdServer, Post, PostsWithPagination } from "@/types";

import { Banner } from "@/app/components/Banner";

import { Card } from "../components/Card";

interface PostsGridProps extends PostsWithPagination {
  hasAsideBanner?: {
    banner: Pick<AdServer, "url" | "title">;
    sticky?: boolean;
    className?: string;
  };
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
  hasAsideBanner = {
    banner: {
      url: "",
      title: "",
    },
  },
  hasHeader,
  hasPagination,
}) => {
  return (
    <div className={`grid grid-cols-4`}>
      {hasHeader && <h2>{hasHeader.title}</h2>}

      <div
        className={`${
          hasAsideBanner.banner ? "col-span-4" : "col-span-3"
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}
      >
        {docs.map((post: Post) => (
          <Card
            key={post._id}
            post={post}
            imageClassName="h-[200px] 2xl:h-[300px] object-cover"
          />
        ))}
      </div>
      {hasAsideBanner && (
        <aside className="col-span-1">
          <Banner
            url={hasAsideBanner.banner.url}
            title={hasAsideBanner.banner.title}
            className={hasAsideBanner.className}
            sticky={hasAsideBanner.sticky}
          />
        </aside>
      )}
    </div>
  );
};
