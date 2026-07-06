import logoEmpresa from "../assets/logo.png";
export default function Header() {
  return (
    <header className="sticky top-0 bg-zinc-800 backdrop-blur-md z-50 border-b border-zinc-400">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoEmpresa}
            alt="Logo"
            className="h-12 w-12 object-cover rounded-full transition-transform group-hover:scale-105 contrast-125 brightness-105"
          />
          <h1 className="text-xl font-black text-orange-600 tracking-tight">
            Parada da Pizza{" "}
            <span className="text-zinc-100">- Marmitaria e Pizzaria</span>
          </h1>
        </a>
        <nav className="flex gap-6 text-sm font-semibold text-zinc-100">
          <a
            href="#cardapio"
            className="hover:text-orange-500 transition-colors"
          >
            Cardápio
          </a>
          <a href="#planos" className="hover:text-orange-500 transition-colors">
            Planos Mensais
          </a>
          <a
            href="#contato"
            className="text-zinc-300 hover:text-orange-500 font-medium transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
