import { FuneralNoticeProps } from "@/types";
import FuneralNoticesContent from "@/app/features/funeral-notices/FuneralNoticesContent";
import {PostsHighlight} from "@/app/features/posts/PostsHighlight";
import { Banner } from "../components/Banner";
import { fetchFuneralNotices } from "../service/app.service";
import {
  fetchAdServer,
  AdServerPositions,
} from "../features/ad-servers/service/ad-servers.service";
import { PostsPositions } from "@/app/features/posts/service/posts.service";

export default async function FunebresPage() {
  const funeralNoticesQuery = fetchFuneralNotices({});

  const fetchBannerSticky2Query = fetchAdServer({
    position: AdServerPositions.sticky2,
  });

  const fetchBannerHorizontal2Query = fetchAdServer({
    position: AdServerPositions.horizontal2,
  });

  const [
    funeralNoticesResponse,
    { docs: bannerSticky2 },
    { docs: horizontal2 },
  ] = await Promise.all([
    funeralNoticesQuery,
    fetchBannerSticky2Query,
    fetchBannerHorizontal2Query,
  ]);

  const funeralNotices = funeralNoticesResponse.reduce(
    (result: FuneralNoticeProps[], current: FuneralNoticeProps) => {
      const exist = result.some((item) => item.title === current.title);

      if (!exist) {
        result.push(current);
      }

      return result;
    },
    []
  );

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 mt-4 xl:mt-8">
      <FuneralNoticesContent
        funeralNotices={funeralNotices}
        bannerSticky2={bannerSticky2}
      />
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

      {/* POSTS HIGHLIGTH */}
      <PostsHighlight
        fetchPostsProps={{
          option: "position",
          value: PostsPositions.highlight + "/",
          postsLimit: 6,
        }}
        bannerConfig={{
          position: AdServerPositions.netblock1,
        }}
      />
    </section>
  );
}
