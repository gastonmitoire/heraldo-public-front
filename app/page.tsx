import React from "react";

import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { CardHighlight } from "./components/CardHighlight";
import { List } from "./components/List";
import { Marquee } from "./components/Marquee";

const postFakeData = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  image: "https://source.unsplash.com/random",
  category: "categoria",
  href: "/",
};

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* SUPERHIGHLIGHT SECTION */}
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
          />
        </section>

        {/* HIGHLIGHT SECTION */}
        <section className="grid grid-cols-7 gap-3">
          <div className="col-span-5 grid grid-cols-3 gap-3">
            <div className="col-span-2 flex flex-col gap-3">
              <CardHighlight
                title={postFakeData.title}
                excerpt={postFakeData.excerpt}
                image={postFakeData.image}
                className="col-span-2"
              />
              <div className="flex justify-evenly gap-3">
                <Card
                  title={postFakeData.title}
                  excerpt={postFakeData.excerpt}
                  image={postFakeData.image}
                  href={postFakeData.href}
                  category={postFakeData.category}
                />
                <Card
                  title={postFakeData.title}
                  excerpt={postFakeData.excerpt}
                  image={postFakeData.image}
                  href={postFakeData.href}
                  category={postFakeData.category}
                />
              </div>
            </div>
            <Banner
              url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05_Banner265x620BotUn.jpg"
              title="titulo"
              className="col-span-1"
            />
          </div>
          <div className="col-span-2">
            <List
              heading="Ultimas Noticias"
              items={[
                postFakeData,
                postFakeData,
                postFakeData,
                postFakeData,
                postFakeData,
                postFakeData,
              ]}
              className="border"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
