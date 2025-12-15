import "./App.css";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <Routes>
      <Route path="/news/:category" element={<CategoryPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
