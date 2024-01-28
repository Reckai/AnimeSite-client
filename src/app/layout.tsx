import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import "./globals.css";
import Header from "@/app/Components/Header/Header";
import PageWrapper from "./middleware";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Page",
  description: "made by @Reckai",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <PageWrapper>
        {children}
        </PageWrapper>
      </body>
    </html>
  );
}
