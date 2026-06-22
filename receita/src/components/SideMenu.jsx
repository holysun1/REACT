import sideMenuData from "../data/SideMenuData.jsx";

export default function SideMenu({ isOpen, setIsOpen }) {
  return (
    <>
      {/* --------------- MOBILE SIDE MENU --------------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      {/*--------------- SIDE MENU CONTENT --------------- */}
      <aside
        className={`
          absolute top-0 left-0 h-fit w-64 bg-white drop-shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold p-4"> Tópicos </h2>
          {/* --------------- BOTÃO HAMBURGUER --------------- */}
          <button onClick={() => setIsOpen(false)} className="  text-x1">
            X
          </button>
        </div>
        <ul className="space-y-6 px-4 p-6">
          {sideMenuData.map((item) => (
            <li key={item.label}>
              <p className="font-semibold text-gray-800">{item.label}</p>
              <ul className="mt-2 space-y-2 pl-4">
                {item.subItems.map((sub) => (
                  <li
                    key={sub}
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
