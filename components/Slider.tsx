"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimeSliderPicturesProps } from "@/constants/types";
import Link from "next/link";

interface Props {
  anime: AnimeSliderPicturesProps;
}

const Slider = ({ anime }: Props) => {
  const backImg = (n: number) => {
    const el = document.querySelector<HTMLDivElement>(".blur_div");
    if (el && anime[n]?.images?.jpg?.large_image_url) {
      el.style.backgroundImage = `url('${anime[n].images.jpg.large_image_url}')`;
    }
  };

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      const rd = document.getElementsByName("radiobtn");
      for (let i = 0; i < rd.length; i++) {
        if ((rd[i] as HTMLInputElement).checked) {
          counter = i + 1;
          break;
        }
      }
      counter = (counter % 5) + 1;
      backImg(counter - 1);
      const radioElement = document.getElementById(
        "radio" + counter
      ) as HTMLInputElement;
      if (radioElement) {
        radioElement.checked = true;
      }
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [anime, backImg]);

  return (
    <div className="relative w-full h-[40vw] shadow-inner-[0px_-15px_13px_0px_rgba(0,0,0,1)] mb-[40px]">
      <div
        id="imgi"
        style={{
          backgroundImage: `url(${anime[0]?.images?.jpg?.large_image_url})`,
        }}
        className="blur_div absolute w-full h-full bg-cover transition-all duration-1000"
      ></div>
      <div className="outer h-[calc(40vw+100px)] w-full p-[60px_15px_5px_15px] md:p-[60px_80px_25px_80px] backdrop-blur-sm">
        <div className="slider h-full w-full relative overflow-hidden rounded-[20px] hover:shadow-sm hover:shadow-[red] active:translate-y-1 ease-in-out duration-200">
          <div className="slides flex w-[500%] h-full">
            <input
              type="radio"
              name="radiobtn"
              id="radio1"
              defaultChecked
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio2"
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio3"
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio4"
              className="hidden"
            />
            <input
              type="radio"
              name="radiobtn"
              id="radio5"
              className="hidden"
            />

            <Link
              href={`/anime/${anime[0]?.mal_id}`}
              className="slide first w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[0]?.images?.jpg?.large_image_url}
                alt="slide1"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[1]?.mal_id}`}
              className="slide second w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[1]?.images?.jpg?.large_image_url}
                alt="slide2"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[2]?.mal_id}`}
              className="slide third w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[2]?.images?.jpg?.large_image_url}
                alt="slide3"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[3]?.mal_id}`}
              className="slide fourth w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[3]?.images?.jpg?.large_image_url}
                alt="slide4"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>
            <Link
              href={`/anime/${anime[4]?.mal_id}`}
              className="slide fifth w-[1%] h-full transition duration-1000"
            >
              <Image
                src={anime[4]?.images?.jpg?.large_image_url}
                alt="slide5"
                width={900}
                height={800}
                className="img absolute w-full h-full rounded-[20px] transition duration-1000"
              />
            </Link>

            <div className="navbackground absolute w-full top-[93%] flex justify-center items-center">
              <label
                htmlFor="radio1"
                className="manualnav lbl1 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio2"
                className="manualnav lbl2 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio3"
                className="manualnav lbl3 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio4"
                className="manualnav lbl4 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 mr-5 hover:bg-white"
              ></label>
              <label
                htmlFor="radio5"
                className="manualnav lbl5 border-2 border-white rounded-full p-1 cursor-pointer transition duration-500 hover:bg-white"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
