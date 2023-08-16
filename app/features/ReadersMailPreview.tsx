// readers-mail preview component

import React from "react";

import { ReadersMailSwiper } from "./ReadersMailSwiper";
import { Heading } from "../components/Heading";

import {
  fetchPostsWithOptions,
  PostsCategories,
} from "./posts/service/posts.service";

export const ReadersMailPreview: React.FC = async () => {
  const posts = await fetchPostsWithOptions({
    option: "category",
    value: PostsCategories.correo_de_lectores,
    postsLimit: 5,
  });

  return (
    <div className="flex flex-col">
      <Heading title="Correo de lectores" link="/noticias/correo_de_lectores" />
      <div>
        <ReadersMailSwiper posts={posts} />
      </div>
    </div>
  );
};
