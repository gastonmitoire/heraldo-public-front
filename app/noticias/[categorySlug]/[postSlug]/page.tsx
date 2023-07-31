import Image from "next/image";

//Custom Components
import { Banner } from "@/app/components/Banner";
import { CardHighlight } from "@/app/components/CardHighlight";

export default async function Page({
  params,
}: {
  params: { postSlug: string };
}) {
  const { postSlug } = params;
  const URL = process.env.API_URL;
  const post = await fetch(`${URL}/posts/slug/${postSlug}`).then((res) =>
    res.json()
  );

  console.log(post);

  return (
    <div className="container flex flex-col gap-5 pt-5 mx-auto">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:gap-3">
        <section className="grid grid-cols-1 gap-3 lg:col-span-3 ">
          <div className="flex justify-between pb-3 border-b-2 ">
            <p className="font-bold">
            {post.category.name} - {post.section.name}
            </p>
            <p>
                {post.publicationDate}
            </p>
          </div>

          <div className="flex-1">
            <h5 className="text-blue-500 truncate text-lg font-bold pb-1.5 pr-16">
              {post.flywheel}
            </h5>
            <p className="text-lg font-bold pt-1.5">{post.title}</p>
          </div>
          <div className="relative h-[500px] transition-colors group-hover:bg-black group-hover:bg-opacity-30">
            <Image
              src={post.images[0].url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </section>
        <aside className="flex flex-col">
          {/* BANNER */}
          <Banner
            title="Publicidad"
            url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05_Banner265x620BotUn.jpg"
            className="max-h-[600px] object-contain px-5"
            sticky
            border
          />
        </aside>
      </div>
    </div>
  );
}
