import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

// 1. Recebemos searchQuery e setSearchQuery via props
export default function Navbar({ onCartClick, searchQuery, setSearchQuery }) {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex shrink-0 items-center">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-emerald-400"
            >
              Dev<span className="text-slate-100">Store</span>
            </Link>{" "}
          </div>

          {/* 2. Barra de Busca Controlada */}
          <div className="hidden sm:flex flex-1 max-w-md items-center relative">
            <input
              type="text"
              placeholder="Buscar por nome ou categoria..."
              value={searchQuery} // Controla o valor do input
              onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado no App.jsx em tempo real
              className="w-full rounded-xl bg-slate-800 border border-slate-700 py-2 pl-4 pr-10 text-sm text-slate-100 placeholder-slate-400 focus:border-emerald-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
            {/* Ícone de fechar "X" caso tenha algo digitado (facilita para o usuário limpar) */}
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-slate-400 hover:text-slate-200 cursor-pointer text-xs"
              >
                ✕
              </button>
            ) : (
              <svg
                className="absolute right-3 h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-sm font-medium text-slate-300 hover:text-emerald-400 cursor-pointer">
              Minha Conta
            </span>

            <button
              onClick={onCartClick}
              className="group relative flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800 p-2.5 text-slate-300 hover:border-slate-600 hover:text-emerald-400 transition-all active:scale-95 cursor-pointer"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:scale-105"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-slate-950 ring-4 ring-slate-900">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
