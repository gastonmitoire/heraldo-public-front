import React from "react";

import { Banner } from "./components/Banner";
import { CardGridWithSwiper } from "./components/CardGridWithSwiper";
import { Marquee } from "./components/Marquee";

import { CurrencyAndRiver } from "./features/CurrencyAndRiver";
import { FuneralsPreview } from "./features/FuneralsPreview";
import { PostsHighlight } from "./features/PostsHighlight";
import { PostsGrid } from "./features/PostsGrid";
import { PostsSuperHighlight } from "./features/PostsSuperHighlight";

import {
  PostsCategories,
  PostsPositions,
  fetchPosts,
  AdServerPositions,
  fetchAdServer,
} from "@/app/service/app.service";
import { PostsFeatured } from "./features/PostsFeatured";
import { SwiperFullscreen } from "./components/SwiperFullscreen";

export default async function Home() {
  // Posts Calls (Highlight, SuperHighlight, TopPosition, FutbolCategory, EspectaculosCategory, CulturaCategory)
  const postsHighlight = await fetchPosts({
    position: PostsPositions.highlight,
    postsLimit: 6,
  });
  const postsTopPosition = await fetchPosts({
    position: PostsPositions.top,
    postsLimit: 4,
  });
  const postsDeportesCategory = await fetchPosts({
    category: PostsCategories.deportes,
    postsLimit: 5,
  });
  const postsEspectaculosCategory = await fetchPosts({
    category: PostsCategories.espectaculos,
    postsLimit: 5,
  });
  const postsCulturaCategory = await fetchPosts({
    category: PostsCategories.cultura,
    postsLimit: 4,
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
    `${process.env.API_URL}/funeral-notices`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-5">
      {/* SUPERHIGHLIGHT SECTION */}
      <section className="flex flex-col gap-5">
        <PostsSuperHighlight />
      </section>

      {/* MARQUEE & BANNER SECTION */}
      <section className="flex flex-col gap-5">
        <Marquee titles={[].map((post: any) => post.title)} />

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
                className="container mx-auto"
                key={banner._id}
              />
            )
        )}
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="container mx-auto">
        <PostsHighlight posts={postsHighlight} />
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
        />
      </section>

      {/* CARD GRID WITH SWIPER SECTION (TOP NEWS) */}
      <section className="container mx-auto">
        <CardGridWithSwiper data={postsTopPosition} cardClassName="h-[390px]" />
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
        />

        <PostsGrid
          posts={postsDeportesCategory.slice(0, 4)}
          title="Liga Profesional"
        />

        <Banner
          banner={{
            title: bannerHorizontal6[0]?.title,
            site: bannerHorizontal6[0]?.site,
            url: bannerHorizontal6[0]?.url,
            desktopImage: bannerHorizontal6[0]?.desktopImage,
            mobileImage: bannerHorizontal6[0]?.mobileImage,
          }}
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
        />

        <PostsFeatured posts={postsDeportesCategory} />

        <Banner
          banner={{
            title: bannerHorizontal9[0]?.title,
            site: bannerHorizontal9[0]?.site,
            url: bannerHorizontal9[0]?.url,
            desktopImage: bannerHorizontal9[0]?.desktopImage,
            mobileImage: bannerHorizontal9[0]?.mobileImage,
          }}
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
        />

        <PostsGrid posts={postsCulturaCategory} title="Cultura" />

        <Banner
          banner={{
            title: bannerHorizontal11[0]?.title,
            site: bannerHorizontal11[0]?.site,
            url: bannerHorizontal11[0]?.url,
            desktopImage: bannerHorizontal11[0]?.desktopImage,
            mobileImage: bannerHorizontal11[0]?.mobileImage,
          }}
        />

        <PostsGrid
          posts={postsEspectaculosCategory.slice(0, 4)}
          title="Magazine"
        />
      </section>
    </div>
  );
}
