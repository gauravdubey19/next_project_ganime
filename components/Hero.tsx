"use client";

import { fetchPopularAnimeSlider } from "@/lib/actions/action";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import { AnimeSliderPicturesProps } from "@/constants/types";

export default function Hero() {
  const [slider, setSlider] = useState<any>();
  useEffect(() => {
    const fetchSlider = async () => {
      const data = await fetchPopularAnimeSlider(1, 5);
      // console.log(data);
      setSlider(data);
    };
    if (!slider) fetchSlider();
  }, [slider]);

  return (
    <>
      {slider ? (
        slider
      ) : (
        <>
          <Slider loading={true} anime={animeSliderSample} />
        </>
      )}
    </>
  );
}

const animeSliderSample: AnimeSliderPicturesProps = [
  {
    mal_id: 0,
    images: { jpg: { image_url: "string", large_image_url: "string" } },
  },
  {
    mal_id: 1,
    images: { jpg: { image_url: "string", large_image_url: "string" } },
  },
  {
    mal_id: 2,
    images: { jpg: { image_url: "string", large_image_url: "string" } },
  },
];
