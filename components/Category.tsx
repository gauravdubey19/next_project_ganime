import {
  fetchAiringAnimeCard,
  fetchPopularAnimeCard,
  fetchTopAnimeCard,
  fetchUpcomingAnimeCard,
} from "@/lib/actions/action";

const Category = async () => {
  const popularAnime = await fetchPopularAnimeCard(1, 15);
  const topAnime = await fetchTopAnimeCard(1, 15);
  const upcomingAnime = await fetchUpcomingAnimeCard(1, 15);
  const airingAnime = await fetchAiringAnimeCard(1, 15);
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

// import { fetchCategoryAnimeCard } from "@/lib/actions/action";

// const Category = async () => {
//   const popularAnime = await fetchCategoryAnimeCard(1, 15, "bypopularity");
//   const topAnime = await fetchCategoryAnimeCard(2, 15, "");
//   const upcomingAnime = await fetchCategoryAnimeCard(1, 15, "upcoming");
//   const airingAnime = await fetchCategoryAnimeCard(1, 15, "airing");
//   return (
//     <>
//       {popularAnime}
//       {topAnime}
//       {upcomingAnime}
//       {airingAnime}
//     </>
//   );
// };

// export default Category;

// "use client";

// import { useEffect, useState } from "react";
// import { fetchCategoryAnimeCard } from "@/lib/actions/action";

// const Category = () => {
//   const [popularAnime, setPopularAnime] = useState<any>();
//   const [topAnime, setTopAnime] = useState<any>();
//   const [upcomingAnime, setUpcomingAnime] = useState<any>();
//   const [airingAnime, setAiringAnime] = useState<any>();

//   useEffect(() => {
//     const fetchP = async () => {
//       const popularData = await fetchCategoryAnimeCard(1, 15, "bypopularity");
//       setPopularAnime(popularData);
//     };
//     if (!popularAnime) fetchP();

//     const fetchT = async () => {
//       const topData = await fetchCategoryAnimeCard(2, 15, "");
//       setTopAnime(topData);
//     };
//     if (!topAnime) fetchT();

//     const fetchU = async () => {
//       const upcomingData = await fetchCategoryAnimeCard(1, 15, "upcoming");
//       setUpcomingAnime(upcomingData);
//     };
//     if (!upcomingAnime) fetchU();

//     const fetchA = async () => {
//       const airingData = await fetchCategoryAnimeCard(1, 15, "airing");
//       setAiringAnime(airingData);
//     };
//     if (!airingAnime) fetchA();
//   }, [popularAnime, topAnime, upcomingAnime, airingAnime]);

//   if (!popularAnime && !topAnime && !upcomingAnime && !airingAnime) return;
//   return (
//     <>
//       {popularAnime}
//       {topAnime}
//       {upcomingAnime}
//       {airingAnime}
//     </>
//   );
// };

// export default Category;
