import React from "react";

import { Card } from "./components/Card";
import { CardHighlight } from "./components/CardHighlight";

const cardFakeData = {
  excerpt: "Lorem ipsum dolor sit amet",
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id ultricies ultrices, nunc sapien aliquam nunc, vitae aliquam nisl nisl nec nisl.",
  image: "https://source.unsplash.com/random/800x600",
  category: "Categoria",
  href: "/",
};

export default function Home() {
  return (
    <div>
      <CardHighlight
        excerpt={cardFakeData.excerpt}
        title={cardFakeData.title}
        image={cardFakeData.image}
        fullWidth={true}
      />
      <CardHighlight
        excerpt={cardFakeData.excerpt}
        title={cardFakeData.title}
        image={cardFakeData.image}
      />
      <Card
        excerpt={cardFakeData.excerpt}
        title={cardFakeData.title}
        image={cardFakeData.image}
        category={cardFakeData.category}
        href={cardFakeData.href}
        horizontal
      />
      <Card
        excerpt={cardFakeData.excerpt}
        title={cardFakeData.title}
        image={cardFakeData.image}
        category={cardFakeData.category}
        href={cardFakeData.href}
      />
    </div>
  );
}
