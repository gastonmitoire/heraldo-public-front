import React from "react";

import { SwiperFullscreen } from "./components/SwiperFullscreen";

import { AdServerComponent } from "./features/ad-servers/AdServerComponent";
import { CurrencyAndRiver } from "./features/CurrencyAndRiver";
import { FuneralsPreview } from "./features/FuneralsPreview";
import { PostsHighlight } from "./features/posts/PostsHighlight";
import { PostsGrid } from "./features/posts/PostsGrid";
import { PostsSuperHighlight } from "./features/posts/PostsSuperHighlight";
import { PostsUrgentMarquee } from "./features/posts/PostsUrgentMarquee";

// FEATURES
// Posts
import { PostsFeatured } from "./features/posts/PostsFeatured";
import { PostsFront } from "./features/posts/PostsFront";

//Types
import { FuneralNoticeProps } from "@/types";

import {
  fetchAdServer,
  AdServerPositions,
} from "./features/ad-servers/service/ad-servers.service";
import { fetchFuneralNotices } from "./features/funeral-notices/service/funeral-notices.service";
import {
  fetchPostsWithOptions,
  PostsPositions,
  PostsCategories,
} from "./features/posts/service/posts.service";

export default async function Home() {
  // Posts Calls (Highlight, SuperHighlight, TopPosition, FutbolCategory, EspectaculosCategory, CulturaCategory)
  const postsEspectaculosCategory = await fetchPostsWithOptions({
    option: "category",
    value: PostsCategories.espectaculos,
  });

  // Funerals Calls
  const { docs: funerals } = await fetchFuneralNotices();

  const funeralNotices = funerals.reduce(
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
    <div className="flex flex-col gap-5">
      {/* SUPERHIGHLIGHT SECTION */}
      <section className="flex flex-col gap-5">
        <PostsSuperHighlight />
      </section>

      {/* MARQUEE & BANNER SECTION */}
      <section className="flex flex-col gap-5">
        <PostsUrgentMarquee />

        <AdServerComponent position={AdServerPositions.horizontal2} />
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
        <AdServerComponent position={AdServerPositions.horizontal3} />

        <CurrencyAndRiver />

        <AdServerComponent position={AdServerPositions.horizontal4} />
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
        <AdServerComponent position={AdServerPositions.horizontal5} />

        <PostsGrid
          title="Elecciones 2023"
          fetchPostsProps={{
            option: "tag",
            value: "Elecciones 2023",
          }}
        />

        <AdServerComponent position={AdServerPositions.horizontal6} />

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

        <PostsFront />

        <AdServerComponent position={AdServerPositions.horizontal7} />
      </section>

      {/* FUNERALS PREVIEW SECTION & BANNER (horizontal8, horizontal9) & POSTS-FEATURED (category: deportes) */}
      <section className="container mx-auto flex flex-col gap-5">
        <FuneralsPreview funerals={funeralNotices.slice(0, 5)} />

        <AdServerComponent position={AdServerPositions.horizontal8} />

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

        <AdServerComponent position={AdServerPositions.horizontal9} />
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
        <AdServerComponent position={AdServerPositions.horizontal10} />

        <PostsGrid
          title="Cultura"
          fetchPostsProps={{
            option: "category",
            value: PostsCategories.cultura,
            postsLimit: 4,
          }}
        />

        <AdServerComponent position={AdServerPositions.horizontal11} />

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
