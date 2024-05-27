import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/Components/Header/Header";

import Provider from "@/_providers/providers";
import GraphQLProvider from "@/_providers/UrqlProvider/GraphQLProvider";
import { cookies } from "next/headers";
import SessionWrapper from "@/_providers/SessionWrapper";

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
  const token = cookies().get("access-token")?.value || "";
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} text-black dark:text-white bg-[#f6f6f6]  dark:bg-bg-color`}
      >
        <GraphQLProvider token={token}>
          <SessionWrapper>
            <Provider>
              <Header />
              {children}
            </Provider>
          </SessionWrapper>
        </GraphQLProvider>
      </body>
    </html>
  );
}
