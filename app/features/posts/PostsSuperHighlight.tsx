// posts-super-highlight component

import React from "react";

import { CardHighlight } from "@/app/components/CardHighlight";
import { Skeleton } from "@/app/components/Skeleton";

import { fetchPostsWithOptions, PostsPositions } from "./service/posts.service";

export const PostsSuperHighlight: React.FC = async () => {
  const posts = await fetchPostsWithOptions({
    option: "tag",
    value: "vivo deportes",
    postsLimit: 0,
  });

  const SuperHightlightLayout = () => {
    switch (posts.length) {
      case 1:
        return (
          <CardHighlight
            item={{
              title: posts[0].title,
              flywheel: posts[0].flywheel,
              image: posts[0].images[0],
              category: posts[0].category,
              slug: posts[0].slug,
              liveSports: posts[0].liveSports,
            }}
            className="col-span-2"
            fullWidth
          />
        );
      case 2:
        return (
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 px-3 lg:px-0">
            <CardHighlight
              item={{
                title: posts[0].title,
                flywheel: posts[0].flywheel,
                image: posts[0].images[0],
                category: posts[0].category,
                slug: posts[0].slug,
                liveSports: posts[0].liveSports,
              }}
            />
            <CardHighlight
              item={{
                title: posts[1].title,
                flywheel: posts[1].flywheel,
                image: posts[1].images[0],
                category: posts[1].category,
                slug: posts[1].slug,
                liveSports: posts[0].liveSports,
              }}
            />
          </div>
        );
      default:
        return (
          <>
            <CardHighlight
              item={{
                title: posts[0].title,
                flywheel: posts[0].flywheel,
                image: posts[0].images[0],
                category: posts[0].category,
                slug: posts[0].slug,
                liveSports: posts[0].liveSports,
              }}
              className="col-span-2"
              fullWidth
            />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 px-3 lg:px-0">
              <CardHighlight
                item={{
                  title: posts[1].title,
                  flywheel: posts[1].flywheel,
                  image: posts[1].images[0],
                  category: posts[1].category,
                  slug: posts[1].slug,
                  liveSports: posts[0].liveSports,
                }}
              />
              <CardHighlight
                item={{
                  title: posts[2].title,
                  flywheel: posts[2].flywheel,
                  image: posts[2].images[0],
                  category: posts[2].category,
                  slug: posts[2].slug,
                  liveSports: posts[0].liveSports,
                }}
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {posts && posts.length > 0 ? <SuperHightlightLayout /> : <Skeleton />}
    </div>
  );
};
