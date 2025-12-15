import Menu from "../components/Menu.jsx";
import Feed from "../Feed.jsx";
import { useParams } from "react-router";
import NewsData from "../data/NewsData.jsx";
import NewsCard from "../components/NewsCard.jsx";

export default function Page1() {
  const { category } = useParams();
  const categoryNews = NewsData.filter((news) => news.category === category);

  return (
    <div>
      <Menu />
      {/*  --------------  RENDERIZAR AS NOTÍCIAS -------------- */}
      {categoryNews.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  );
}
