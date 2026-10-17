
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://agroinova-angola-f83i.vercel.app"),
  title: "AGROINOVA ANGOLA",
  description:
    "Plataforma Nacional de Investigação, Conhecimento e Inovação Agropecuária de Angola.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
