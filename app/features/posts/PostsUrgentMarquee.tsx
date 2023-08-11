// posts-urgent marquee component

import React from "react";

import { Marquee } from "@/app/components/Marquee";

import { fetchPostsWithOptions, PostsPositions } from "./service/posts.service";

export const PostsUrgentMarquee: React.FC = async () => {
  const postsUrgent = await fetchPostsWithOptions({
    option: "position",
    value: PostsPositions.urgent,
    postsLimit: 10,
  });

  const titles = postsUrgent.map((post) => post.title);

  return titles.length > 0 ? <Marquee titles={titles} /> : null;
};
