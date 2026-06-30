import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // 🔥 Importa a conexão
import ProductCard from "../components/ProductCard";

export default function Home({ searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca os produtos no Supabase assim que a tela carrega
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        // Faz o "SELECT * FROM products" na nuvem
        const { data, error } = await supabase.from("products").select("*");

        if (error) throw error;

        setProducts(data || []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filtro de busca (continua funcionando perfeitamente em cima do estado)
  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = product.category
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesName || matchesCategory;
  });

  // Tela de carregamento opcional para dar um feedback visual
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-400">
        <p className="animate-pulse">Carregando catálogo do Supabase...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">
          {searchQuery
            ? `Resultados para: "${searchQuery}"`
            : "Nossos Produtos"}
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          {searchQuery
            ? `Encontramos ${filteredProducts.length} produto(s)`
            : "Confira as melhores ofertas selecionadas para você."}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-slate-800 border-dashed">
          <p className="text-slate-400 text-lg">
            Nenhum produto encontrado com esse termo. 😕
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-3 text-sm text-emerald-400 hover:underline cursor-pointer"
          >
            Limpar busca
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
