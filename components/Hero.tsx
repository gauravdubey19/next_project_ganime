"use client";

import { fetchPopularAnimeSlider } from "@/lib/actions/action";
import { useEffect, useState } from "react";
import Slider from "./Slider";

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
          <Slider loading={true} anime={[]} />
        </>
      )}
    </>
  );
}
