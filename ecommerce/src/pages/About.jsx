import AboutImage from "../assets/AboutImage.png";
import IndustryBanner from "../assets/IndustryBanner.jpg";
import CategoryGrid from "../components/CategoryGrid";
export default function About() {
  return (
    <section className="relative w-full ">
      <img
        src={IndustryBanner}
        alt="Banner Industrial - About"
        className="w-full h-auto max-h-80 object-cover block py-4"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center sm:px-6 lg:px-8 border-b border-slate-800 p-6">
        {/* Título e Destaque Visual */}
        <div className="lg:col-span-4">
          <h2 className=" text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Quem Somos
          </h2>
          <span className="text-xs font-bold tracking-wider text-blue-800 uppercase">
            Conheça nossa história
          </span>
          <div className="mt-4 h-1 w-12 bg-amber-500 rounded-full px-2"></div>
          <p className="py-4">
            Somos uma empresa especializada no{" "}
            <strong className="text-slate-800 font-semibold">
              aluguel de equipamentos técnicos
            </strong>{" "}
            de alta performance, dedicada a fornecer soluções ágeis e confiáveis
            para profissionais, empresas e projetos de diversos segmentos.
          </p>
          <p className="py-4">
            Nosso compromisso é garantir que você tenha acesso às melhores
            ferramentas do mercado sem a necessidade de grandes investimentos em
            ativos fixos ou preocupações com manutenção. Contamos com um
            catálogo rigorosamente revisado, suporte técnico ágil e logística
            eficiente para garantir o fluxo contínuo do seu trabalho.
          </p>
          <p className="text-sm text-black font-bold py-4">
            ⚙️ Tecnologia, economia e eficiência ao alcance do seu projeto.
          </p>
        </div>

        {/* Texto Institucional Padrão */}
        <div className="lg:col-span-8 space-y-4 text-slate-800 text-base leading-relaxed font-bold">
          <section className=" w-full overflow-hidden rounded-4xl ">
            <img
              src={AboutImage}
              alt="About - Image"
              className="w-full h-auto max-h-100 object-cover block"
            />
          </section>
        </div>
      </div>
      <CategoryGrid />
    </section>
  );
}
