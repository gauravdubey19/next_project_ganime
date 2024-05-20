import React from "react";
import LoadMore from "@/components/LoadMore";
import { fetchCategoryAnime } from "@/lib/actions/action";
import Goback from "@/components/Goback";

export default async function PopularAnimePage() {
  const popularAnimeData = await fetchCategoryAnime(1, 8, "bypopularity");
  return (
    <>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 text-white">
        <div className="flex gap-4">
          <Goback />
          <h2 className="text-3xl font-bold capitalize">Popular Animes</h2>
        </div>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {popularAnimeData}
        </section>
        <LoadMore filterBy="bypopularity" />
      </main>
    </>
  );
}
