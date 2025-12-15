import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="absolute left-10 top-10 border rounded-full bg-blue-400 py-2 px-2"
      >
        Menu
      </button>
      <div className="absolute left-0 top-30">
        {open && (
          <aside
            className={` w-[250px] h-[400px] bg-blue-400 transition-transform left-10 top-10 rounded-md  ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul>
              <li className="text-center">HOME</li>
              <li>RECEITAS</li>
              <li>3</li>
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
