import { fetchCategoryAnime } from "@/lib/actions/action";
import CategoryPages from "@/components/CategoryPages";

export default async function AiringAnimePage() {
  const airingAnimeData = await fetchCategoryAnime(1, 10, "airing");
  return (
    <>
      <CategoryPages renderAnime={airingAnimeData} head="airing" />
    </>
  );
}
