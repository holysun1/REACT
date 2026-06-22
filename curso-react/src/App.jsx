import { useContext, useEffect } from "react";
import "./App.css";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import { Trash2Icon } from "lucide-react";
import { TaskContext } from "./context/TaskContext";

function App() {
  console.log(import.meta.env.VITE_OPENAI_API_KEY);

  const { tasks, setTasks, completedTasks, setCompletedTasks } =
    useContext(TaskContext);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    localStorage.setItem("completedCopy", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]); // A FUNÇÃO  {} , É ATUALIZADO TODA VEZ QUE O VALOR [] FOR ALTERADO

  function handleComplete(id) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) =>
        t.id === id ? { ...t, isCompleted: true } : t
      ); // ATUALIZAR A TAREFA ORIGINAL
      const found = updatedTasks.find((t) => t.id === id); // ENCONTRA A TAREFA ATUALIZADA
      if (!found) return prevTasks;
      setCompletedTasks((prevCompleted) => {
        if (prevCompleted.some((ct) => ct.id === id)) return prevCompleted; //
        return [...prevCompleted, found];
        //ADICIONA ESSA CÓPIA EM COMPLETEDTASKS
      });
      return updatedTasks;
    });
  }

  function handleUndoComplete(id) {
    setCompletedTasks((prevCompleted) => {
      const found = prevCompleted.find((t) => t.id === id);
      if (!found) return prevCompleted;

      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === id ? { ...t, isCompleted: false } : t))
      );
      return prevCompleted.filter((t) => t.id !== id);
    });
  }

  function onAddTaskSubmit(title, description, date) {
    //ADICIONAR TAREFA - TITULO E DESCRIÇÃO
    const newTask = {
      id: v4(),
      title,
      description,
      date: date ? date.toLocaleDateString() : null,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onDeleteTaskClick(id) {
    // DELETAR TAREFA
    setTasks((prev) => prev.filter((t) => t.id !== id)); //APAGA DA LISTA PRINCIPAL
    setCompletedTasks((prev) => prev.filter((ct) => ct.id !== id)); //APAGA DA CÓPIA
  }

  function deleteAllTask() {
    setTasks([]);
    setCompletedTasks([]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500  flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center px-4 py-4">
          CheckList - Dia a Dia
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onDeleteTaskClick={onDeleteTaskClick}
          handleComplete={handleComplete}
          deleteAllTask={deleteAllTask}
        />
        <OnCompleteTask />
      </div>
    </div>
  );

  function OnCompleteTask() {
    return (
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        <h1 className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl text-center">
          Tarefas Completas
        </h1>
        <ul className="space-y-4 text-center bg-slate-200 text-shadow-blue-900">
          {completedTasks.length === 0 ? (
            <p>Nenhuma tarefa completada</p>
          ) : (
            completedTasks.map((t) => (
              <>
                <li
                  key={t.id}
                  className=" flex gap-4 text-black justify-between"
                >
                  <p className="font-semibold p-2 rounded-md space text-left w-full bg-white ">
                    {t.title}
                  </p>
                  <p className="font-semibold p-2 rounded-md space text-right w-fit bg-white ">
                    {t.date}
                  </p>

                  <button
                    key={t.id}
                    onClick={() => handleUndoComplete(t.id)}
                    className="bg-white text-shadow-blue-900 font-semibold p-2 rounded-md "
                  >
                    <Trash2Icon />
                  </button>
                </li>
              </>
            ))
          )}
        </ul>
      </div>
    );
  }
}
export default App;
