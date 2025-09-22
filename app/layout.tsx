

import type { Metadata } from "next";
import React from "react";
import { Inter, Dancing_Script } from "next/font/google";
import "@/styles/globals.css";  
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Cursor from "@/components/main/Cursor";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
  weight: '400'
});

export const metadata: Metadata = {
  title: "Smile Portfolio",
  description: "This is vaseng portfolio",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon.ico',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden relative`}>  
        <div className="w-full h-full fixed left-0 top-0 z-[50]">
          <Cursor />
        </div>
        <div className="relative z-[51]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}