/* import { fetchPostBySlug } from "@/app/service/app.service";
import { ImageResponse } from "next/server";
import Image from "next/image";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function og({
  params,
}: {
  params: { categorySlug: string; postSlug: string };
}) {
  const { categorySlug, postSlug } = params;

  const post = await fetchPostBySlug({
    postSlug: postSlug,
  });
  return new ImageResponse(
    (
      <div tw={`flex flex-col group hover:cursor-pointer transition-all`}>
        <div tw="flex flex-1 relative group-hover:brightness-75 transition-all h-[630px] w-[1200px]">
          <span tw="absolute top-3 left-3 uppercase bg-black bg-opacity-80 text-white font-light text-sm py-1 px-3">
            {post?.category?.name.toUpperCase()}
          </span>
          <img
            src={post?.images[0].url}
            alt={post?.title}
            tw={`max-h-[300px] w-full`}
            height={630}
            width={1200}
          />
        </div>
        <div tw="flex flex-1 pt-3 border p-5">
          <h5 tw="text-blue-500 truncate text-lg font-bold pr-16">
            {post?.excerpt}
          </h5>
          <p tw="text-lg font-bold">{post?.title}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
 */