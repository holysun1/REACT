import { useState, useEffect, useMemo } from "react";
import { supabase } from "../supabaseClient";
import ProductCard from "../components/ProductCard";
import EquipImage from "../assets/EquipImage.png";

export default function Equip({ searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados dos Filtros
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000); // Valor padrão alto inicial

  // Busca os produtos no Supabase assim que a tela carrega
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const { data, error } = await supabase.from("products").select("*");

        if (error) throw error;

        const productList = data || [];
        setProducts(productList);

        // Define o preço máximo dinâmico baseado no produto mais caro
        if (productList.length > 0) {
          const highestPrice = Math.max(
            ...productList.map((p) => Number(p.price || 0)),
          );
          setMaxPrice(highestPrice > 0 ? highestPrice : 10000);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Função para extrair o nome legível da marca a partir da URL da logo
  const getBrandName = (brandUrl) => {
    if (!brandUrl) return "";

    // Se já for apenas texto puro (ex: "Fluke"), retorna ele mesmo
    if (!brandUrl.startsWith("http")) return brandUrl;

    try {
      // Pega o nome do arquivo da URL (ex: 'logo-fluke.png' -> 'fluke')
      const fileName = brandUrl.split("/").pop().split("?")[0];
      const cleanName = fileName
        .replace(/^logo-?/i, "") // Remove a palavra 'logo' se houver
        .split(".")[0]; // Remove a extensão (.png, .jpg, etc)

      // Capitaliza a primeira letra (ex: 'fluke' -> 'Fluke')
      return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    } catch {
      return "Outra Marca";
    }
  };

  // Extrai listas dinâmicas e sem duplicatas para os seletores da Sidebar
  const categories = useMemo(() => {
    const list = products.map((p) => p.category).filter(Boolean);
    return [...new Set(list)];
  }, [products]);

  const brands = useMemo(() => {
    const list = products.map((p) => p.brand_name).filter(Boolean);
    return [...new Set(list)];
  }, [products]);

  // Modelos filtrados conforme a marca selecionada (se houver)
  const models = useMemo(() => {
    const filteredByBrand = selectedBrand
      ? products.filter((p) => (p.brand_name || p.brand) === selectedBrand)
      : products;
    const list = filteredByBrand.map((p) => p.model).filter(Boolean);
    return [...new Set(list)];
  }, [products, selectedBrand]);

  // Preço máximo real encontrado nos produtos para o limite do Slider
  const absoluteMaxPrice = useMemo(() => {
    if (products.length === 0) return 10000;
    const highest = Math.max(...products.map((p) => Number(p.price || 0)));
    return highest > 10000 ? highest : 10000;
  }, [products]);

  // Aplicação acumulativa dos filtros
  const filteredProducts = products.filter((product) => {
    const query = (searchQuery || "").toLowerCase();

    // Busca textual
    const matchesName = String(product.name || "")
      .toLowerCase()
      .includes(query);
    const matchesCategoryQuery = String(product.category || "")
      .toLowerCase()
      .includes(query);
    const matchesSearch = matchesName || matchesCategoryQuery;

    // Filtros da Sidebar
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    const productBrand = product.brand_name || product.brand;
    const matchesBrand = selectedBrand ? productBrand === selectedBrand : true;
    const matchesModel = selectedModel ? product.model === selectedModel : true;

    // Filtro por faixa de preço
    const productPrice = Number(product.price || 0);
    const matchesPrice = productPrice <= maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesModel &&
      matchesPrice
    );
  });

  // Função para limpar todos os filtros
  const handleClearAllFilters = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedModel("");
    setMaxPrice(absoluteMaxPrice);
  };

  if (loading) {
    return (
      <div className="flex-1 min-h-[60vh] flex items-center justify-center text-slate-800">
        <p className="animate-pulse font-medium">
          Carregando catálogo do Supabase...
        </p>
      </div>
    );
  }

  return (
    <main className="flex-1 mx-auto py-12">
      {/* Banner Principal */}
      <section className=" w-full left-0 right-0 overflow-hidden ">
        <img
          src={EquipImage}
          alt="Banner Principal"
          className="w-full h-auto object-cover block"
        />
      </section>

      <div className="mb-2 mt-4 justify-center text-center">
        <h2 className=" text-3xl font-bold tracking-tight text-slate-800">
          {searchQuery
            ? `Resultados para: "${searchQuery}"`
            : "Catálogo de Equipamentos"}
        </h2>
        <p className=" mt-2 text-sm text-slate-600">
          {searchQuery
            ? `Encontramos ${filteredProducts.length} produto(s)`
            : "Filtre por categoria, marca e faixa de preço para encontrar o equipamento ideal."}
        </p>
      </div>

      <hr className="border-slate-200 my-6" />

      {/* Grid Principal: Sidebar na Esquerda (1 col) + Produtos na Direita (3 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* ================= PAINEL DE FILTROS (ESQUERDA) ================= */}
        <aside className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs lg:sticky lg:top-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <span>⚙️</span> Filtros
            </h3>
            {(selectedCategory ||
              selectedBrand ||
              selectedModel ||
              searchQuery ||
              maxPrice < absoluteMaxPrice) && (
              <button
                onClick={handleClearAllFilters}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                Limpar tudo
              </button>
            )}
          </div>

          <div className="space-y-6">
            {/* 1. FILTRO DE CATEGORIA */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <option value="">Todas as Categorias</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. FILTRO DE MARCA */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Marca
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel(""); // Reseta o modelo ao mudar de marca
                }}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <option value="">Todas as Marcas</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. FILTRO DE MODELO (Hierárquico após selecionar a marca) */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Modelo
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={models.length === 0}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">
                  {selectedBrand ? "Todos os Modelos" : "Selecione uma Marca"}
                </option>
                {models.map((mod) => (
                  <option key={mod} value={mod}>
                    {mod}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. FILTRO DE PREÇO (BARRA ROLÁVEL / SLIDER) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Preço Máximo
                </label>
                <span className="text-xs  text-blue-700 bg-blue-50 px-2 py-1 rounded-md">
                  R${" "}
                  {Number(maxPrice).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={absoluteMaxPrice}
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>R$ 0</span>
                <span>
                  R$ {Number(absoluteMaxPrice).toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* ================= VITRINE DE PRODUTOS (DIREITA) ================= */}
        <section className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 border-dashed p-6">
              <p className="text-slate-500 text-base font-medium">
                Nenhum produto atende aos critérios selecionados. 😕
              </p>
              <button
                onClick={handleClearAllFilters}
                className="mt-4 px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-xs"
              >
                Resetar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 p-1">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
