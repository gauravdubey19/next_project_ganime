import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "./Motion";
import { AnimeCardProp } from "@/constants/types";

interface Prop {
  loading: boolean;
  anime: AnimeCardProp;
  index: number;
}

const SearchItems = ({ loading = false, anime, index }: Prop) => {
  return (
    <>
      <Link href={`${!loading ? "/anime/" + anime?.mal_id : "/"}`}>
        <MotionDiv
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
          viewport={{ amount: 0 }}
          className="h-40 flex gap-2 group rounded-xl scale-95 hover:shadow-[0_0_20px_red] hover:scale-100 active:translate-y-1 ease-in-out duration-200"
        >
          <div
            className={`w-[30%] h-full overflow-hidden ${
              loading && "bg-slate-500/50 animate-pulse"
            } flex-center rounded-xl`}
          >
            {!loading && (
              <Image
                src={anime?.images?.jpg?.large_image_url}
                alt={anime?.title_english}
                width={200}
                height={300}
                className="w-full h-full scale-105 group-hover:scale-100 ease-in-out duration-300 rounded-xl overflow-hidden"
              />
            )}
          </div>
          <div className="w-[70%] h-full flex flex-col gap-2 p-2 rounded-xl text-md overflow-hidden">
            <h3
              className={`text-xl font-bold group-hover:text-[red] group-hover:text-2xl capitalize line-clamp-1 ${
                loading
                  ? "h-8 rounded-md bg-slate-500/50 animate-pulse"
                  : "ease-in-out duration-300"
              }`}
            >
              {!loading && anime?.title_english}
            </h3>
            <span
              className={`flex gap-2 ${
                loading && "h-5 rounded-md bg-slate-500/50 animate-pulse"
              }`}
            >
              {!loading &&
                anime?.genres?.map((i) => (
                  <span key={i?.mal_id} className="">
                    {i?.name}
                  </span>
                ))}
            </span>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <span>Episodes : </span>
                <span
                  className={`${
                    loading &&
                    "h-5 w-5 rounded-md bg-slate-500/50 animate-pulse"
                  }`}
                >
                  {!loading && anime?.episodes}
                </span>
              </div>
              <div className="flex gap-1">
                <span>Type : </span>
                <span
                  className={`${
                    loading &&
                    "h-5 w-7 rounded-md bg-slate-500/50 animate-pulse"
                  }`}
                >
                  {!loading && anime?.type}
                </span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </Link>
    </>
  );
};

export default SearchItems;
