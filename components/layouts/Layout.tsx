import { cn } from "@/lib/utils";
import { Oxanium, Oxygen } from "next/font/google";
import { PropsWithChildren } from "react";

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
    <div className={cn(oxanium.variable, oxygen.variable, "font-oxygen")}>
      {children}
    </div>
  );
};

export default Layout;
