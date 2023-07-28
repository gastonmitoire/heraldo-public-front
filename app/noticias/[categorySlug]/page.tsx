import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Skeleton } from "@/app/components/Skeleton";

import { PostsHighlight } from "@/app/features/PostsHighlight";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const URL = process.env.API_URL;
  const posts = await fetch(`${URL}/posts?limit=7`).then((res) => res.json());
  const categoryPosts = await fetch(
    `${URL}/posts/category/${params.categorySlug}`
  ).then((res) => res.json());

  return (
    <div className="container mx-auto flex flex-col gap-5">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold capitalize text-gray-800">
        {categoryPosts
          ? categoryPosts.docs[0].category.name
          : params.categorySlug.replaceAll("_", " ")}
      </h1>

      {/* CATEGORY POSTS HIGHLIGHT */}
      <div className="grid grid-cols-2 gap-3">
        {categoryPosts
          ? categoryPosts.docs
              .slice(0, 2)
              .map((post: any) => (
                <CardHighlight
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.images[0].url}
                />
              ))
          : [1, 2].map((n) => (
              <Skeleton
                key={n}
                className="h-[400px] 2xl:h-[450px] object-cover"
              />
            ))}
      </div>

      {/* CATEGORY POSTS */}
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {categoryPosts
            ? categoryPosts.docs
                .slice(2)
                .map((post: any) => (
                  <Card
                    key={post._id}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.images[0].url}
                    category={post.category.name}
                    imageClassName="h-[200px] 2xl:h-[300px] object-cover"
                  />
                ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <Skeleton
                  key={n}
                  className="h-[250px] 2xl:h-[300px] object-cover"
                />
              ))}
        </div>
      </div>

      {/* POSTS HIGHLIGHT */}
      <PostsHighlight posts={posts} />
    </div>
  );
}
