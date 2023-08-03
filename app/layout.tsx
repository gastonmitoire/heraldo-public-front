import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Heraldo | de Concordia",
  description: "Noticias de Concordia, Entre Ríos, Argentina y el mundo.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const URL = process.env.API_URL;
  const categories = await fetch(`${URL}/categories`).then((res) => res.json());

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header categories={categories} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
