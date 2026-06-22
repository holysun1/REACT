import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import NewsData from "../data/NewsData";

// Importando os componentes estruturais idênticos aos da Home
import SideMenu from "../components/SideMenu";
import Menu from "../components/Menu";

// Componente de Destaque Seguro
function DestacarTexto({ texto, termoBusca }) {
  if (!texto) return <span></span>;
  if (!termoBusca) return <span>{texto}</span>;

  const termoMinusculo = termoBusca.toLowerCase();
  const textoMinusculo = texto.toLowerCase();
  const partes = [];
  let indiceAtual = 0;

  while (indiceAtual < texto.length) {
    const proximoIndice = textoMinusculo.indexOf(termoMinusculo, indiceAtual);

    if (proximoIndice === -1) {
      partes.push({ texto: texto.substring(indiceAtual), destacar: false });
      break;
    }

    if (proximoIndice > indiceAtual) {
      partes.push({
        texto: texto.substring(indiceAtual, proximoIndice),
        destacar: false,
      });
    }

    partes.push({
      texto: texto.substring(proximoIndice, proximoIndice + termoBusca.length),
      destacar: true,
    });

    indiceAtual = proximoIndice + termoBusca.length;
  }

  return (
    <span>
      {partes.map((parte, i) =>
        parte.destacar ? (
          <mark
            key={i}
            className="bg-blue-500 text-white px-1 rounded-sm mx-0.5"
          >
            {parte.texto}
          </mark>
        ) : (
          parte.texto
        ),
      )}
    </span>
  );
}

export default function SearchedPage() {
  const [searchParams] = useSearchParams();
  const termo = searchParams.get("q") || "";

  // 1. Estados idênticos aos da sua Home para o Menu funcionar perfeitamente
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtragem dos dados baseado na busca
  const resultados = (NewsData || []).filter((item) => {
    const tituloNoticia = item?.title?.toLowerCase() || "";
    const categoriaNoticia = item?.category?.toLowerCase() || "";
    const termoBuscado = termo.toLowerCase();
    return (
      tituloNoticia.includes(termoBuscado) ||
      categoriaNoticia.includes(termoBuscado)
    );
  });

  return (
    // Replicando a mesma div estrutural da Home
    <div className="min-h-screen flex flex-col box-border bg-gray-50">
      {/* Configuração do SideMenu idêntica à Home */}
      <SideMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        onSelectCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* Menu do topo configurado para abrir o SideMenu */}
      <Menu onMenuClick={() => setIsMenuOpen(true)} />

      {/* O CONTEÚDO DA BUSCA (A "Página em Branco" estilo bloco de jornal flutuante) */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-6 md:p-12 my-6 bg-white rounded-xl shadow-md border border-gray-100 box-border">
        {/* Cabeçalho Limpo */}
        <div className="border-b pb-6 mb-8">
          <Link
            to="/"
            className="text-sm text-blue-600 hover:underline block mb-4"
          >
            ← Voltar para a Página Inicial
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-950">
            Resultados da Busca
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Mostrando resultados para:{" "}
            <span className="font-semibold text-gray-800">"{termo}"</span> (
            {resultados.length})
          </p>
        </div>

        {/* Listagem das Notícias Filtradas */}
        <div className="space-y-8">
          {resultados.length > 0 ? (
            resultados.map((item) => (
              <article key={item.id} className="border-b pb-6 last:border-none">
                {item.category && (
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    <DestacarTexto texto={item.category} termoBusca={termo} />
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 hover:text-blue-800 transition-colors">
                  <Link to={`/news/${item.category}`}>
                    <DestacarTexto texto={item.title} termoBusca={termo} />
                  </Link>
                </h3>
              </article>
            ))
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-400 italic">
                Nenhum resultado encontrado para esta pesquisa.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
