import { fetchCategoryAnime } from "@/lib/actions/action";
import CategoryPages from "@/components/CategoryPages";

export default async function TopAnimePage() {
  const topAnime = await fetchCategoryAnime(1, 10, "");
  return (
    <>
      <CategoryPages renderAnime={topAnime} head="top" />
    </>
  );
}
