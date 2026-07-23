import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // Puxa a função de adicionar

  const numericPrice = Number(product.price) || 0; //FORMATAÇÃO DE VALOR FLOAT PARA BRL
  const formattedPrice = numericPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className="group flex flex-col px-2 overflow-hidden rounded-2xl bg-white border
     border-slate-700 transition-all duration-300 hover:-translate-y-1 
     hover:border-slate-600 hover:shadow-xl hover:shadow-emerald-950/20 "
    >
      <div className="relative aspect-square overflow-hidden p-4 ">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3  bg-amber-500/80 px-3 py-1 text-xs rounded-lg border border-slate-800/80 shadow-md text-slate-900 font-bold backdrop-blur-xs">
          {product.category}
        </span>
        <span className="absolute bottom-3 left-3 flex items-center justify-center w-12 h-8 p-0.5 bg-white/90 rounded-lg border border-slate-200/80 shadow-md backdrop-blur-xs">
          <img
            src={product.brand}
            alt="Marca do Produto"
            className="max-h-full max-w-full object-cotain"
          />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-black line-clamp-1 group-hover:text-blue-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-slate-800 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex mt-4 justify-between items-center gap-20">
          {/* Adicionado o onClick chamando a função do Contexto */}
          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-semibold text-amber-100 transition-colors hover:bg-blue-700 hover:text-amber-50 active:scale-95 cursor-pointer"
          >
            Adicionar
          </button>
          <p className="rounded-xl px-4 py-2.5 text-sm  text-slate-800 transition-colors">
            {formattedPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
