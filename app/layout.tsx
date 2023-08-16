import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { AdServerComponent } from "@/app/features/ad-servers/AdServerComponent";
import { AdServerFooter } from "./features/ad-servers/AdServerFooter";
import { AdServerFullscreen } from "./features/ad-servers/AdServerFullscreen";

import {
  fetchAdServer,
  AdServerPositions,
} from "./features/ad-servers/service/ad-servers.service";
import { fetchCategories } from "./service/app.service";
import { fetchPrintedEdition } from "./features/printed-edition/service/printed-edition.service";

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
  const categories = await fetchCategories();
  const { docs: printedEditions } = await fetchPrintedEdition();
  const { docs: fullScreenAdServer } = await fetchAdServer({
    position: AdServerPositions.full_screen,
  });
  const { docs: footerAdServer } = await fetchAdServer({
    position: AdServerPositions.footer,
  });
  return (
    <html lang="en">
      <Providers>
        <body className={montserrat.className}>
          <Header
            categories={categories}
            banner={
              <AdServerComponent position={AdServerPositions.horizontal1} />
            }
            printedEdition={printedEditions[0]}
          />
          <main>{children}</main>
          <Footer categories={categories} printedEdition={printedEditions[0]} />

          {footerAdServer.length > 0 && (
            <AdServerFooter>
              <AdServerComponent position={AdServerPositions.footer} />
            </AdServerFooter>
          )}

          {fullScreenAdServer.length > 0 && (
            <AdServerFullscreen>
              <AdServerComponent position={AdServerPositions.full_screen} />
            </AdServerFullscreen>
          )}
        </body>
      </Providers>
    </html>
  );
}
