import React from "react";
import LoadMore from "@/components/LoadMore";
import { fetchCategoryAnime } from "@/lib/actions/action";

export default async function TopAnimePage() {
  const topAnime = await fetchCategoryAnime(1, 8, "");
  return (
    <>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 text-white">
        <h2 className="text-3xl font-bold capitalize">Top Anime</h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {topAnime}
        </section>
        <LoadMore filterBy="" />
      </main>
    </>
  );
}
