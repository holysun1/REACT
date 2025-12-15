import "lucide-react";
import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({ onDeleteTaskClick, tasks, handleComplete, deleteAllTask }) {
  const navigate = useNavigate();
  function onSeeDetailClick(task) {
    const query = new URLSearchParams();
    query.set("id", task.id);
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(
      `/task?title=${task.title}&description=${task.description}&date=${task.date}`
    );
  }
  function onSeeAllTasks() {
    const params = new URLSearchParams();
    tasks.forEach((t) => {
      params.append("id", t.id);
      params.append("title", t.title);
      params.append("description", t.description);
      params.append("date", t.date);
    });
    navigate(`/AllTaskPage?${params.toString()}`);
  }
  //console.log;
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h1 className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl text-center">
        Tarefas
      </h1>
      <ul className="space-y-4 bg-slate-200 text-shadow-blue-900 ">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="flex gap-4 text-black ">
              <div className="bg-white p-2 rounded-md space  w-full">
                <button
                  onClick={() => handleComplete(task.id)}
                  className={`font-semibold  w-full text-center  ${
                    task.isCompleted &&
                    "line-through bg-green-400 w-full rounded-md"
                  }`}
                >
                  {task.title}
                </button>
              </div>

              <button
                onClick={() => onSeeDetailClick(task)}
                className="bg-white text-shadow-blue-900 font-semibold p-2 rounded-md"
              >
                <ChevronRightIcon />
              </button>
              <button
                onClick={() => onDeleteTaskClick(task.id)}
                className="bg-white text-shadow-blue-900 font-semibold p-2 rounded-md"
              >
                <Trash2Icon />
              </button>
            </li>
          );
        })}
      </ul>
      <div className=" justify-between w-full flex ">
        <button
          className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl w-fit h-fit "
          onClick={onSeeAllTasks}
        >
          Todas as Tarefas{" "}
        </button>

        <button
          className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl w-fit h-fit "
          onClick={deleteAllTask}
        >
          Apagar Todas Tarefas
        </button>
      </div>
    </div>
  );
}
export default Tasks;
