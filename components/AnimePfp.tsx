"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimeInfoProp, AnimePicturesProps } from "@/constants/types";
import { IoMdArrowRoundBack } from "react-icons/io";
import ReactCountUp from "./ReactCountUp";

interface Prop {
  anime: AnimeInfoProp;
  pic: AnimePicturesProps;
}

const AnimePfp = ({ anime, pic }: Prop) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(anime?.images?.jpg?.large_image_url);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (pic.length > 0) {
      setImages(pic[0].jpg.large_image_url);
      const interval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % pic.length;
            setImages(pic[newIndex].jpg.large_image_url);
            setFade(false);
            return newIndex;
          });
        }, 250); // This should match the duration of the fade-out effect
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [pic]);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${
            anime?.trailer?.images?.maximum_image_url ??
            anime?.images?.jpg?.large_image_url
          })`,
        }}
        className="relative w-full h-screen bg-cover bg-no-repeat shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-b-3xl overflow-hidden"
      >
        <div
          onClick={() => router.back()}
          className="absolute group left-3 top-14 backdrop-blur-md p-2 rounded-full cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <IoMdArrowRoundBack
            size={25}
            className="group-hover:scale-110 fill-[#efedaa] group-hover:fill-[red] group-active:-translate-x-1 ease-in-out duration-200"
          />
        </div>
        <div className="group flex-center flex-col md:flex-row">
          <div className="absolute z-10 lg:z-0 left-30 lg:left-32 top-20 w-[45%] lg:w-[30%] h-[30%] lg:h-[80%] rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
            <Image
              src={images}
              alt={anime?.title_english}
              fill
              className={`w-full h-full scale-105 group-hover:scale-100 group-active:scale-105 ease-in-out duration-1000 transition-all ${
                fade ? "scale-95 opacity-50" : "opacity-100"
              }`}
            />
          </div>
          <div className="z-0 lg:z-10 absolute lg:right-24 top-[21rem] lg:top-32 w-[85%] lg:max-w-[57%] h-[60%] lg:h-[65%] px-5 text-black rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-transparent backdrop-blur-[30px] flex flex-col items-center flex-wrap lg:flex-nowrap gap-2 overflow-y-scroll lg:overflow-hidden">
            <div className="">
              <h1 className="ani_name mt-4 lg:mt-0 text-[2em] font-black text-center text-[#efedaa]">
                {anime?.title_english}
              </h1>
              <div className="absolute mt-5 lg:mt-0 right-12 top-8 h-5 font-semibold text-[red]">
                {anime?.title_japanese}
              </div>
            </div>
            <div className="w-full flex gap-2">
              <span className="font-bold text-[red] capitalize">Genres:</span>
              <span className="flex gap-2 flex-wrap">
                {anime?.genres?.map((i) => (
                  <div key={i.mal_id} className="">
                    {i?.name}
                  </div>
                ))}
              </span>
            </div>
            {anime?.themes.length > 0 && (
              <div className="w-full flex gap-2 flex-wrap">
                <span className="font-bold text-[red] capitalize">Themes:</span>
                <span className="flex gap-2">
                  {anime?.themes?.map((i) => (
                    <div key={i.mal_id} className="">
                      {i?.name}
                    </div>
                  ))}
                </span>
              </div>
            )}
            <div className="w-full flex-between gap-8 flex-wrap">
              <div className="flex gap-2">
                <span className="font-bold text-[red] capitalize">
                  episodes:
                </span>
                <span className="">
                  <ReactCountUp amt={anime?.episodes} />
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[red] capitalize">rank:</span>
                <span className="">
                  <ReactCountUp amt={anime?.rank} />
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[red] capitalize">
                  favorites:
                </span>
                <span className="">
                  <ReactCountUp amt={anime?.favorites} />
                </span>
              </div>
              <span className="font-bold">{anime?.year}</span>
              <span className="font-bold">{anime?.type}</span>
              <span className="font-bold capitalize">
                {anime?.duration + "s"}
              </span>
            </div>
            <div className="w-full flex-between gap-8 flex-wrap">
              <div className="flex gap-2">
                <span className="font-bold text-[red] capitalize">Rate:</span>
                <span className="">
                  <ReactCountUp amt={anime?.score} />
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[red] capitalize">
                  Rated by:
                </span>
                <span className="">
                  <ReactCountUp amt={anime?.scored_by} />
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[red] capitalize">Rating:</span>
                <span className="">{anime?.rating}</span>
              </div>
            </div>
            <div className="w-full overflow-y-scroll overflow-hidden">
              <div className={`w-full mt-6 lg:mt-0 px-1 text-justify`}>
                <span className="font-bold text-[red] capitalize">
                  Synopsis :{" "}
                </span>
                {anime?.synopsis}
              </div>
              {anime?.background && (
                <div className="w-full h-14 mt-6 lg:mt-0 p-1 text-justify">
                  <span className="font-bold text-[red] capitalize">
                    Backround :{" "}
                  </span>
                  {anime?.background}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimePfp;
