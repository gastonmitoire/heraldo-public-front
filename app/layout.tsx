import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

import { fetchAdServer, AdServerPositions } from "@/app/service/app.service";

import Providers from "./providers";

export const generateMetadata = async () => {
  return {
    metadataBase: new URL("https://www.elheraldo.com.ar/"),
    title: {
      default: "El Heraldo | de Concordia",
      template: "%s | El Heraldo",
    },
    description: "Noticias de Concordia, Entre Ríos, Argentina y el mundo.",
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const categories = await fetch(`${URL}/categories`).then((res) => res.json());
  const { docs: horizontal1 } = await fetchAdServer({
    position: AdServerPositions.horizontal1,
  });

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header categories={categories} banner={horizontal1[0]} />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer categories={categories} />
      </body>
    </html>
  );
}
