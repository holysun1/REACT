import { useNavigate } from "react-router-dom";

function NewsCard({ title, image, category }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/news/${category}`)}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    >
      <img
        src={image}
        className="h-44 w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4 group">
        <h3 className="font-semibold group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}
export default NewsCard;
