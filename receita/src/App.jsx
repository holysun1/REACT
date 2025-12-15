import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/news/:category" element={<Page1 />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
