import { useState } from "react";

// Componente isolado para cada card do cardápio
function CardItem({ item, handlePedirPrato }) {
  // Agora o useState inicia perfeitamente de forma isolada para cada item!
  const primeiroTamanho = () => {
    if (!item.precos) return "M";

    // Se for da categoria de pizzas e existir a opção "Grande", define ela como padrão
    if (item.categoria === "Pizzas Tradicionais" && item.precos["Grande"]) {
      return "Grande";
    }

    // Caso contrário, pega a primeira chave disponível (ex: 'P' ou 'Lata')
    return Object.keys(item.precos)[0];
  };
  const [tamanho, setTamanho] = useState(primeiroTamanho);

  const precoAtual = item.precos ? item.precos[tamanho] || 0 : item.preco || 0;

  return (
    <div className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-xl hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="overflow-hidden aspect-video bg-zinc-800 relative">
          <img
            src={item.img}
            alt={item.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {item.categoria}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-orange-500 transition-colors">
            {item.nome}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
            {item.descricao}
          </p>

          {/* Seletores dinâmicos (Lata/600ml ou P/M/G) */}
          {item.precos && (
            <div className="flex gap-2 mt-2 bg-zinc-800 p-1 rounded-xl border border-zinc-700">
              {Object.keys(item.precos).map((tam) => (
                <button
                  key={tam}
                  type="button"
                  onClick={() => setTamanho(tam)}
                  className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                    tamanho === tam
                      ? "bg-orange-600 text-white shadow-md"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700/50"
                  }`}
                >
                  {tam}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Rodapé do Card */}
      <div className="p-6 pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
        <div className="flex flex-col">
          {item.precos && (
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
              Opção: {tamanho}
            </span>
          )}
          <span className="text-xl font-black text-orange-500">
            R$ {precoAtual.toFixed(2).replace(".", ",")}
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            handlePedirPrato(item.nome, item.precos ? tamanho : null)
          }
          className="bg-zinc-800 hover:bg-orange-600 text-zinc-200 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 border border-zinc-700 hover:border-orange-600"
        >
          Pedir no Whats
        </button>
      </div>
    </div>
  );
}
export default CardItem;
