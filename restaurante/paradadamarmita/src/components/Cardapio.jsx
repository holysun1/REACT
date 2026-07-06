import { useState } from "react";
import { cardapioDiario } from "../data/cardapioData";
import CardItem from "./CardItem";

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  // Pega as categorias únicas para gerar os botões dinamicamente
  const categorias = [
    "Todos",
    ...new Set(cardapioDiario.map((item) => item.categoria)),
  ];

  // Filtra os itens com base na categoria selecionada
  const itensFiltrados =
    categoriaAtiva === "Todos"
      ? cardapioDiario
      : cardapioDiario.filter((item) => item.categoria === categoriaAtiva);

  const handlePedirPrato = (nomePrato) => {
    const msg = encodeURIComponent(`Olá! Gostaria de pedir : *${nomePrato}*.`);
    window.open(`https://wa.me/551599999999?text=${msg}`, "_blank");
  };

  return (
    <section id="cardapio" className="py-16 bg-zinc-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-800 mb-2">
            Nosso Cardápio
          </h2>
          <p className="text-zinc-500 font-semibold">
            Escolha suas opções favoritas para o dia a dia
          </p>
        </div>

        {/* Botões de Filtro */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                categoriaAtiva === cat
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Itens (Estilo Holo Food) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {itensFiltrados.map((item) => (
            <CardItem
              key={item.id}
              item={item}
              handlePedirPrato={handlePedirPrato}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
