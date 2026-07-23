import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderMenu() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitora a rolagem para esconder/mostrar o menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Rolando para baixo -> esconde o menu
        setIsVisible(false);
      } else {
        // Rolando para cima ou no topo -> mostra o menu
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Estilo dos links horizontais
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
      isActive
        ? "bg-slate-800/10 text-slate-800 "
        : "text-slate-700 hover:text-black "
    }`;

  return (
    <div className="fixed top-16 left-0 right-0 w-full z-40 overflow-hidden pointer-events-none">
      {/* 2. MENU ANIMADO: É este elemento que desliza e reativa os cliques com pointer-events-auto */}
      <div
        className={`w-full max-h-[70h] overflox-y-auto bg-white border-b border-slate-800 p-3 shadow-2xl backdrop-blur-md pointer-events-auto transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-2 sm:gap-4 
        overflow-x-auto pr-2"
        >
          <NavLink to="/" className={navLinkStyle}>
            <span>Inicio</span>
          </NavLink>

          <NavLink to="/RentEq" className={navLinkStyle}>
            <span>Locação</span>
          </NavLink>

          <NavLink to="/Calibration" className={navLinkStyle}>
            <span>Calibração</span>
          </NavLink>

          <NavLink to="/equip" className={navLinkStyle}>
            <span>Equipamentos</span>
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            <span>Sobre Nós</span>
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            <span>Contato</span>
          </NavLink>

          <NavLink to="/checkout" className={navLinkStyle}>
            <span>📞</span> (11) 4003-0000
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
