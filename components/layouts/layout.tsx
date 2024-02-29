import { cn } from "@/lib/utils";
import { Oxanium, Oxygen } from "next/font/google";
import Head from "next/head";
import { PropsWithChildren } from "react";
import Header from "../header";

export const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <div className={cn(oxanium.variable, oxygen.variable, "font-oxygen")}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
