// posts-super-highlight component

import React from "react";

import { Post } from "@/types";

import { CardHighlight } from "@/app/components/CardHighlight";
import { Skeleton } from "../components/Skeleton";

import { PostsPositions, fetchPosts } from "../service/app.service";

export const PostsSuperHighlight: React.FC = async () => {
  const posts = await fetchPosts({
    position: PostsPositions.highlight,
    postsLimit: 3,
  });

  return (
    <div className="flex flex-col gap-5">
      {posts && posts.length > 0 ? (
        <>
          <CardHighlight
            item={{
              title: posts[0].title,
              flywheel: posts[0].flywheel,
              image: posts[0].images[0],
              category: posts[0].category,
              slug: posts[0].slug,
            }}
            className="col-span-2"
            fullWidth
          />
          <div className="container mx-auto grid grid-cols-2 gap-3">
            <CardHighlight
              item={{
                title: posts[1].title,
                flywheel: posts[1].flywheel,
                image: posts[1].images[0],
                category: posts[1].category,
                slug: posts[1].slug,
              }}
            />
            <CardHighlight
              item={{
                title: posts[2].title,
                flywheel: posts[2].flywheel,
                image: posts[2].images[0],
                category: posts[2].category,
                slug: posts[2].slug,
              }}
            />
          </div>{" "}
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};
