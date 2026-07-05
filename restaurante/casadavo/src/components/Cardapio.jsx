import { useState } from "react";
import { cardapioDiario } from "../data/cardapioData";

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
    const msg = encodeURIComponent(
      `Olá! Gostaria de pedir a marmita/item: *${nomePrato}*.`,
    );
    window.open(`https://wa.me/5515999999999?text=${msg}`, "_blank");
  };

  return (
    <section className="py-16 bg-white" id="cardapio">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-800 mb-2">
            Nosso Cardápio
          </h2>
          <p className="text-zinc-500">
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
                  ? "bg-red-500 text-white shadow-md shadow-red-500/20"
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
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden aspect-video bg-zinc-100 relative">
                  <img
                    src={item.img}
                    alt={item.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-zinc-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.categoria}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-800 mb-2 group-hover:text-red-600 transition-colors">
                    {item.nome}
                  </h3>
                  <p className="text-zinc-500 text-sm line-clamp-2">
                    {item.descricao}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between mt-4">
                <span className="text-xl font-black text-zinc-900">
                  R$ {item.preco.toFixed(2)}
                </span>
                <button
                  onClick={() => handlePedirPrato(item.nome)}
                  className="bg-zinc-900 hover:bg-red-500 text-white hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center gap-2"
                >
                  Pedir no Whats
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
