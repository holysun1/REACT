import Cardapio from "./components/Cardapio";
import Planos from "./components/Planos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { marmitasMensais } from "./data/cardapioData";

function App() {
  return (
    <div className="min-h-screen bg-zinc-600 font-sans antialiased selection:bg-orange-500 selection:text-orange-600 scroll-smooth">
      {/*Cabeçalho*/}
      <Header />
      <main className="pt-16">
        <section className="bg-linear-b from-orange-50 to-white py-10 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
              Comida de verdade, <br />
              <span className="text-orange-500">prática e saborosa.</span>
            </h2>
            <p className="text-zinc-100 text-base md:text-lg max-w-xl mx-auto  py-5">
              Escolha pratos avulsos para o seu dia ou assine nossos planos
              mensais de marmitas congeladas saudáveis.
            </p>
          </div>
        </section>

        {/* Componente do Cardápio */}
        <Cardapio />

        {/* Componente de Planos */}
        <Planos planos={marmitasMensais} />

        {/* Componente de Rodapé */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
