// src/components/layout.tsx

import { ReactNode } from "react";
import { Anton, Alumni_Sans } from "next/font/google";

const FontAnton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"]
});

const FontAlumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-Alumni",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={`${FontAnton.variable} ${FontAlumniSans.variable}`}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
