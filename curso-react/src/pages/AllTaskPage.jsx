import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AllTaskPage() {
  const { completedTasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const titles = searchParams.getAll("title"); //Lê TODOS OS PARAMÊTROS title na URL e devolve um ARRAY
  const descriptions = searchParams.getAll("description");
  const ids = searchParams.getAll("id");
  const dates = searchParams.getAll("date");

  const tasks = titles.map((t, i) => ({
    id: ids[i],
    title: t,
    description: descriptions[i],
    date: dates[i],
  }));
  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center ">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-white  "
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Todas as Tarefas
          </h1>
        </div>
        <div className="w-full">
          {tasks.length === 0 ? (
            <p className="text-center text-white font-semibold">
              {" "}
              Nenhuma Tarefa Encontrada.
            </p>
          ) : (
            tasks.map(
              (
                t,
                index //array de objetos "tasks" combinando titles e description por índice
              ) => {
                const isCompleted = completedTasks.some((ct) => ct.id === t.id);
                return (
                  <div key={index} className="bg-white p-4 rounded-md mb-3">
                    <p className="text-shadow-blue-900 font-semibold">
                      Título: {t.title}
                      {isCompleted && "✔️"}
                    </p>
                    <p className="text-shadow-blue-900 font-semibold">
                      Descrição: {t.description}
                    </p>
                    <p className="text-shadow-blue-900 font-semibold">
                      Data : {t.date}
                    </p>
                  </div>
                );
              }
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default AllTaskPage;
