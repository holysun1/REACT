import "./App.css";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import SearchedPage from "./pages/SearchedPage";
=======
>>>>>>> 3d97896c1f3efb57f08a37350a6b04dc3f2de73a
export default function App() {
  return (
    <Routes>
      <Route path="/news/:category" element={<CategoryPage />} />
      <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
      <Route path="/busca" element={<SearchedPage />} />
=======
>>>>>>> 3d97896c1f3efb57f08a37350a6b04dc3f2de73a
    </Routes>
  );
}
