

import Image from "next/image";
import { SocialMediaShareLinks } from "./SocialMediaShareLinks";


const SinglePost = async ({post} : {
    post: {
        content: string;
        category: { name: string; slug: string };
        section: { name: string };
        publicationDate: string;
        flywheel: string;
        title: string;
        excerpt: string;
        slug: string;
        images: { url: string }[];
        liveSports: string; 
    };
}) => {

  const postContent = await JSON.parse(post.content);
  

  return (
    <section className="grid-cols-1 gap-3 px-0 lg:px-10 lg:col-span-3 ">
          <div className="flex justify-between h-10 px-3 pb-3 border-b-2 md:px-0 ">
            <p className="font-bold">
              {post.category.name} - {post.section.name}
            </p>
            <p>{post.publicationDate}</p>
          </div>

          <div className="flex-1 px-3 py-5 md:px-0">
            <h5 className="pr-16 text-lg font-bold text-blue-500 truncate ">
              {post.flywheel}
            </h5>
            <p className="text-lg font-bold pt-0.5">{post.title}</p>
          </div>
          <div className="relative h-[500px] transition-colors group-hover:bg-black group-hover:bg-opacity-30">
            <Image
              src={post.images[0].url}
              alt={post.title}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col grid-cols-12 gap-3 px-10 pt-10 md:px-0 lg:grid">
            <div className="flex flex-row items-start justify-center col-span-1 ">
              <SocialMediaShareLinks
                title={post.title}
                url={`http://localhost:3000/noticias/${post.category.slug}/${post.slug}`}
                isVertical={true}
                hasShareText={false}
                className="md:flex-row md:justify-start md:gap-3"
              />
            </div>
            <div className="col-span-10 text-left">
              <p className="text-lg italic">{post.excerpt}</p>
              {post.category.slug === "deportes" && 
                <iframe
                  src={post.liveSports}
                  width="100%"
                  height="500px"
                ></iframe>
}
                  {postContent.blocks.map((block: any) => {
                    if (block.type === "image") {
                      return (
                        <div className="mt-4" key={block.id}>
                          <img
                            src={block.data.file.url}
                            alt={block.data.caption}
                          />
                        </div>
                      );
                    }
                    if (block.type === "paragraph") {
                      return (
                        <div
                          className="mt-4"
                          key={block.id}
                          dangerouslySetInnerHTML={{ __html: block.data.text }}
                        />
                      );
                    }
                    if (block.type === "header") {
                      return <h4 className="mt-4" key={block.id}>{block.data.text}</h4>;
                    }
                    if (block.type === "list") {
                      return (
                        <ul className="mt-4" key={block.id} >
                          {block.data.items.map((item: any) => (
                            <li className="mt-1" key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "quote") {
                      return (
                        <blockquote className="mt-4" key={block.id}>
                          {block.data.text}
                        </blockquote>
                      );
                    }
                    if (block.type === "delimiter") {
                      return <hr key={block.id} />;
                    }
                    if (block.type === "raw") {
                      return (
                        <div
                          className="mt-4"
                          key={block.id}
                          dangerouslySetInnerHTML={{ __html: block.data.html }}
                        />
                      );
                    }
                    if (block.type === "code") {
                      return <code key={block.id}>{block.data.code}</code>;
                    }
                    if (block.type === "table") {
                      return (
                        <table className="mt-4" key={block.id}>
                          <thead>
                            <tr>
                              {block.data.content[0].map((item: any) => (
                                <th
                                  key={item}
                                >{item}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.data.content.slice(1).map((item: any) => (
                              <tr key={item}>
                                {item.map((td: any) => (
                                  <td
                                    key={td}
                                  >{td}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    }
                })}
            </div>
            <div className="col-span-1"></div>
          </div>
        </section>
  )
}

export default SinglePost