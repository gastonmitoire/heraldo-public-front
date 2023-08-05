//Custom Components
import { Banner } from "@/app/components/Banner";
import SinglePost from "@/app/features/SinglePost";
import { List } from "@/app/components/List";
import BannerAdSense from "@/app/components/BannerAdSense";

  
import {AdServerPositions, fetchAdServer } from "@/app/service/app.service";

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

  const fetchBannerRight = fetchAdServer({
    position: AdServerPositions.right,
  });

  const fetchBannerSticky2 = fetchAdServer({
    position: AdServerPositions.sticky2,
  });

  const fetchBannerNetblock1 = fetchAdServer({
    position: AdServerPositions.netblock1,
  });

  const fetchBannerNetblock2 = fetchAdServer({
    position: AdServerPositions.netblock2,
  });
 
  const fetchBannerNetblock3 = fetchAdServer({
    position: AdServerPositions.netblock3,
  });

  const fetchBannerNetblock4 = fetchAdServer({
    position: AdServerPositions.netblock4,
  });

  const [post, postsCategory, {docs: right}, {docs: sticky2}] = await Promise.all([
    postQuery,
    postsCategoryQuery,
    fetchBannerRight,
    fetchBannerSticky2,
    fetchBannerNetblock1,
    fetchBannerNetblock2,
    fetchBannerNetblock3,
    fetchBannerNetblock4,
  ]);
  console.log(post);
  //console.log('sticky', sticky2);
  console.log('right', right);
  
  
  //right.docs.map((banner: any) => console.log(banner.desktopImage));

  return (
    <div className="flex flex-col gap-5 pt-5 pb-5 mx-auto md:container">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:gap-3">
        <SinglePost post={post} />
        <aside className="flex-col hidden lg:flex">
          {/* BANNER */}
          <div className="min-h-[900px] max-h-[1100px]">
            <Banner
              banner={{
                title: sticky2[0]?.title,
                site: sticky2[0]?.site,
                url: sticky2[0]?.url,
                desktopImage: sticky2[0]?.desktopImage,
                mobileImage: sticky2[0]?.mobileImage,
              }}
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
            {right.map((banner: any) => {
              return banner.desktopImage ? (
                <Banner
                  key={banner._id}
                  banner={{
                    title: banner.title,
                    site: banner.site,
                    url: banner.url,
                    desktopImage: banner.desktopImage,
                    mobileImage: banner.mobileImage,
                  }}
                  className={`flex justify-center object-contain px-5 ${
                    banner.status === "published" ? "" : "hidden"
                  }`}
                  imageWidth="100%"
                />
              ) : (
                <BannerAdSense
                  key={banner._id}
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
