import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useCart } from "../context/CartContext";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductDetails() {
  const breadcrumbItem = [
    { label: "Equipamentos", path: "/equip" },
    { label: "Descrição de Equipamento", path: "/equip:/id" },
  ];

  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id) // Procura onde a coluna 'id' seja igual ao ID da URL
          .single(); // Traz apenas um objeto, não um array

        if (error) throw error;
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-800">
        <p className="animate-pulse">Carregando detalhes...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-800 gap-4">
        <p className="text-lg">Produto não encontrado. 😕</p>
        <Link to="/" className="text-blue-700 hover:underline">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbItem} />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-800 border border-blue-500/20 w-fit">
            {product.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-6 border-t border-slate-900 pt-6">
            <h3 className="text-sm  text-slate-900 font-semibold">
              Descrição do produto
            </h3>
            <p className="mt-2 text-sm text-slate-800 leading-relaxed">
              {product.description}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 w-full sm:w-fit rounded-xl bg-blue-700 px-8 py-4 text-center text-sm font-bold text-slate-100 hover:bg-blue-700 active:scale-98 transition-all cursor-pointer"
          >
            Adicionar ao Carrinho 🛒
          </button>
        </div>
      </div>
    </main>
  );
}
