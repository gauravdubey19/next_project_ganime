import Hero from "@/components/Hero";
import Category from "@/components/Category";

async function Home() {
  return (
    <>
      {/* <Hero /> */}
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 text-white">
        <h2 className="text-3xl font-bold">Explore Anime</h2>
        <Category />
      </main>
    </>
  );
}

export default Home;
