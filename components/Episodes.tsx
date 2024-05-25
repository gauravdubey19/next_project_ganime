"use client";

import { AnimeEpisodesProp, AnimeStreamProp } from "@/constants/types";
import { fetchStreamEpisode } from "@/lib/actions/action";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface EpisodesProps {
  episodes: AnimeEpisodesProp[];
}

const Episode = ({ episodes }: EpisodesProps) => {
  const [url, setUrl] = useState<string>("");
  const [stream, setStream] = useState<AnimeStreamProp | null>(null);
  useEffect(() => {
    const getStream = async () => {
      const data = await fetchStreamEpisode(url);
      // console.log(data);
      setStream(data);
    };
    if (!stream) getStream();
  }, [url, stream]);
  return (
    <>
      <section className="w-full max-h-[95vh] lg:h-[92vh] p-4 lg:px-8 flex-between flex-col lg:flex-row gap-2 ease-in-out duration-300">
        {stream !== null && (
          <div className="w-full h-full">
            <iframe
              src={stream?.plyr?.main || stream?.plyr?.backup}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              title={stream?.info?.title}
              allow="picture-in-picture"
              className="w-full rounded-lg h-[30vh] lg:h-[90vh] md:h-[30vh]"
            ></iframe>
          </div>
        )}
        <div className="w-full h-full p-1 overflow-hidden">
          <span className="w-full text-xl font-bold text-[red]">Episodes:</span>
          <div className="w-full h-full flex-center flex-wrap gap-1 overflow-y-scroll overflow-hidden">
            {episodes?.map((ep) => (
              <div
                key={ep?.mal_id}
                onClick={() => {
                  setStream(null);
                  setUrl(ep?.url);
                }}
                className="relative w-[45%] lg:w-[32%] h-40 rounded-xl cursor-pointer scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:scale-100 hover:shadow-md hover:shadow-[red] active:translate-y-1 ease-in-out duration-300 overflow-hidden"
              >
                <Image
                  src={ep?.images?.jpg?.image_url ?? "/load-more.gif"}
                  alt=""
                  width={800}
                  height={800}
                  className="z-0 absolute w-full h-full rounded-xl scale-105 group-hover:scale-100 ease-in-out duration-300 overflow-hidden"
                />
                <div className="z-10 absolute bottom-0 w-full py-1 px-2 bg-transparent backdrop-blur-sm text-white flex-between flex-col overflow-hidden">
                  <span className="text-md font-bold group-hover:text-[red] group-hover:text-lg capitalize line-clamp-1 ease-in-out duration-300">
                    {ep?.title}
                  </span>
                  <span className="group-hover:text-[cyan]">{ep?.episode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Episode;
