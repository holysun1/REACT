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
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
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
          <li className="cursor-pointer hover:text-blue-500">Tecnologia</li>
          <li className="cursor-pointer hover:text-blue-500">Culinária</li>
          <li className="cursor-pointer hover:text-blue-500">Moda</li>
          <li className="cursor-pointer hover:text-blue-500">Saúde</li>
          <li className="cursor-pointer hover:text-blue-500">Educação</li>
        </ul>
      </aside>
    </>
  );
}
