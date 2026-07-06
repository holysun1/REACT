import logoEmpresa from "../assets/logo.png";
export default function Header() {
  return (
    <header className="sticky top-0 bg-zinc-800 backdrop-blur-md z-50 border-b border-zinc-400">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 max-w-[60%] sm:max-w-none group"
        >
          <img
            src={logoEmpresa}
            alt="Logo"
            className="h-12 w-12 object-cover rounded-full transition-transform group-hover:scale-105 contrast-125 brightness-105"
          />
          <h1 className="font-black text-sm sm:text-base text-zinc-100 line-clamp-2 sm:line-clamp-none">
            Parada da<span className="text-orange-600"> Pizza</span>
            <span className="hidden sm:inline"> - Marmitaria e Pizzaria</span>
          </h1>
        </a>
        <nav className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-100 text-center">
          <a
            href="#cardapio"
            className="hover:text-orange-500 transition-colors py-1"
          >
            Cardápio
          </a>
          <a
            href="#planos"
            className="hover:text-orange-500 transition-colors py-1 leading-tight max-w-[75px]"
          >
            Planos Mensais
          </a>
          <a
            href="#contato"
            className="hover:text-orange-500 transition-colors py-1"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
