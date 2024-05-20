import React from "react";
import LoadMore from "@/components/LoadMore";
import { fetchCategoryAnime } from "@/lib/actions/action";

export default async function UpcomingAnimePage() {
  const upcomingAnime = await fetchCategoryAnime(1, 8, "upcoming");
  return (
    <>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 text-white">
        <h2 className="text-3xl font-bold capitalize">upcoming Anime</h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {upcomingAnime}
        </section>
        <LoadMore filterBy="upcoming" />
      </main>
    </>
  );
}
