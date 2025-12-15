import ChatBox from "@/pages/ChatBox";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(localStorage.getItem("completedCopy")) || []
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        completedTasks,
        setCompletedTasks,
      }}
    >
      <ChatBox />
      {children}
    </TaskContext.Provider>
  );
}
