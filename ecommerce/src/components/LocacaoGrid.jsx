import { Link } from "react-router-dom";
import { rentalCategories } from "../data/categoriesData";

export default function LocacaoGrid() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho do Grid */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Equipamentos Disponíveis para Locação
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Selecione a família de instrumentos que você precisa e confira nosso
            catálogo completo para contratos diários, semanais ou mensais.
          </p>
        </div>

        {/* Grid de 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rentalCategories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* 1. Área da Imagem de Fundo (Topo) */}
              <div className="w-full h-40 sm:h-48 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 2. Área Inferior (Ícone Flutuante + Textos + Botão) */}
              <div className="relative flex flex-col flex-1 items-center px-4 pt-12 pb-6 text-center">
                {/* 🔵 Ícone Redondo Flutuante */}
                {/* O -top-8 puxa o ícone para cima, ficando metade na imagem e metade no branco */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>

                {/* Textos Centralizados */}
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 uppercase tracking-tight leading-tight">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 px-2">
                  {category.description}
                </p>

                {/* Botão Escuro (como na referência) */}
                <div className="mt-auto w-full">
                  <Link
                    to={category.path}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                  >
                    <span>VER EQUIPAMENTOS</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
