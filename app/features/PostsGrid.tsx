// posts-grid component by category or position

import React from "react";

import { Post } from "@/types";

import { Card } from "../components/Card";
import { CardGridWithSwiper } from "../components/CardGridWithSwiper";

interface PostsGridProps {
  posts: Post[];
  title: string;
  extended?: boolean;
}

export const PostsGrid: React.FC<PostsGridProps> = ({ posts, title }) => {
  return (
    <div>
      <nav className="flex justify-between gap-5 pb-3">
        <h2 className="flex-0 text-2xl font-bold">{title}</h2>
        <div className="flex-auto flex items-center">
          <div className="w-full border-b border-gray-200"></div>
        </div>
        <button className="flex-0 font-bold opacity-70 transition-opacity hover:opacity-100">
          <span>Ver más</span>
        </button>
      </nav>
      <CardGridWithSwiper data={posts} />
    </div>
  );
};
