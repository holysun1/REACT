import { Link } from "react-router-dom";
import { categoriesData } from "../data/categoriesData";

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nossos Serviços e Soluções
          </h2>
          <p className="mt-2 text-sm text-slate-900">
            Explore nossas principais frentes de atendimento para o setor
            industrial.
          </p>
        </div>

        {/* Grid de 3 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {categoriesData.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-200 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-950/20"
            >
              <div>
                {/* Imagem do Card + Tag de Categoria */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge da Categoria */}
                  <span className="absolute top-3 left-3 rounded-md bg-amber-500/90 px-3 py-1 text-xs font-bold text-slate-950 backdrop-blur-xs shadow-sm">
                    {card.category}
                  </span>
                </div>

                {/* Conteúdo (Título + Descrição) */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Botão Saiba Mais (Rodapé do Card) */}
              <div className="flex p-6  pt-0  justify-center">
                <Link
                  to={card.path}
                  className="flex items-center justify-center gap-2  h-10 w-40 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all duration-200 hover:bg-blue-900 hover:text-white hover:border-blue-800 shadow-sm"
                >
                  <span>Saiba Mais</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
