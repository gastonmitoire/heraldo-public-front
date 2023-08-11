import React from "react";

import { Banner } from "./components/Banner";

import { CurrencyAndRiver } from "./features/CurrencyAndRiver";
import { FuneralsPreview } from "./features/FuneralsPreview";
import { PostsHighlight } from "./features/posts/PostsHighlight";
import { PostsGrid } from "./features/posts/PostsGrid";
import { PostsSuperHighlight } from "./features/posts/PostsSuperHighlight";
import { PostsUrgentMarquee } from "./features/posts/PostsUrgentMarquee";

// FEATURES
// Posts
import { PostsFeatured } from "./features/posts/PostsFeatured";

import { AdServerPositions, fetchAdServer } from "@/app/service/app.service";
import {
  fetchPostsWithOptions,
  PostsPositions,
  PostsCategories,
} from "./features/posts/service/posts.service";
import { SwiperFullscreen } from "./components/SwiperFullscreen";

export default async function Home() {
  // Posts Calls (Highlight, SuperHighlight, TopPosition, FutbolCategory, EspectaculosCategory, CulturaCategory)
  const postsEspectaculosCategory = await fetchPostsWithOptions({
    option: "category",
    value: PostsCategories.espectaculos,
  });

  // AdServer Calls
  // (horizontal2, horizontal3, horizontal4, horizontal5,
  //  horizontal6, horizontal8, horizontal9, horizontal10,
  //  horizontal11)
  const { docs: bannerHorizontal2 } = await fetchAdServer({
    position: AdServerPositions.horizontal2,
  });
  const { docs: bannerHorizontal3 } = await fetchAdServer({
    position: AdServerPositions.horizontal3,
  });
  const { docs: bannerHorizontal4 } = await fetchAdServer({
    position: AdServerPositions.horizontal4,
  });
  const { docs: bannerHorizontal5 } = await fetchAdServer({
    position: AdServerPositions.horizontal5,
  });
  const { docs: bannerHorizontal6 } = await fetchAdServer({
    position: AdServerPositions.horizontal6,
  });
  const { docs: bannerHorizontal8 } = await fetchAdServer({
    position: AdServerPositions.horizontal8,
  });
  const { docs: bannerHorizontal9 } = await fetchAdServer({
    position: AdServerPositions.horizontal9,
  });
  const { docs: bannerHorizontal10 } = await fetchAdServer({
    position: AdServerPositions.horizontal10,
  });
  const { docs: bannerHorizontal11 } = await fetchAdServer({
    position: AdServerPositions.horizontal11,
  });

  // Funerals Calls
  const { docs: funerals } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/funeral-notices`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-5">
      {/* SUPERHIGHLIGHT SECTION */}
      <section className="flex flex-col gap-5">
        <PostsSuperHighlight />
      </section>

      {/* MARQUEE & BANNER SECTION */}
      <section className="flex flex-col gap-5">
        <PostsUrgentMarquee />

        {bannerHorizontal2.map(
          (banner: any) =>
            banner.status === "published" && (
              <Banner
                banner={{
                  title: bannerHorizontal2[0]?.title,
                  site: bannerHorizontal2[0]?.site,
                  url: bannerHorizontal2[0]?.url,
                  desktopImage: bannerHorizontal2[0]?.desktopImage,
                  mobileImage: bannerHorizontal2[0]?.mobileImage,
                }}
                className="container mx-auto px-3 xl:px-0"
                key={banner._id}
              />
            )
        )}
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="container mx-auto">
        <PostsHighlight
          fetchPostsProps={{
            option: "position",
            value: PostsPositions.highlight + "/",
          }}
          bannerConfig={{
            position: AdServerPositions.netblock1,
          }}
        />
      </section>

      {/* BANNERS & CURRENCY SECTION */}
      <section className="container flex flex-col gap-5 mx-auto">
        <Banner
          banner={{
            title: bannerHorizontal3[0]?.title,
            site: bannerHorizontal3[0]?.site,
            url: bannerHorizontal3[0]?.url,
            desktopImage: bannerHorizontal3[0]?.desktopImage,
            mobileImage: bannerHorizontal3[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />

        <CurrencyAndRiver />

        <Banner
          banner={{
            title: bannerHorizontal4[0]?.title,
            site: bannerHorizontal4[0]?.site,
            url: bannerHorizontal4[0]?.url,
            desktopImage: bannerHorizontal4[0]?.desktopImage,
            mobileImage: bannerHorizontal4[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />
      </section>

      {/* CARD GRID WITH SWIPER SECTION (TOP NEWS) */}
      <section className="container mx-auto">
        <PostsGrid
          fetchPostsProps={{
            option: "position",
            value: PostsPositions.top,
          }}
        />
      </section>

      {/* POSTGRID SECTION & BANNERS (FUTBOL TAG, bannerHorizontal5, bannerHorizontal6 ) */}
      <section className="container mx-auto flex flex-col gap-5">
        <Banner
          banner={{
            title: bannerHorizontal5[0]?.title,
            site: bannerHorizontal5[0]?.site,
            url: bannerHorizontal5[0]?.url,
            desktopImage: bannerHorizontal5[0]?.desktopImage,
            mobileImage: bannerHorizontal5[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />

        <PostsGrid
          title="Elecciones 2023"
          fetchPostsProps={{
            option: "tag",
            value: "elecciones2023",
          }}
        />

        <Banner
          banner={{
            title: bannerHorizontal6[0]?.title,
            site: bannerHorizontal6[0]?.site,
            url: bannerHorizontal6[0]?.url,
            desktopImage: bannerHorizontal6[0]?.desktopImage,
            mobileImage: bannerHorizontal6[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />

        <PostsGrid
          title="Agenda Deportiva"
          fetchPostsProps={{
            option: "tag",
            value: "vivo deportes",
          }}
          bannerConfig={{
            position: AdServerPositions.netblock1,
          }}
        />

        <Banner
          banner={{
            title: bannerHorizontal6[0]?.title,
            site: bannerHorizontal6[0]?.site,
            url: bannerHorizontal6[0]?.url,
            desktopImage: bannerHorizontal6[0]?.desktopImage,
            mobileImage: bannerHorizontal6[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />
      </section>

      {/* FUNERALS PREVIEW SECTION & BANNER (horizontal8, horizontal9) & POSTS-FEATURED (category: deportes) */}
      <section className="container mx-auto flex flex-col gap-5">
        <FuneralsPreview funerals={funerals.slice(0, 5)} />

        <Banner
          banner={{
            title: bannerHorizontal8[0]?.title,
            site: bannerHorizontal8[0]?.site,
            url: bannerHorizontal8[0]?.url,
            desktopImage: bannerHorizontal8[0]?.desktopImage,
            mobileImage: bannerHorizontal8[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />

        <PostsFeatured
          fetchPostsProps={{
            option: "category",
            value: PostsCategories.deportes,
          }}
          bannerNetblockConfig={{
            position: AdServerPositions.netblock10,
          }}
          bannerStickyConfig={{
            position: AdServerPositions.sticky3,
          }}
        />

        <Banner
          banner={{
            title: bannerHorizontal9[0]?.title,
            site: bannerHorizontal9[0]?.site,
            url: bannerHorizontal9[0]?.url,
            desktopImage: bannerHorizontal9[0]?.desktopImage,
            mobileImage: bannerHorizontal9[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />
      </section>

      {/* GALLERY IMAGE FULLSCREEN (swiper) SECTION */}
      <section>
        <SwiperFullscreen
          posts={postsEspectaculosCategory}
          className="h-[700px]"
        />
      </section>

      {/* BANNERS (horizontal10, horizontal11) & POSTGRID (cultura, magazine) */}
      <section className="container mx-auto flex flex-col gap-5">
        <Banner
          banner={{
            title: bannerHorizontal10[0]?.title,
            site: bannerHorizontal10[0]?.site,
            url: bannerHorizontal10[0]?.url,
            desktopImage: bannerHorizontal10[0]?.desktopImage,
            mobileImage: bannerHorizontal10[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />

        <PostsGrid
          title="Cultura"
          fetchPostsProps={{
            option: "category",
            value: PostsCategories.cultura,
            postsLimit: 4,
          }}
        />

        <Banner
          banner={{
            title: bannerHorizontal11[0]?.title,
            site: bannerHorizontal11[0]?.site,
            url: bannerHorizontal11[0]?.url,
            desktopImage: bannerHorizontal11[0]?.desktopImage,
            mobileImage: bannerHorizontal11[0]?.mobileImage,
          }}
          className="px-3 xl:px-0"
        />

        <PostsGrid
          title="Magazine"
          fetchPostsProps={{
            option: "category",
            value: PostsCategories.espectaculos,
            postsLimit: 4,
          }}
        />
      </section>
    </div>
  );
}
