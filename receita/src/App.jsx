import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1/Page1";
import HomePage from "./Page1/HomePage";

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
