// posts-highlight component

import React, { useState, useEffect } from "react";

import { Banner } from "@/app/components/Banner";
import { Card } from "@/app/components/Card";
import { CardHighlight } from "@/app/components/CardHighlight";
import { List } from "@/app/components/List";

const apiUrl = `https://k3gj5umrp4.execute-api.us-east-1.amazonaws.com/api`;

async function fetchData() {
  const res = await fetch(`${apiUrl}/posts`);

  if (!res.ok) {
    console.log("error");
    return;
  }

  return res.json();
}

export const PostsHighlight: React.FC = async () => {
  const data = await fetchData();

  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="col-span-5 grid grid-cols-3 gap-3">
        <div className="col-span-2 flex flex-col gap-3">
          <CardHighlight
            title={data.docs[0].title}
            excerpt={data.docs[0].excerpt}
            image={data.docs[0].images[0].url}
            className="col-span-2"
          />
          <div className="flex justify-evenly gap-3">
            <Card
              title={data.docs[0].title}
              excerpt={data.docs[0].excerpt}
              image={data.docs[0].images[0].url}
              category={data.docs[0].category.name}
            />
            <Card
              title={data.docs[0].title}
              excerpt={data.docs[0].excerpt}
              image={data.docs[0].images[0].url}
              category={data.docs[0].category.name}
            />
          </div>
        </div>
        <Banner
          url="https://cms-el-heraldo-prod.s3.us-east-1.amazonaws.com/cartelera/2023/06/05_Banner265x620BotUn.jpg"
          title="titulo"
          className="col-span-1 max-h-[600px]"
          sticky
        />
      </div>
      <div className="col-span-2">
        <List
          heading="Ultimas Noticias"
          items={data.docs.map((post: any) => ({
            title: post.title,
          }))}
          className="border"
        />
      </div>
    </div>
  );
};
