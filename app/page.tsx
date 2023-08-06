import React from "react";

import { Banner } from "./components/Banner";
import { CardGridWithSwiper } from "./components/CardGridWithSwiper";
import { CardHighlight } from "./components/CardHighlight";
import { Marquee } from "./components/Marquee";

import { CurrencyAndRiverSwiper } from "./features/CurrencyAndRiverSwiper";
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

async function fetchDataCurrency() {
  const res = await fetch(`https://www.dolarsi.com/api/api.php?type=dolar`);
  const res2 = await fetch(
    `https://www.dolarsi.com/api/api.php?type=cotizador`
  );

  if (!res.ok || !res2.ok) {
    console.log("error");
    return;
  }

  const data = await res.json();

  const data2 = await res2.json();

  return [
    ...data.filter(
      (curr: any) =>
        curr.casa?.nombre.includes("Oficial") ||
        curr.casa?.nombre?.includes("Blue")
    ),
    ...data2.filter(
      (curr: any) =>
        curr.casa?.nombre.includes("Peso Uruguayo") ||
        curr.casa?.nombre?.includes("Real")
    ),
  ];
}

export default async function Home() {
  // Posts Calls (Highlight, SuperHighlight, TopPosition, FutbolCategory)
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
    postsLimit: 4,
  });

  // AdServer Calls (horizontal2, horizontal3, horizontal4, horizontal5)
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

  const dataCurrency = await fetchDataCurrency();

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

        <CurrencyAndRiverSwiper dataCurrency={dataCurrency} dataRiver={[]} />

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

      {/* BANNER SECTION (horizontal5) */}
      <Banner
        banner={{
          title: bannerHorizontal5[0]?.title,
          site: bannerHorizontal5[0]?.site,
          url: bannerHorizontal5[0]?.url,
          desktopImage: bannerHorizontal5[0]?.desktopImage,
          mobileImage: bannerHorizontal5[0]?.mobileImage,
        }}
      />

      {/* CARD GRID WITH SWIPER SECTION (CATEGORY NEWS) */}
      <section className="container mx-auto">
        <PostsGrid
          posts={postsDeportesCategory}
          title="Liga Profesional"
          extended={true}
        />
      </section>
    </div>
  );
}
