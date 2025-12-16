import { useState } from "react";
import NewsCard from "./NewsCard";

export default function Carousel({ title, itemsperPage = 3, data }) {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(data.length - itemsperPage, 0);

  const visibleItems = data.slice(index, index + itemsperPage);

  return (
    <section className="bg-white mb-8">
      <h2 className="text-2xl font-semibold mb-6 border-b text-center">
        {title}
      </h2>
      <div className="relative">
        <button
          onClick={() => setIndex((i) => Math.max(i - itemsperPage, 0))}
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-10
            bg-gray-200
            shadow-md
            rounded-full
            p-3
            hover:bg-amber-100
            disabled:opacity-90
            
          "
        >
          ←
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {visibleItems.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}{" "}
        </div>
        <button
          onClick={() => setIndex((i) => Math.min(i + itemsperPage, maxIndex))}
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-10
            bg-gray-200
            shadow-md
            rounded-full
            p-3
            hover:bg-amber-200
            disabled:opacity-90
            
          "
        >
          →
        </button>
      </div>
    </section>
  );
}
