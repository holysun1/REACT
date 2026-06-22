import MenuItem from "./MenuItem";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import App from "../App";

export default function Menu({ onMenuClick }) {
  const navigate = useNavigate();
  const [busca, setbusca] = useState("");
  const highlights = ["Últimas", "Em Alta", "Destaques", "Recomendadas"];

  const lidarComBusca = (evento) => {
    if (evento.key === "Enter" && busca.trim() !== "") {
      navigate(`/busca?q=${encodeURIComponent(busca)}`);
    }
  };

  return (
    <div>
      <div className="flex items-center py-4 gap-x-10">
        <button onClick={onMenuClick} className="text-2xl ml-4">
          ☰
        </button>
        <button
          onClick={() => navigate("/")}
          className=" bg-white shadow-md rounded-md px-4 py-2 font-bold text-x1"
        >
          LOGO / NOME DO SITE
        </button>{" "}
        <div className="justify-end flex flex-1 items-center">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={busca}
            onChange={(e) => setbusca(e.target.value)}
            onKeyDown={lidarComBusca}
            className="ml-4 px-4 py-2 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <header>
        {/* --------------- IMAGEM DE FUNDO --------------- */}
        <div
          className="sticky bg-cover bg-center h-[150px] w-screen"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <nav className="absolute inset-0 flex items-center justify-center">
            {/* --------------- MENU SOBRE A IMAGEM  --------------- */}
            <div className="flex flex-wrap justify-center gap-4 bg-white md:flex-nowrap rounded-full py-2 px-4">
              {highlights.map((item) => (
                <button
                  key={item}
                  className="px-4 py-4 rounded-full text-sm font-medium text-black hover:text-blue-600 cursor-pointer border-r-4 border-amber-200 pr-3 transition-colors"
                  onClick={() => console.log(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
