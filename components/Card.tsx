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
import { AnimeCardProps } from "@/constants/types";

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
            className="group-hover:fill-[red] group-hover:scale-105 group-active:translate-x-1 ease-in-out duration-200"
          />
        </Link>
      </div>
      <Carousel className="w-full h-auto -mt-8">
        <CarouselContent>
          {data
            ? data
            : Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/3 lg:basis-1/6">
                  <div className="relative w-[30vh] h-[37vh] rounded-xl overflow-hidden scale-90 bg-slate-500/50 animate-pulse"></div>
                </CarouselItem>
              ))}
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
