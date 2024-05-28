import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/shared/Header/Header";

import Provider from "@/app/_providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Page",
  description: "made by @Reckai",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} text-black dark:text-white bg-[#f6f6f6]  dark:bg-bg-color`}
      >
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
