import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";

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
        <CardHighlight
          title={posts.docs[0].title}
          excerpt={posts.docs[0].excerpt}
          image={posts.docs[0].images[0].url}
        />
        <CardHighlight
          title={posts.docs[1].title}
          excerpt={posts.docs[1].excerpt}
          image={posts.docs[1].images[0].url}
        />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
