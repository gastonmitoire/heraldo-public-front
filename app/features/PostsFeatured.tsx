// posts-featured component
import React from "react";

import { Post } from "@/types";

import { Banner } from "../components/Banner";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";

import { fetchAdServer, AdServerPositions } from "../service/app.service";
import { Heading } from "../components/Heading";

interface PostsFeaturedProps {
  posts: Post[];
}

export const PostsFeatured: React.FC<PostsFeaturedProps> = async ({
  posts,
}) => {
  // AdServer Calls (netblock11, sticky2)
  const { docs: bannerNetblock11 } = await fetchAdServer({
    position: AdServerPositions.netblock11,
  });
  const { docs: bannerSticky2 } = await fetchAdServer({
    position: AdServerPositions.sticky2,
  });

  return (
    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-4">
      <div className="col-span-4">
        <Heading
          title={posts[0].category?.name}
          link={`/noticias/${posts[0].category?.slug}`}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-rows-3 lg:grid-cols-3">
        {posts.length > 0
          ? posts.slice(0, 1).map((post: any) => (
              <CardHighlight
                key={post._id}
                item={{
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="col-span-2 lg:col-span-2 lg:row-span-2 lg:h-full"
              />
            ))
          : null}

        {posts.length > 0
          ? posts.slice(1, 3).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="lg:col-span-1"
              />
            ))
          : null}

        <Banner
          banner={{
            title: bannerNetblock11[0]?.title,
            site: bannerNetblock11[0]?.site,
            url: bannerNetblock11[0]?.url,
            desktopImage: bannerNetblock11[0]?.desktopImage,
            mobileImage: bannerNetblock11[0]?.mobileImage,
          }}
          className="py-5"
        />

        {posts.length > 0
          ? posts.slice(3, 6).map((post: any) => (
              <Card
                key={post._id}
                item={{
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.images[0],
                  category: post.category,
                  slug: post.slug,
                }}
                className="lg:col-span-1"
              />
            ))
          : null}
      </div>
      <aside className="lg:col-span-1 flex flex-col items-center">
        <Banner
          banner={{
            title: bannerSticky2[0]?.title,
            site: bannerSticky2[0]?.site,
            url: bannerSticky2[0]?.url,
            desktopImage: bannerSticky2[0]?.desktopImage,
            mobileImage: bannerSticky2[0]?.mobileImage,
          }}
          sticky
          border
          className="w-[90%] px-3"
        />
      </aside>
    </div>
  );
};
