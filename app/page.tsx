import React, { useEffect } from "react";

import { Banner } from "./components/Banner";
import { CardHighlight } from "./components/CardHighlight";
import { Marquee } from "./components/Marquee";

import { PostsHighlight } from "./features/PostsHighlight";
import { PostsSuperHighlight } from "./features/PostsSuperHighlight";

const postFakeData = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  image: "https://source.unsplash.com/random",
  category: "categoria",
  href: "/",
};

const apiUrl = `https://k3gj5umrp4.execute-api.us-east-1.amazonaws.com/api`;

async function fetchPosts() {
  const res = await fetch(`${apiUrl}/posts`);

  if (!res.ok) {
    console.log("error");
    return;
  }

  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col gap-5">
      {/* SUPERHIGHLIGHT SECTION */}
      <section className="flex flex-col gap-5">
        <PostsSuperHighlight posts={posts} />
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
        <PostsHighlight posts={posts} />
      </section>
    </div>
  );
}
