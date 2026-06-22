import { useNavigate, useSearchParams } from "react-router";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const date = searchParams.get("date");
  const navigate = useNavigate();

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
            Detalhes da Tarefa
          </h1>
        </div>
        <div>
          <h1 className="bg-white rounded-md space text-center w-full border font-bold">
            {title}
            <p className="text-slate-700 font-semibold ">{description}</p>
            <p className="text-slate-700 font-semibold ">{date}</p>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
