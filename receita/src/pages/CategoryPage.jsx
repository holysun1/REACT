import Menu from "../components/Menu.jsx";
import Feed from "../Feed.jsx";
import { useParams } from "react-router";
<<<<<<< HEAD
import newsData from "../data/NewsData.jsx";
=======
import NewsData from "../data/NewsData.jsx";
>>>>>>> 3d97896c1f3efb57f08a37350a6b04dc3f2de73a
import NewsCard from "../components/NewsCard.jsx";

export default function Page1() {
  const { category } = useParams();
<<<<<<< HEAD
  const categoryNews = newsData.filter((news) => news.category === category);
=======
  const categoryNews = NewsData.filter((news) => news.category === category);
>>>>>>> 3d97896c1f3efb57f08a37350a6b04dc3f2de73a

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
