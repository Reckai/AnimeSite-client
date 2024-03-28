
import React from 'react';
import Header from '@/app/Components/Header/Header';
import MainContent from "@/app/_components/MainContent/MainContent";

export default function Home() {

  return (
    <main className=" mx-auto">
      <Header styles=" dark:bg-gradient-to-r dark:to-gradient-color-via  via-gradient-color-via-2 from-gradient-color-to border-b-2  dark:border-b-0" />

  <MainContent/>

    </main>
  );
}
