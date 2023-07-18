import React, { useEffect } from "react";

import { Banner } from "./components/Banner";
import { CardHighlight } from "./components/CardHighlight";
import { Marquee } from "./components/Marquee";

import { PostsHighlight } from "./features/PostsHighlight";

const postFakeData = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  image: "https://source.unsplash.com/random",
  category: "categoria",
  href: "/",
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/* SUPERHIGHLIGHT SECTION */}
      <section className="flex flex-col gap-5">
        <CardHighlight
          title={postFakeData.title}
          excerpt={postFakeData.excerpt}
          image="https://source.unsplash.com/random"
          className="col-span-2"
          fullWidth
        />

        <div className="container mx-auto grid grid-cols-2 gap-3 px-16">
          <CardHighlight
            title={postFakeData.title}
            excerpt={postFakeData.excerpt}
            image="https://source.unsplash.com/random"
          />
          <CardHighlight
            title={postFakeData.title}
            excerpt={postFakeData.excerpt}
            image="https://source.unsplash.com/random"
          />
        </div>
      </section>

      {/* MARQUEE & BANNER SECTION */}
      <section className="flex flex-col gap-5">
        <Marquee
          titles={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
          ]}
        />

        <Banner
          url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05__ELHERALDO_TPA_ABRIL.gif"
          title="titulo"
          className="container mx-auto"
        />
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="container mx-auto">
        <PostsHighlight />
      </section>
    </div>
  );
}
