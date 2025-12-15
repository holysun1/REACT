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
export default function Menu({
  onSelectCategory,
  activeCategory,
  onMenuClick,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-items-center-safe py-4">
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
          className="relative bg-cover bg-center h-[120px] shadow mb-4 w-screen "
          style={{ backgroundImage: `url(${logo})` }}
        >
          {/* --------------- MENU SOBRE A IMAGEM  --------------- */}
          <nav
            className="
        absolute
        p-4
        flex
        inset-0
        items-center 
        justify-center
      "
          >
            <div
              className="flex 
                flex-wrap 
                justify-center 
                gap-4 
                md:flex-nowrap
              "
            >
              {menuData.map((item, index) => (
                <MenuItem
                  key={index}
                  label={item.label}
                  subItems={item.subItems}
                  onSelect={onSelectCategory}
                  isActive={activeCategory === item.label}
                />
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
