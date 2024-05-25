import { fetchCategoryAnime } from "@/lib/actions/action";
import CategoryPages from "@/components/CategoryPages";

export default async function UpcomingAnimePage() {
  const upcomingAnime = await fetchCategoryAnime(1, 10, "upcoming");
  return (
    <>
      <CategoryPages renderAnime={upcomingAnime} head="upcoming" />
    </>
  );
}
