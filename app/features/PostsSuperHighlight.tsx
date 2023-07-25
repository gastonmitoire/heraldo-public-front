// posts-super-highlight component

import React from "react";

import { CardHighlight } from "@/app/components/CardHighlight";

import { Post } from "@/types";

interface PostsSuperHighlightProps {
  posts: {
    docs: Post[];
  };
}

export const PostsSuperHighlight: React.FC<PostsSuperHighlightProps> = ({
  posts,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <CardHighlight
        title={posts.docs[0].title}
        excerpt={posts.docs[0].excerpt}
        image={posts.docs[0].images[0].url}
        className="col-span-2"
        fullWidth
      />

      <div className="container mx-auto grid grid-cols-2 gap-3">
        <CardHighlight
          title={posts.docs[1].title}
          excerpt={posts.docs[1].excerpt}
          image={posts.docs[1].images[0].url}
        />
        <CardHighlight
          title={posts.docs[2].title}
          excerpt={posts.docs[2].excerpt}
          image={posts.docs[2].images[0].url}
        />
      </div>
    </div>
  );
};
