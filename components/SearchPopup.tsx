"use client";

import { useEffect, useState } from "react";
import { fetchAnimeForSearchTop, searchAnime } from "@/lib/actions/action";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SearchItems from "./SearchItems";

const SearchPopup = ({
  isOpen,
  handleSearchClose,
}: {
  isOpen: any;
  handleSearchClose: any;
}) => {
  const [searchInput, setSearchInput] = useState<String>("");
  const [topData, setTopData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);

  useEffect(() => {
    const fetchTopAnimes = async () => {
      const data = await fetchAnimeForSearchTop(1, 10);
      // console.log(data);
      setTopData(data);
    };
    if (!topData) fetchTopAnimes();

    const fetchSeachAnime = async () => {
      // e.preventDefault();
      if (searchInput == "") return null;
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
  }, [topData, searchInput]);

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
              value={searchInput}
              placeholder="Search for anime"
              className="w-full p-4 rounded-md border-2 bg-transparent border-gray-400 focus:px-3 focus:border-[red] hover:border-[red] outline-none ease-in-out duration-300"
            />
          </form>

          <section className="z-[50] flex flex-col gap-2">
            {searchedData ? (
              <>
                <h2 className="text-xl font-bold">Top 10 Search results</h2>
                {searchedData}
              </>
            ) : topData ? (
              <>
                <h2 className="text-xl font-bold">Top 10</h2>
                {topData}
              </>
            ) : (
              <>
                <SearchItems index={1} loading={true} />
                <SearchItems index={1} loading={true} />
                <SearchItems index={1} loading={true} />
                <SearchItems index={1} loading={true} />
              </>
            )}
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchPopup;
