import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-slate-900 font-semibold">
        {/* Ícone de Início / Home */}
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className="hover:text-blue-800 transition-colors flex items-center gap-1"
          >
            <span className="hover:underline">Início</span>
          </Link>
        </li>

        {/* Mapeamento das rotas passadas por parâmetro */}
        {items &&
          items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {/* Separador > */}
                <span className="text-slate-600 font-bold">&gt;</span>

                {isLast ? (
                  /* Último item: Página atual (sem link e com cor destacada) */
                  <span
                    className="font-semibold text-amber-400"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  /* Itens intermediários: Clicáveis para navegação */
                  <Link
                    to={item.path}
                    className="hover:text-blue-800 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
