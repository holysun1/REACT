import { useEffect, useState } from "react";
import FeedSkeleton from "../FeedSkeleton.jsx";
import Menu from "../components/Menu.jsx";
import Feed from "../Feed.jsx";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FeedSkeleton />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col px-4 md:px-8 lg:px-16">
      <Menu
        onSelectCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <Feed category={activeCategory} />
    </div>
  );
}
