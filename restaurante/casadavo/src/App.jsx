import Cardapio from "./components/Cardapio";
import Planos from "./components/Planos";
import Footer from "./components/Footer";
import { marmitasMensais } from "./data/cardapioData";
import logoEmpresa from "./assets/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased selection:bg-red-500 selection:text-white scroll-smooth">
      {/* Navbar / Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logoEmpresa}
              alt="Logo"
              className="h-12 w-12 object-cover rounded-full transition-transform group-hover:scale-105 contrast-125 brightness-105 mix-blend-multiply"
            />
            <h1 className="text-xl font-black text-red-600 tracking-tight">
              Casa da Vó <span className="text-zinc-900">- Comida Caseira</span>
            </h1>
          </a>
          <nav className="flex gap-6 text-sm font-semibold text-zinc-600">
            <a
              href="#cardapio"
              className="hover:text-red-500 transition-colors"
            >
              Cardápio
            </a>
            <a href="#planos" className="hover:text-red-500 transition-colors">
              Planos Mensais
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="bg-linear-b from-red-50 to-white py-10 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
              Comida de verdade, <br />
              <span className="text-red-500">prática e saborosa.</span>
            </h2>
            <p className="text-zinc-600 text-base md:text-lg max-w-xl mx-auto mb-2">
              Escolha pratos avulsos para o seu dia ou assine nossos planos
              mensais de marmitas congeladas saudáveis.
            </p>
          </div>
        </section>

        {/* Componente do Cardápio */}
        <Cardapio />

        {/* Componente de Planos */}
        <Planos planos={marmitasMensais} />
      </main>

      {/* Componente de Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
