import Image from "next/image";

//Custom Components
import { Banner } from "@/app/components/Banner";
import { SocialMediaShareLinks } from "@/app/components/SocialMediaShareLinks";
import SinglePost from "@/app/components/SinglePost";
import { List } from "@/app/components/List";
import BannerAdSense from "@/app/components/BannerAdSense";

export default async function Page({
  params,
}: {
  params: {
    categorySlug: string;
    postSlug: string;
  };
}) {
  const { categorySlug, postSlug } = params;
  const URL = process.env.API_URL;
  const postQuery = fetch(`${URL}/posts/slug/${postSlug}`).then((res) =>
    res.json()
  );
  const postsCategoryQuery = fetch(
    `${URL}/posts/category/${categorySlug}?postsLimit=4`
  ).then((res) => res.json());

  const bannersRightQuery = fetch(`${URL}/ad-servers/position/right`).then(
    (res) => res.json()
  );

  const [post, postsCategory, bannersRight] = await Promise.all([
    postQuery,
    postsCategoryQuery,
    bannersRightQuery,
  ]);
  bannersRight.docs.map((banner: any) => console.log(banner.desktopImage));

  return (
    <div className="container flex flex-col gap-5 pt-5 pb-5 mx-auto">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:gap-3">
        <SinglePost post={post} />
        <aside className="flex flex-col">
          {/* BANNER */}
          <div className="min-h-[900px] max-h-[1100px]">
            <Banner
              title="Publicidad"
              url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05_Banner265x620BotUn.jpg"
              className="max-h-[600px] max-w-[300px] flex justify-center object-contain px-5"
              sticky
              border
            />
          </div>
          <List
            items={postsCategory}
            heading={`Últimas de ${post.category.name}`}
            className="mt-5 border-t-2 border-gray-100"
          />
          {/* BANNERS POSITION RIGHT */}
          <div className="flex flex-col gap-5">
            {bannersRight.docs.map((banner: any) => {
              return banner.desktopImage ? (
                <Banner
                  key={banner.id}
                  url={banner.desktopImage?.url || banner.mobileImage?.url}
                  title={banner.title}
                  className={`flex justify-center object-contain px-5 ${
                    banner.status === "published" ? "" : "hidden"
                  }`}
                  imageWidth="100%"
                />
              ) : (
                <BannerAdSense
                  key={banner.id}
                  htmlContent={banner.htmlContent}
                />
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
