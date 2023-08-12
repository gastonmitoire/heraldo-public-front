// posts-front component

import React from "react";

import { AdServerComponent } from "../ad-servers/AdServerComponent";
import { Card } from "@/app/components/Card";
import { Heading } from "@/app/components/Heading";

import { AdServerPositions } from "../ad-servers/service/ad-servers.service";
import { fetchPostsWithOptions, PostsPositions } from "./service/posts.service";

export const PostsFront: React.FC = async () => {
  const posts = await fetchPostsWithOptions({
    option: "position",
    value: PostsPositions.front,
    postsLimit: 11,
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
      <div className="col-span-1 xl:col-span-4">
        <Heading title="Más noticias" />
      </div>
      <div className="col-span-1 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        <AdServerComponent position={AdServerPositions.netblock2} />
        {posts.slice(0, 2).map((post) => (
          <Card
            key={post._id}
            item={{
              title: post.title,
              slug: post.slug,
              image: post.images[0],
              category: post.category,
              flywheel: post.flywheel,
              liveSports: post.liveSports,
            }}
          />
        ))}
        {posts.slice(2, 4).map((post) => (
          <Card
            key={post._id}
            item={{
              title: post.title,
              slug: post.slug,
              image: post.images[0],
              category: post.category,
              flywheel: post.flywheel,
              liveSports: post.liveSports,
            }}
          />
        ))}
        <AdServerComponent position={AdServerPositions.netblock3} />

        <span className="col-span-1 xl:col-span-3">
          <AdServerComponent position={AdServerPositions.horizontal7} />
        </span>

        {posts.slice(4, 7).map((post) => (
          <Card
            key={post._id}
            item={{
              title: post.title,
              slug: post.slug,
              image: post.images[0],
              category: post.category,
              flywheel: post.flywheel,
              liveSports: post.liveSports,
            }}
          />
        ))}

        <AdServerComponent position={AdServerPositions.netblock4} />
        {posts.slice(7, 9).map((post) => (
          <Card
            key={post._id}
            item={{
              title: post.title,
              slug: post.slug,
              image: post.images[0],
              category: post.category,
              flywheel: post.flywheel,
              liveSports: post.liveSports,
            }}
          />
        ))}
        {posts.slice(9, 11).map((post) => (
          <Card
            key={post._id}
            item={{
              title: post.title,
              slug: post.slug,
              image: post.images[0],
              category: post.category,
              flywheel: post.flywheel,
              liveSports: post.liveSports,
            }}
          />
        ))}
        <AdServerComponent position={AdServerPositions.netblock5} />
      </div>
      <aside className="col-span-1 hidden xl:flex flex-col items-center">
        <span className="sticky top-0 w-[70%]">
          <AdServerComponent position={AdServerPositions.sticky2} />
        </span>
      </aside>

      <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 items-center">
        <AdServerComponent position={AdServerPositions.netblock6} />
        <AdServerComponent position={AdServerPositions.netblock7} />
        <AdServerComponent position={AdServerPositions.netblock8} />
        <AdServerComponent position={AdServerPositions.netblock9} />
      </div>
    </div>
  );
};
