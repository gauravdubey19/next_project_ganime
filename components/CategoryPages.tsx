import Goback from "./Goback";
import LoadMore from "./LoadMore";

const CategoryPages = ({
  renderAnime,
  head,
}: {
  renderAnime: any;
  head: string;
}) => {
  return (
    <main className="sm:p-16 py-16 px-4 lg:px-8 flex flex-col gap-10 text-white">
      <div className="flex gap-4">
        <Goback />
        <h2 className="text-3xl font-bold capitalize">{head + " "}Animes</h2>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
        {renderAnime}
      </section>
      <LoadMore
        filterBy={
          head == "popular" ? "bypopularity" : head == "top" ? "" : head
        }
      />
    </main>
  );
};

export default CategoryPages;
