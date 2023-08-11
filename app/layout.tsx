import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { AdServerPositions } from "./features/ad-servers/service/ad-servers.service";

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
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header
          categories={categories}
          banner={{
            position: AdServerPositions.horizontal1,
          }}
        />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer categories={categories} />
      </body>
    </html>
  );
}
