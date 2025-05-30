import type { Metadata } from "next";
import "./globals.css";
import HephagencyHeader from "@/components/layout/HephagencyHeader";
import { Inter, League_Spartan } from "next/font/google";
import hephagency_config from "@/libs/hephagency_config";
import { ReactNode } from "react";
import clsx from "clsx";
import HephagencyFooter from "@/components/layout/HephagencyFooter";
import ReactLenis from "lenis/react";
import Loader from "@/components/global/Loader";
import translations from "@/libs/translations/translations";

export const metadata: Metadata = {
  title: translations.home_meta_title[hephagency_config.language],
  description: translations.home_meta_description[hephagency_config.language],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "500"]
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["300"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang={hephagency_config.language}
      className={clsx(
        inter.variable,
        leagueSpartan.variable,
      )}
    >
      <ReactLenis root>
        <body className="font-inter bg-grey-dark text-grey-light">
          <Loader/>
          <HephagencyHeader />
          {children}
          <HephagencyFooter />
        </body>
      </ReactLenis>
    </html>
  );
}
