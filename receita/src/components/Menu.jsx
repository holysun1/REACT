import MenuItem from "./MenuItem";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const menuData = [
  {
    label: "ITEM 1",
    subItems: ["item 1.1", "item 1.2", "item 1.3", "item 1.4"],
  },
  {
    label: "ITEM 2",
    subItems: ["item 2.1", "item 2.2", "item 2.3", "item 2.4"],
  },
  {
    label: "ITEM 3",
    subItems: ["item 3.1", "item 3.2", "item 3.3", "item 3.4"],
  },
  {
    label: "ITEM 4",
    subItems: ["item 4.1", "item 4.2", "item 4.3", "item 4.4"],
  },
];
export default function Menu({ onMenuClick }) {
  const navigate = useNavigate();
  const highlights = ["Últimas", "Em Alta", "Destaques", "Recomendadas"];
  return (
    <div>
      <div className="flex items-center justify-items-center-safe py-4 gap-x-10">
        <button onClick={onMenuClick} className="text-2xl ml-4">
          ☰
        </button>
        <button
          onClick={() => navigate("/")}
          className=" bg-white shadow-md rounded-md px-4 py-2 font-bold text-x1"
        >
          LOGO / NOME DO SITE
        </button>
      </div>

      <header>
        {/* --------------- IMAGEM DE FUNDO --------------- */}
        <div
          className="bg-cover bg-center h-[100px]"
          style={{ backgroundImage: `url(${logo})` }}
        />
        <nav className="relative w-full mb-2 mt-4">
          {/* --------------- MENU SOBRE A IMAGEM  --------------- */}
          <div className="flex flex-wrap justify-center gap-4 bg-white p ">
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
      </header>
    </div>
  );
}
