import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "./Motion";
import { AnimeCardProp } from "@/constants/types";

interface Prop {
  anime: AnimeCardProp;
  index: number;
}

function AnimeCard({ anime, index }: Prop) {
  return (
    <>
      <Link href={`/anime/${anime?.mal_id}`}>
        <MotionDiv
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
          viewport={{ amount: 0 }}
          className="group max-w-sm rounded-2xl relative w-48 lg:w-60 h-72 lg:h-[339px] shadow-md shadow-zinc-800 hover:shadow-[red] scale-90 hover:scale-95 active:translate-y-1 ease-in-out duration-300 overflow-hidden"
        >
          <div className="relative w-full h-56 lg:h-[42vh] rounded-xl overflow-hidden">
            <Image
              src={anime?.images?.jpg?.large_image_url}
              alt={anime?.title_english}
              width={200}
              height={300}
              className="w-full scale-105 group-hover:scale-100 ease-in-out duration-300"
            />
          </div>
          <div className="py-1 flex flex-col gap-1 px-2">
            <div className="flex justify-between items-center gap-1">
              <h2 className="w-full font-bold text-white text-lg lg:text-xl capitalize line-clamp-1 scale-95 group-hover:scale-100 group-hover:text-[red] ease-in-out duration-300">
                {anime?.title_english}
              </h2>
              <div className="py-1 px-2 bg-[#161921] rounded-sm">
                <p className="text-white text-sm font-bold capitalize group-hover:text-[cyan] ease-in-out duration-300">
                  {anime?.type}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {anime?.episodes && (
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="/episodes.svg"
                    alt="episodes"
                    width={20}
                    height={20}
                    className="w-4 lg:object-contain"
                  />
                  <p className="text-sm text-white font-bold">
                    {anime?.episodes}
                  </p>
                </div>
              )}
              {anime?.rank && (
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="/star.svg"
                    alt="star"
                    width={18}
                    height={18}
                    className="w-4 lg:object-contain"
                  />
                  <p className="text-sm font-bold text-[#FFAD49]">
                    {anime?.rank}
                  </p>
                </div>
              )}
            </div>
          </div>
        </MotionDiv>
      </Link>
    </>
  );
}

export default AnimeCard;
