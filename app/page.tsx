import React from "react";

import { Card } from "./components/Card";
import { CardHighlight } from "./components/CardHighlight";
import { Marquee } from "./components/Marquee";

const postFakeData = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
};

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* HIGHLIGHT SECTION */}
      <section className="flex flex-col gap-5">
        <CardHighlight
          title={postFakeData.title}
          excerpt={postFakeData.excerpt}
          image="https://source.unsplash.com/random"
          className="col-span-2"
          fullWidth
        />

        <div className="grid grid-cols-2 gap-3 px-16">
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

        {/* MARQUEE & BANNER SECTION */}
        <section>
          <Marquee
            titles={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
            ]}
          />
        </section>
      </section>
    </div>
  );
}
