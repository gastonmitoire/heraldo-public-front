import React, { useEffect } from "react";

import { PostsWithPagination } from "@/types";

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

  // AdServer Calls (horizontal1, horizontal2)

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

        <Banner
          url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05__ELHERALDO_TPA_ABRIL.gif"
          title="titulo"
          className="container mx-auto"
        />
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="container mx-auto">
        <PostsHighlight posts={postsHighlight} />
      </section>

      {/* BANNERS & CURRENCY SECTION */}
      <section className="flex flex-col gap-5 container mx-auto">
        <Banner
          url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05__bannerweb970x90px_GIF.gif"
          title="titulo"
          imageWidth="100%"
        />

        <CurrencyAndRiverSwiper dataCurrency={dataCurrency} dataRiver={[]} />

        <Banner
          url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/avisos/2023/07/19_El-Heraldo_endulzate.gif"
          title="titulo"
          imageWidth="100%"
        />
      </section>

      {/* CARD GRID WITH SWIPER SECTION (TOP NEWS) */}
      <section className="container mx-auto">
        <CardGridWithSwiper data={postsTopPosition} />
      </section>
    </div>
  );
}
