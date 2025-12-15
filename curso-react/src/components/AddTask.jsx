import { useState } from "react";
import { CalendarDays } from "lucide-react";
import CalendarComponent from "./Calendar";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState(""); //VARIÁVEIS DE TÍTULO
  const [description, setDescription] = useState(""); //VARIÁVEIS DE DESCRIÇÃO
  const [showCalendar, setShowCalendar] = useState(false);
  const [taskDate, setTaskDate] = useState(null);
  function toogleCalendar() {
    setShowCalendar((prev) => !prev);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col  ">
      <h1 className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl text-center">
        Nova Tarefa
      </h1>
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border bg-slate-50 border-slate-300 outline-slate-400 px-4 py-2 rounded-4xl font-medium"
        value={title}
        onChange={(event) => setTitle(event.target.value)} //CAPTURA O NOVO TÍTULO
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border bg-slate-50 border-slate-300 outline-slate-400 px-4 py-2 rounded-4xl font-medium"
        value={description}
        onChange={(event) => setDescription(event.target.value)} //CAPTURA A NOVA DESCRIÇÃO
      ></input>
      {taskDate && (
        <p className="text-sm text-black font-semibold">
          Data Selecionada: {taskDate.toLocaleDateString()}
        </p>
      )}
      <div className="justify-between w-full flex">
        <button
          onClick={() => {
            if (!title.trim() || !description.trim() || !taskDate) {
              //CONDIÇÃO PARA ADICIONAR A TAREFA (PREENCHIMENTO DOS CAMPOS INDICADOS ".TRIM - ESPAÇOS VAZIOS")
              return alert(
                "Preencha o título , a descrição e a data da tarefa"
              );
            }
            onAddTaskSubmit(title, description, taskDate); //ADICIONA O TÍTULO E A DESCRIÇÃO COMO NOVA TAREFA
            setTitle("");
            setDescription("");
            setTaskDate();
          }}
          className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl w-fit h-fit flex"
        >
          Adicionar
        </button>
        <button
          className="bg-slate-500 text-white px-4 py-2 font-medium rounded-4xl w-fit h-fit flex"
          onClick={toogleCalendar}
        >
          <CalendarDays />
        </button>
        {showCalendar && (
          <div className="absolute right-4 top-27">
            <CalendarComponent onDateChange={(d) => setTaskDate(d)} />
          </div>
        )}
      </div>
    </div>
  );
}
export default AddTasks;
