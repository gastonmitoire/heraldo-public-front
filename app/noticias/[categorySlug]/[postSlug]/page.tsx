import Image from "next/image";

//Custom Components
import { Banner } from "@/app/components/Banner";
import { SocialMediaShareLinks } from "@/app/components/SocialMediaShareLinks";

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
  const postContent = await JSON.parse(post.content);

  return (
    <div className="container flex flex-col gap-5 pt-5 mx-auto">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:gap-3">
        <section className="grid grid-cols-1 gap-3 lg:col-span-3 ">
          <div className="flex justify-between pb-3 border-b-2 ">
            <p className="font-bold">
              {post.category.name} - {post.section.name}
            </p>
            <p>{post.publicationDate}</p>
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
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col grid-cols-12 gap-3 pt-5 lg:grid">
            <div className="col-span-1">
              <SocialMediaShareLinks
                title={post.title}
                url={`http://localhost:3000/noticias/${post.category.slug}/${post.slug}`}
                isVertical={true}
                hasShareText={false}
              />
            </div>
            <div className="col-span-10 text-left">
              <p className="text-lg italic">{post.excerpt}</p>
              {post.category.slug === "deportes" ? (
                <iframe
                  src={post.liveSports}
                  width="100%"
                  height="500px"
                ></iframe>
              ) : (
                <>
                  {postContent.blocks.map((block: any) => {
                    if (block.type === "image") {
                      return (
                        <div className="mt-4">
                          <img
                            src={block.data.file.url}
                            alt={block.data.caption}
                          />
                        </div>
                      );
                    }
                    if (block.type === "paragraph") {
                      return (
                        <div className="mt-4"
                          dangerouslySetInnerHTML={{ __html: block.data.text }}
                        />
                      );
                    }
                    if (block.type === "header") {
                      return <h4 className="mt-4">{block.data.text}</h4>;
                    }
                    if (block.type === "list") {
                      return (
                        <ul className="mt-4">
                          {block.data.items.map((item : any) => (
                            <li className="mt-1">{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "quote") {
                      return <blockquote className="mt-4">{block.data.text}</blockquote>;
                    }
                    if (block.type === "delimiter") {
                      return <hr />;
                    }
                    if (block.type === "raw") {
                      return (
                        <div className="mt-4"
                          dangerouslySetInnerHTML={{ __html: block.data.html }}
                        />
                      );
                    }
                    if (block.type === "code") {
                      return <code>{block.data.code}</code>;
                    }
                    if (block.type === "table") {
                      return (
                        <table className="mt-4">
                          <thead>
                            <tr>
                              {block.data.content[0].map((item : any) => (
                                <th>{item}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.data.content.slice(1).map((item : any) => (
                              <tr>
                                {item.map((td : any) => (
                                  <td>{td}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    }
                  })}
                </>
              )}
            </div>
            <div className="col-span-1">c</div>
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
