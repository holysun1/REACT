import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import TaskPage from "./pages/TaskPage.jsx";
import AllTaskPage from "./pages/AllTaskPage.jsx";
import { TaskProvider } from "./context/TaskContext";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/task", // " htmll:// ....... /task.... - diretório do caminho ; cd task "
      element: <TaskPage />, // Renderizar o componente TaskPage.jsx
    },
    {
      path: "/AllTaskPage",
      element: <AllTaskPage />,
    },
  ]);

  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
