import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { Skeleton } from "@/app/components/Skeleton";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const URL = process.env.API_URL;
  const posts = await fetch(
    `${URL}/posts/category/${params.categorySlug}`
  ).then((res) => res.json());

  return (
    <div className="container mx-auto flex flex-col gap-5">
      <h1 className="text-4xl font-bold capitalize text-gray-800">
        {params.categorySlug}
      </h1>

      <div className="grid grid-cols-2 gap-3">
        {posts ? (
          posts.docs
            .slice(0, 2)
            .map((post: any) => (
              <CardHighlight
                key={post._id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.images[0].url}
              />
            ))
        ) : (
          <Skeleton className="h-[400px] 2xl:h-[450px] object-cover" />
        )}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {posts.docs.slice(2).map((post: any) => (
            <Card
              key={post._id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.images[0].url}
              category={post.category.name}
              imageClassName="h-[200px] 2xl:h-[300px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
