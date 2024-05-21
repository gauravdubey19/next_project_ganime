import {
  fetchAiringAnime,
  fetchPopularAnime,
  fetchTopAnime,
  fetchUpcomingAnime,
} from "../lib/actions/action";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

async function Home() {
  const topAnime = await fetchTopAnime(2, 15);
  const popularAnime = await fetchPopularAnime(1, 15);
  const upcomingAnime = await fetchUpcomingAnime(1, 15);
  const airingAnime = await fetchAiringAnime(1, 15);
  // console.log(data);

  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 text-white">
        <h2 className="text-3xl font-bold">Explore Anime</h2>
        <Card data={popularAnime} head="popular" />
        <Card data={topAnime} head="Top" />
        <Card data={upcomingAnime} head="upcoming" />
        <Card data={airingAnime} head="airing" />
      </main>
    </>
  );
}

export default Home;
