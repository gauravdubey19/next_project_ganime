import { fetchPopularAnimeSlider } from "@/lib/actions/action";

async function Hero() {
  const slider = await fetchPopularAnimeSlider(1, 5);
  // console.log(slider);
  if (!slider) return;

  return <>{slider}</>;
}

export default Hero;
