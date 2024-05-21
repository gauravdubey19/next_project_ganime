import React from "react";
import LoadMore from "@/components/LoadMore";
import { fetchCategoryAnime } from "@/lib/actions/action";
import Goback from "@/components/Goback";

export default async function TopAnimePage() {
  const topAnime = await fetchCategoryAnime(1, 10, "");
  return (
    <>
      <main className="sm:p-16 py-16 px-4 lg:px-8 flex flex-col gap-10 text-white">
        <div className="flex gap-4">
          <Goback />
          <h2 className="text-3xl font-bold capitalize">Top Animes</h2>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-10">
          {topAnime}
        </section>
        <LoadMore filterBy="" />
      </main>
    </>
  );
}
