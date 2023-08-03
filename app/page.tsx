import React, { useEffect } from "react";

import { Banner } from "./components/Banner";
import { CardGridWithSwiper } from "./components/CardGridWithSwiper";
import { CardHighlight } from "./components/CardHighlight";
import { Marquee } from "./components/Marquee";

import { CurrencyAndRiverSwiper } from "./features/CurrencyAndRiverSwiper";
import { PostsHighlight } from "./features/PostsHighlight";
import { PostsSuperHighlight } from "./features/PostsSuperHighlight";

import {
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
  // Posts Calls (Highlight, SuperHighlight, TopPosition)
  const postsHighlight = await fetchPosts({
    position: PostsPositions.highlight,
    postsLimit: 6,
  });
  const postsTopPosition = await fetchPosts({
    position: PostsPositions.top,
    postsLimit: 4,
  });

  // AdServer Calls (horizontal2, horizontal3, horizontal4, horizontal5)
  const { docs: horizontal2 } = await fetchAdServer({
    position: AdServerPositions.horizontal2,
  });
  const { docs: horizontal3 } = await fetchAdServer({
    position: AdServerPositions.horizontal3,
  });
  const { docs: horizontal4 } = await fetchAdServer({
    position: AdServerPositions.horizontal4,
  });
  const { docs: horizontal5 } = await fetchAdServer({
    position: AdServerPositions.horizontal5,
  });

  console.log("HOR1", horizontal2);

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
              />
            )
        )}
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="container mx-auto">
        <PostsHighlight posts={postsHighlight} />
      </section>

      {/* BANNERS & CURRENCY SECTION */}
      <section className="flex flex-col gap-5 container mx-auto">
        <Banner
          banner={{
            title: horizontal3[0]?.title,
            site: horizontal3[0]?.site,
            url: horizontal3[0]?.url,
            desktopImage: horizontal3[0]?.desktopImage,
            mobileImage: horizontal3[0]?.mobileImage,
          }}
        />

        <CurrencyAndRiverSwiper dataCurrency={dataCurrency} dataRiver={[]} />

        <Banner
          banner={{
            title: horizontal4[0]?.title,
            site: horizontal4[0]?.site,
            url: horizontal4[0]?.url,
            desktopImage: horizontal4[0]?.desktopImage,
            mobileImage: horizontal4[0]?.mobileImage,
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
          title: horizontal5[0]?.title,
          site: horizontal5[0]?.site,
          url: horizontal5[0]?.url,
          desktopImage: horizontal5[0]?.desktopImage,
          mobileImage: horizontal5[0]?.mobileImage,
        }}
      />
    </div>
  );
}
