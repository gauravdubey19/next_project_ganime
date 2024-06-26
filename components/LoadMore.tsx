"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchCategoryAnime } from "@/lib/actions/action";
import AnimeCard from "./AnimeCard";

let pg = 2;
export type AnimeCard = JSX.Element;

function LoadMore({ filterBy }: { filterBy: string }) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (inView) {
      // alert("l m");
      fetchCategoryAnime(pg, 10, filterBy).then((res) => {
        if (!res) return null;
        setData([...data, ...res]);
        pg++;
      });
    }
  }, [inView, data, filterBy]);
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
