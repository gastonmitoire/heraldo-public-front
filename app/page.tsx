import React from "react";

import { Card } from "./components/Card";

// lorem ipsum 90 characters
//

export default function Home() {
  return (
    <div>
      <Card
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id ultricies ultrices, nunc sapien aliquam nunc, vitae aliquam nisl nisl nec nisl."
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id ultricies ultrices, nunc sapien aliquam nunc, vitae aliquam nisl nisl nec nisl."
        category="Categoria"
        image="https://source.unsplash.com/random/800x600"
        href="/"
      />
    </div>
  );
}
