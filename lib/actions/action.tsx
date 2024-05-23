"use server";

import { StreamApi, animeApi } from "../anime-api/anime-api";
import { AnimeCardProp } from "@/constants/types";
import { CarouselItem } from "@/components/ui/carousel";
import AnimeCard from "@/components/AnimeCard";
import AnimePfp from "@/components/AnimePfp";
import Slider from "@/components/Slider";
import SearchItems from "@/components/SearchItems";
import Episode from "@/components/Episodes";

export const fetchAnimeForSearchTop = async (pg: number, lm: number) => {
  try {
    const res = await fetch(
      `${animeApi}/top/anime?page=${pg}&limit=${lm}&sort=asc&sfw`
    );
    const result = await res.json();
    const data = result?.data;
    // console.log(data);
    if (!data) return;

    return data.map((item: AnimeCardProp, index: number) => (
      <SearchItems
        key={item?.mal_id}
        anime={item}
        index={index}
        loading={false}
      />
    ));
  } catch (error) {
    console.log(error);
  }
};
export const searchAnime = async (anime: any) => {
  try {
    const res = await fetch(
      `${animeApi}/anime?q=${anime}&order_by=popularity&sort=asc&sfw`
    );
    const result = await res.json();
    const data = result?.data;
    console.log(data);
    if (!data) return;

    return data.map((item: AnimeCardProp, index: number) => (
      <SearchItems
        key={item?.mal_id}
        anime={item}
        index={index}
        loading={false}
      />
    ));
  } catch (error) {
    console.log(error);
  }
};
export const fetchCategoryAnime = async (
  pg: number,
  lm: number,
  filterBy: string
) => {
  try {
    const res = await fetch(
      `${animeApi}/top/anime?filter=${filterBy}&page=${pg}&limit=${lm}&sfw`
    );
    const result = await res.json();
    const data = result?.data;
    // console.log(data);
    if (!data) return;

    return data.map((item: AnimeCardProp, index: number) => (
      <AnimeCard key={item.mal_id} anime={item} index={index} />
    ));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryAnimeCard = async (
  pg: number,
  lm: number,
  filterBy: string
) => {
  try {
    const res = await fetch(
      `${animeApi}/top/anime?filter=${filterBy}&page=${pg}&limit=${lm}&sfw`
    );
    const result = await res.json();
    const data = result?.data;
    // console.log(data);
    if (!data) return;

    return data.map((item: AnimeCardProp, index: number) => (
      <CarouselItem key={item.mal_id} className="basis-1/4">
        <AnimeCard anime={item} index={index} />
      </CarouselItem>
    ));
  } catch (error) {
    console.log(error);
  }
};
export const fetchPopularAnimeSlider = async (pg: number, lm: number) => {
  try {
    const res = await fetch(
      `${animeApi}/top/anime?rating=r17&page=${pg}&limit=${lm}&sfw`
    );
    const result = await res.json();
    const data = result?.data;
    // console.log(data);
    if (!data) return;

    return <Slider anime={data} loading={false} />;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimeInfo = async (id: number) => {
  try {
    const res = await fetch(`${animeApi}/anime/${id}/full`);
    const result = await res.json();
    const data = result?.data;
    // console.log(data);
    if (!data) return;

    const resPic = await fetch(`${animeApi}/anime/${id}/pictures`);
    const resultPic = await resPic.json();
    const dataPic = resultPic?.data;
    // console.log(data);
    if (!dataPic && !data) return;

    return <AnimePfp anime={data} pic={dataPic} />;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimeEpisodes = async (id: number) => {
  try {
    const res = await fetch(`${animeApi}/anime/${id}/videos`);
    const result = await res.json();
    const data = result?.data;
    if (!data?.episodes || data.episodes.length === 0) {
      return null;
    }
    // console.log(data?.episodes);

    return <Episode episodes={data?.episodes} />;
  } catch (error) {
    console.log(error);
  }
};

const extractStreamEpisodeId = (url: string) => {
  const regex = /anime\/\d+\/([^\/]+)\/episode\/(\d+)/;
  const match = url.match(regex);
  if (match) {
    // Replace sequences of underscores with a single hyphen
    const formattedTitle = match[1].replace(/_+/g, "-");
    const id = `${formattedTitle}-episode-${match[2]}`;
    // console.log(id);
    return id;
  }
  return null;
};

export const fetchStreamEpisode = async (url: string) => {
  try {
    const streamId = extractStreamEpisodeId(url);
    if (!streamId) return null;
    console.log(streamId);

    const res = await fetch(`${StreamApi}${streamId}`);
    const result = await res.json();
    const data = result;
    if (!data) return null;

    // console.log(data?.plyr);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   const url = `https://anime-db.p.rapidapi.com/anime?page=${pg}&size=${lm}`; //&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
// https://api.jikan.moe/v4/anime/16498
// "https://api.consumet.org/meta/anilist/trending?perPage=2"
// `${process.env.NEXT_PUBLIC_ANIME_API_URL}demon?page=${pg}` //&limit=${lm}&order=popularity
