"use client";

import { fetchCategoryAnimeCard } from "@/lib/actions/action";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Category = () => {
  const [popularData, setPopularData] = useState<any>(null);
  const [topData, setTopData] = useState<any>(null);
  const [upcomingData, setUpcomingData] = useState<any>(null);
  const [airingData, setAiringData] = useState<any>(null);

  useEffect(() => {
    const fetchPopular = async () => {
      const popularAnime = await fetchCategoryAnimeCard(1, 15, "bypopularity");
      setPopularData(popularAnime);
    };
    if (!popularData) fetchPopular();

    const fetchTop = async () => {
      const topAnime = await fetchCategoryAnimeCard(2, 15, "");
      setTopData(topAnime);
    };
    if (!topData) fetchTop();

    const fetchUpcoming = async () => {
      const upcomingAnime = await fetchCategoryAnimeCard(1, 15, "upcoming");
      setUpcomingData(upcomingAnime);
    };
    if (!upcomingData) fetchUpcoming();

    const fetchAiring = async () => {
      const airingAnime = await fetchCategoryAnimeCard(1, 15, "airing");
      setAiringData(airingAnime);
    };
    if (!airingData) fetchAiring();
  }, [topData, popularData, upcomingData, airingData]);
  return (
    <>
      <Card
        loading={popularData ? false : true}
        data={popularData}
        head="popular"
      />
      <Card loading={topData ? false : true} data={topData} head="top" />
      <Card
        loading={upcomingData ? false : true}
        data={upcomingData}
        head="upcoming"
      />
      <Card
        loading={airingData ? false : true}
        data={airingData}
        head="airing"
      />
    </>
  );
};

export default Category;
