import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // Puxa a função de adicionar

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-emerald-950/20">
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-xs">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-slate-100 line-clamp-1 group-hover:text-emerald-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="mt-4 items-center-safe">
          {/* Adicionado o onClick chamando a função do Contexto */}
          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 active:scale-95 cursor-pointer"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
