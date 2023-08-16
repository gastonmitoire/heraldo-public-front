// posts-featured component
import React from "react";

import { PostProps } from "@/types";

import { Banner } from "../../components/Banner";
import { Card } from "@/app/components/Card";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Heading } from "../../components/Heading";

import { AdServerComponent } from "../ad-servers/AdServerComponent";

import { AdServerPositions } from "../ad-servers/service/ad-servers.service";
import {
  fetchPostsWithOptions,
  FetchPostsWithOptionsProps,
  PostsPositions,
} from "./service/posts.service";

interface PostsFeaturedProps {
  fetchPostsProps: FetchPostsWithOptionsProps;
  title?: string;
  bannerNetblockConfig: {
    position: AdServerPositions;
  };
  bannerStickyConfig: {
    position: AdServerPositions;
  };
}

export const PostsFeatured: React.FC<PostsFeaturedProps> = async ({
  fetchPostsProps,
  title,
  bannerNetblockConfig,
  bannerStickyConfig,
}) => {
  const posts = await fetchPostsWithOptions({
    ...fetchPostsProps,
  });

  const filteredPosts = posts.filter(
    (post: PostProps) =>
      post.position !== PostsPositions.super_highlight &&
      post.position !== PostsPositions.highlight &&
      post.position !== PostsPositions.top
  );

  const redirectUrl = (value: string) => {
    switch (value) {
      case "category":
        return posts[0].category?.slug;
      case "position":
        return posts[0].category?.slug;
      case "tag":
        return fetchPostsProps.value;
      default:
        return "";
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-4">
        <Heading
          title={filteredPosts[0].category?.name}
          link={`/noticias/${redirectUrl(fetchPostsProps.option)}`}
        />
      </div>

      <div className="col-span-4 xl:col-span-3 grid grid-cols-3 xl:grid-rows-3 gap-3">
        <div className="col-span-3 xl:col-span-2 h-[300px] xl:row-span-2 xl:h-auto">
          {filteredPosts.length > 0
            ? filteredPosts.slice(0, 1).map((post: any) => (
                <CardHighlight
                  key={post._id}
                  item={{
                    title: post.title,
                    flywheel: post.flywheel,
                    image: post.images[0],
                    category: post.category,
                    slug: post.slug,
                    liveSports: post.liveSports,
                  }}
                  className="xl:h-full"
                />
              ))
            : null}
        </div>

        <div className="col-span-1 row-span-2 hidden xl:grid grid-rows-2 gap-3">
          {filteredPosts.length > 0
            ? filteredPosts.slice(1, 3).map((post: any) => (
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
            : null}
        </div>

        <div className="grid grid-cols-3 gap-3 col-span-3 row-span-1">
          <div className="col-span-3 xl:col-span-1 w-full flex items-center justify-center">
            <AdServerComponent position={bannerNetblockConfig.position} />
          </div>

          <div className="col-span-2 hidden xl:grid grid-cols-2 gap-3">
            {filteredPosts.length > 0
              ? filteredPosts.slice(3, 5).map((post: any) => (
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
              : null}
          </div>
        </div>
      </div>

      <span className="block xl:hidden col-span-4">
        <CardGridWithSwiper
          data={filteredPosts.slice(1, 6)}
          className="col-span-2"
          cardClassName="xl:h-[460px]"
        />
      </span>

      <aside className="xl:col-span-1 flex flex-col items-center">
        <span className="sticky top-0 w-[70%]">
          <AdServerComponent position={bannerStickyConfig.position} />
        </span>
      </aside>
    </div>
  );
};
