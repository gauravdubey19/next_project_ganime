import React from "react";
import { fetchAnimeEpisodes, fetchAnimeInfo } from "@/lib/actions/action";
import Episode from "@/components/Episodes";

interface Params {
  id: number;
}
const AnimePfpPage = async ({ params }: { params: Params }) => {
  if (!params.id) return;
  // console.log(params.id);

  const info = await fetchAnimeInfo(params.id);
  if (!info) return;
  const eps = await fetchAnimeEpisodes(params.id);
  // console.log(info);

  return (
    <>
      {info}
      {eps ? (
        eps
      ) : (
        <div className="p-4 text-xl text-[red] text-center font-semibold">
          No Episodes found!
        </div>
      )}
      {/* <Episode episodes={[]} /> */}
    </>
  );
};

export default AnimePfpPage;
