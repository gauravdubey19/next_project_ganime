import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Footer from "@/components/Footer";

import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoAnime",
  description: "Your favorite anime, all in one place.",
  icons: { icon: "logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar appName="GoAnime" />
        {/* mt-10 */}
        <main className=" mx-auto bg-[#0F1117]">
          {children}
          <Footer appName="GoAnime" />
        </main>
      </body>
    </html>
  );
}
