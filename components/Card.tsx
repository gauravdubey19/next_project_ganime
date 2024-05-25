import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoIosArrowForward } from "react-icons/io";
import { AnimeCardProp, AnimeCardProps } from "@/constants/types";
import Image from "next/image";
import AnimeCard from "./AnimeCard";

const Card = ({ data, head }: AnimeCardProps) => {
  return (
    <>
      <div className="flex-between">
        <h1 className="text-3xl lg:text-5xl font-bold capitalize">{head}</h1>
        <Link
          href={`/${head}`}
          className="group flex items-center gap-2 font-extrabold text-sm md:text-xl"
        >
          Load more
          <IoIosArrowForward
            size={30}
            className="group-hover:fill-[red] group-hover:scale-105 group-hover:-ml-2 group-active:translate-x-1 ease-in-out duration-200"
          />
        </Link>
      </div>
      <Carousel className="w-full h-auto -mt-8">
        <CarouselContent>
          {data.map((item: AnimeCardProp, index: number) => (
            <CarouselItem
              key={item.mal_id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <AnimeCard anime={item} index={index} />
            </CarouselItem>
          ))}
          <CarouselItem className="basis-1/2 lg:basis-1/5">
            <div className="relative w-48 lg:w-60 h-72 lg:h-[339px] rounded-xl overflow-hidden scale-90 group hover:scale-95 active:scale-90 ease-in-out duration-300">
              <Image
                src="/load-more.gif"
                alt="load"
                width={800}
                height={800}
                className="z-0 absolute w-full h-full scale-105 group-hover:scale-100 ease-in-out duration-300"
              />
              <Link
                href={`/${head}`}
                className="z-20 absolute w-full h-full bg-slate-500/50 flex-center gap-2 font-extrabold text-sm md:text-xl"
              >
                Load more
                <IoIosArrowForward
                  size={30}
                  className="group-hover:fill-[red] group-hover:scale-105 group-hover:-ml-2 group-active:translate-x-1 ease-in-out duration-200"
                />
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="hidden lg:flex">
          <CarouselPrevious className="bg-transparent border-none outline-none active:scale-95 ease-in-out duration-300" />
          <CarouselNext className="bg-transparent border-none outline-none active:scale-95 ease-in-out duration-300" />
        </div>
      </Carousel>
    </>
  );
};

export default Card;

// {!loading ? (
//          <>
//           </>
//         ) : (
//           <>
//             {Array.from({ length: 10 }).map((_, index) => (
//               <CarouselItem key={index} className="basis-1/2 lg:basis-1/5">
//                 <div className="w-48 lg:w-60 h-72 lg:h-[339px] rounded-xl overflow-hidden scale-90 bg-slate-500/50 animate-pulse"></div>
//               </CarouselItem>
//             ))}
//             <CarouselItem className="basis-1/2 lg:basis-1/5">
//               <div className="relative w-48 lg:w-60 h-72 lg:h-[339px] rounded-xl overflow-hidden scale-90 group hover:scale-95 active:scale-90 ease-in-out duration-300">
//                 <Image
//                   src="/load-more.gif"
//                   alt="load"
//                   width={800}
//                   height={800}
//                   className="z-0 absolute w-full h-full scale-105 group-hover:scale-100 ease-in-out duration-300"
//                 />
//                 <Link
//                   href={`/${head}`}
//                   className="z-20 absolute w-full h-full bg-slate-500/50 flex-center gap-2 font-extrabold text-sm md:text-xl"
//                 >
//                   Load more
//                   <IoIosArrowForward
//                     size={30}
//                     className="group-hover:fill-[red] group-hover:scale-105 group-hover:-ml-2 group-active:translate-x-1 ease-in-out duration-200"
//                   />
//                 </Link>
//               </div>
//             </CarouselItem>
//           </>
//         )}
