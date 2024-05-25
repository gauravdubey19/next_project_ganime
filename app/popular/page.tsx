import React from "react";
import { fetchCategoryAnime } from "@/lib/actions/action";
import CategoryPages from "@/components/CategoryPages";

export default async function PopularAnimePage() {
  const popularAnimeData = await fetchCategoryAnime(1, 10, "bypopularity");
  return (
    <>
      <CategoryPages renderAnime={popularAnimeData} head="popular" />
    </>
  );
}
