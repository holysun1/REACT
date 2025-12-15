import NewsCard from "./components/NewsCard.jsx";
import newsData from "./data/NewsData.jsx";

export default function Feed({ category }) {
  const filteredNews = newsData.filter((news) => news.featured === true);

  const dataToRender =
    category === "ALL"
      ? filteredNews // Mostrar todos os featured se a categoria for 'ALL'
      : filteredNews.filter((news) => news.category === category);

  return (
    <div className="space-y-8 ">
      <section
        className="bg-white  
  shadow-sm 
  hover:shadow-md 
  transition p-4"
      >
        <h1 className="text-2xl font-bold border-b mb-5 text-center">
          FEED - 1
        </h1>
        <div className=" mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataToRender.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-semibold border-b mb-5 text-center">
          {" "}
          FEED - 2{" "}
        </h2>
        <div className=" mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataToRender.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
