"use client";

import { useEffect, useState } from "react";
import { fetchAnimeForSearchTop, searchAnime } from "@/lib/actions/action";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SearchItems from "./SearchItems";
import { AnimeCardProp } from "@/constants/types";

const SearchPopup = ({
  isOpen,
  handleSearchClose,
}: {
  isOpen: boolean;
  handleSearchClose: () => void;
}) => {
  const [searchInput, setSearchInput] = useState<String>("");
  const [topData, setTopData] = useState<AnimeCardProp[] | null>(null);
  const [searchedData, setSearchedData] = useState<AnimeCardProp[] | null>(
    null
  );

  useEffect(() => {
    const fetchTopAnimes = async () => {
      const data = await fetchAnimeForSearchTop(1, 10);
      // console.log(data);
      setTopData(data);
    };
    if (!topData) fetchTopAnimes();

    const fetchSeachAnime = async () => {
      // e.preventDefault();
      if (searchInput == "") {
        setSearchedData(null);
        return null;
      }
      try {
        const data = await searchAnime(searchInput);
        // console.log(data);
        setSearchedData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSeachAnime();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
        event.preventDefault();
        handleSearchClose();
      }
    };
    if (typeof globalThis !== "undefined") {
      globalThis.addEventListener("keydown", handleKeyDown);
      return () => {
        globalThis.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [topData, searchInput, handleSearchClose]);

  // console.log(searchInput);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleSearchClose}>
        <DialogContent className="h-[80%] border-none text-white bg-transparent backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-sm hover:shadow-[red] ease-in-out duration-300 overflow-y-scroll overflow-x-hidden">
          <h1 className="text-lg font-bold">
            Open/Close :{" "}
            <span className="px-1.5 py-2 rounded-lg bg-white text-black text-base">
              Ctrl
            </span>{" "}
            +{" "}
            <span className="px-1.5 py-2 rounded-lg bg-white text-black text-base">
              K
            </span>
          </h1>
          <form className="sticky top-0 left-0 right-0 h-[3.75rem] z-[99] bg-black/80 rounded-md overflow-hidden">
            <input
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setSearchInput(e.target.value);
              }}
              placeholder="Search for anime"
              className="w-full p-4 rounded-md border-2 bg-transparent border-gray-400 focus:px-3 focus:border-[red] hover:border-[red] outline-none ease-in-out duration-300"
            />
          </form>

          <section className="z-[50] flex flex-col gap-2">
            {searchedData ? (
              <>
                <h2 className="text-xl font-bold">Search results</h2>
                {searchedData}
              </>
            ) : topData ? (
              <>
                <h2 className="text-xl font-bold">Top 10</h2>
                {topData}
              </>
            ) : (
              <>
                {animeSample.map((item, index) => (
                  <SearchItems
                    key={item.mal_id}
                    index={index + 1}
                    anime={item}
                    loading={true}
                  />
                ))}
              </>
            )}
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchPopup;

const animeSample: AnimeCardProp[] = [
  {
    mal_id: 0,
    url: "/",
    images: { jpg: { image_url: "/logo.png", large_image_url: "/logo.png" } },
    title_english: "One Room",
    type: "TV",
    episodes: 0,
    rank: 0,
    genres: [{ mal_id: 0, name: "anime" }],
  },
  {
    mal_id: 1,
    url: "/",
    images: { jpg: { image_url: "/logo.png", large_image_url: "/logo.png" } },
    title_english: "One Room",
    type: "TV",
    episodes: 0,
    rank: 0,
    genres: [{ mal_id: 0, name: "anime" }],
  },
  {
    mal_id: 2,
    url: "/",
    images: { jpg: { image_url: "/logo.png", large_image_url: "/logo.png" } },
    title_english: "One Room",
    type: "TV",
    episodes: 0,
    rank: 0,
    genres: [{ mal_id: 0, name: "anime" }],
  },
  {
    mal_id: 3,
    url: "/",
    images: { jpg: { image_url: "/logo.png", large_image_url: "/logo.png" } },
    title_english: "One Room",
    type: "TV",
    episodes: 0,
    rank: 0,
    genres: [{ mal_id: 0, name: "anime" }],
  },
];
