import CatalogueCard from "../components/cataloguecard";
import sneakers from "../data/sneakers";

export default function Catalogue() {
  return (
    <section className="px-8 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Sneakers That Fit Your Budget
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sneakers.map((sneaker) => (
          <CatalogueCard key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </section>
  );
}
