import React from "react";
import { fetchAnimeInfo } from "@/lib/actions/action";

const AnimePfpPage = async ({ params }: any) => {
  if (!params.id) return;
  // console.log(params.id);

  const info = await fetchAnimeInfo(params.id);
  if (!info) return;
  // console.log(info);

  return <>{info}</>;
};

export default AnimePfpPage;
