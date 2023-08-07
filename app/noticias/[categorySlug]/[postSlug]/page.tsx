//Custom Components
import { Banner } from "@/app/components/Banner";
import SinglePost from "@/app/features/SinglePost";
import { List } from "@/app/components/List";
import BannerAdSense from "@/app/components/BannerAdSense";
import { CardGridWithSwiper } from "@/app/components/CardGridWithSwiper";

import {
  AdServerPositions,
  fetchAdServer,
  fetchPosts,
  PostsPositions,
  PostsCategories,
} from "@/app/service/app.service";
import { PostsHighlight } from "@/app/features/PostsHighlight";

export default async function Page({
  params,
}: {
  params: {
    categorySlug: string;
    postSlug: string;
  };
}) {
  //fetch posts by category
  const { categorySlug, postSlug } = params;
  const URL = process.env.API_URL;
  const postQuery = fetch(`${URL}/posts/slug/${postSlug}`).then((res) =>
    res.json()
  );

  // position

  function getEnumValueCategories(str: string): PostsCategories | undefined {
    return Object.values(PostsCategories).find(
      (value) => value === str
    ) as PostsCategories;
  }
  const category = getEnumValueCategories(categorySlug);
  const postsCategoryQuery = fetchPosts({
    category: category,
    postsLimit: 4,
  });

  const postsHighlightQuery = fetchPosts({
    position: PostsPositions.highlight,
    postsLimit: 6,
  });

  // AdServer Calls (right,horizontal2, horizontal3, sticky2, netblock1, netblock2, netblock3, netblock4)
  const fetchBannerRight = fetchAdServer({
    position: AdServerPositions.right,
  });
  const fetchBannerHorizontal2 = fetchAdServer({
    position: AdServerPositions.horizontal2,
  });
  const fetchBannerHorizontal3 = fetchAdServer({
    position: AdServerPositions.horizontal3,
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

  const [
    post,
    postsCategory,
    postsHighlight,
    { docs: right },
    { docs: horizontal2 },
    { docs: horizontal3 },
    { docs: sticky2 },
  ] = await Promise.all([
    postQuery,
    postsCategoryQuery,
    postsHighlightQuery,
    fetchBannerRight,
    fetchBannerHorizontal2,
    fetchBannerHorizontal3,
    fetchBannerSticky2,
    fetchBannerNetblock1,
    fetchBannerNetblock2,
    fetchBannerNetblock3,
    fetchBannerNetblock4,
  ]);
  console.log(post);
  //console.log('sticky', sticky2);
  console.log("right", right);

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
              return banner.desktopImage || banner.mobileImage ? (
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
      {/* BANNER HORIZONTAL 1 */}
      <section>
        {horizontal2.map(
          (banner: any) =>
            banner.status === "published" && (
              <Banner
                banner={{
                  title: horizontal2[0]?.title,
                  site: horizontal2[0]?.site,
                  url: horizontal2[0]?.url,
                  desktopImage: horizontal2[0]?.desktopImage,
                  mobileImage: horizontal2[0]?.mobileImage,
                }}
                className="container mx-auto"
                key={banner._id}
              />
            )
        )}
      </section>

      {/* POST OF INTEREST */}
      <section className="container px-5 mx-auto">
        <CardGridWithSwiper data={postsHighlight} className={"px-3"} />
      </section>

      {/* BANNER HORIZONTAL 3 */}
      <section>
        {horizontal3.map(
          (banner: any) =>
            banner.status === "published" && (
              <Banner
                banner={{
                  title: horizontal3[0]?.title,
                  site: horizontal3[0]?.site,
                  url: horizontal3[0]?.url,
                  desktopImage: horizontal3[0]?.desktopImage,
                  mobileImage: horizontal3[0]?.mobileImage,
                }}
                className="container mx-auto"
                key={banner._id}
              />
            )
        )}
      </section>

      {/* POSTS HIGHLIGTH */}
      <PostsHighlight posts={postsHighlight} />
    </div>
  );
}
