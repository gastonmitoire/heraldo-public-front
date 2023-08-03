import { fetchClient } from "@/app/utils";

import { Post } from "@/types";

export enum PostsPositions {
  front = "front",
  top = "top",
  highlight = "highlight",
}

export enum PostsCategories {
  deportes = "deportes",
}

interface FetchPostsProps {
  position?: PostsPositions;
  category?: PostsCategories;
  postsLimit?: number;
}

export const fetchPosts = async ({
  position,
  category,
  postsLimit,
}: FetchPostsProps) => {
  let url = "";

  if (position) {
    url = `/position/${position}`;
  } else if (category) {
    url = `/category/${category}`;
  }

  const limit = postsLimit ? `?postsLimit=${postsLimit}` : "";

  const finalUrl = `/posts${url}${limit}`;

  console.log("url", finalUrl);
  const response: Post[] = await fetchClient(finalUrl, {
    method: "GET",
  });

  return response;
};
