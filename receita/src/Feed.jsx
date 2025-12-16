import Carousel from "./components/Carousel.jsx";
import NewsCard from "./components/NewsCard.jsx";
import newsData from "./data/NewsData.jsx";

export default function Feed() {
  const filteredNews = newsData.filter((news) => news.featured === true);

  const dataToRender = filteredNews.slice();

  return (
    <div className="space-y-8">
      <section
        className="bg-white  
  shadow-sm 
  hover:shadow-md 
  transition p-4"
      >
        <div className=" mb-8">
          <Carousel title="Destaques" data={dataToRender} />
        </div>
        <h2 className="text-2xl font-semibold border-b mb-5 text-center">
          {" "}
          FEED{" "}
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
