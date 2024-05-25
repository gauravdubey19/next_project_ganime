import { fetchCategoryAnimeCard } from "@/lib/actions/action";

const Category = async () => {
  const popularAnime = await fetchCategoryAnimeCard(1, 15, "bypopularity");
  const topAnime = await fetchCategoryAnimeCard(2, 15, "");
  const upcomingAnime = await fetchCategoryAnimeCard(1, 15, "upcoming");
  const airingAnime = await fetchCategoryAnimeCard(1, 15, "airing");
  return (
    <>
      {popularAnime}
      {topAnime}
      {upcomingAnime}
      {airingAnime}
    </>
  );
};

export default Category;
