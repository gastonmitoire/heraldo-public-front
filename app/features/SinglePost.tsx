import Image from "next/image";
import { formatDate } from "../service/app.service";
import { SocialMediaShareLinks } from "../components/SocialMediaShareLinks";
import PostContent from "./PostContent";

const SinglePost = async ({
  post,
}: {
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
  const postContent = await JSON.parse(post?.content);

  const date = formatDate({
    dateString: post?.publicationDate,
    dateFormat: "cccc',' dd 'de' MMMM 'de' yyyy",
  });

  return (
    <section className="grid-cols-1 gap-3 px-0 lg:px-10 lg:col-span-3 ">
      <div className="flex justify-between h-10 px-3 pb-3 border-b-2 md:px-0 ">
        <p className="font-bold">
          {post?.category.name} - {post?.section.name}
        </p>
        <time dateTime={post?.publicationDate}>{date}</time>
      </div>
      <div className="flex-1 px-3 py-5 md:px-0">
        <h5 className="pr-16 text-lg font-bold text-blue-500 truncate ">
          {post?.flywheel}
        </h5>
        <p className="text-lg font-bold pt-0.5">{post?.title}</p>
        <p className="text-lg italic">{post?.excerpt}</p>
      </div>
      <div className="relative h-[500px] md:h-[600px] xl:h-[700px] transition-colors group-hover:bg-black group-hover:bg-opacity-30">
        <Image
          src={post?.images[0].url}
          alt={post?.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col grid-cols-12 gap-3 px-10 pt-10 md:px-0 lg:grid">
        <div className="flex flex-row items-start justify-center col-span-1 ">
          <SocialMediaShareLinks
            title={post?.title}
            url={`http://localhost:3000/noticias/${post?.category.slug}/${post?.slug}`}
            isVertical={true}
            hasShareText={false}
            className="md:flex-row md:justify-start md:gap-3"
          />
        </div>
        <div className="col-span-10 text-left">
          {post?.category.slug === "deportes" && (
            <iframe src={post?.liveSports} width="100%" height="500px"></iframe>
          )}
          <section>
            <PostContent data={postContent} />
          </section>
        </div>
        <div className="col-span-1"></div>
      </div>
    </section>
  );
};

export default SinglePost;
