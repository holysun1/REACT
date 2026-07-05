export default function Planos({ planos }) {
  const handleAssinatura = (planoNome) => {
    // Monta a mensagem automática para o WhatsApp
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de saber mais e assinar o *${planoNome}* de marmitas mensais.`,
    );
    window.open(`https://wa.me/5515999999999?text=${mensagem}`, "_blank");
  };

  return (
    <section className="py-16 bg-red-50" id="planos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-zinc-800 mb-2">
          Planos Mensais de Marmita
        </h2>
        <p className="text-zinc-600 mb-12">
          Praticidade e sabor direto na sua rotina
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {planos.map((plano) => (
            <div
              key={plano.id}
              className="bg-white p-8 rounded-2xl shadow-md border border-red-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-zinc-800 mb-4">
                  {plano.nome}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {plano.descricao}
                </p>
              </div>
              <div>
                <div className="text-2xl font-black text-red-600 mb-6">
                  R$ {plano.preco.toFixed(2)}
                  <span className="text-xs text-zinc-500 font-normal">
                    /mês
                  </span>
                </div>
                <button
                  onClick={() => handleAssinatura(plano.nome)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-md shadow-red-500/10"
                >
                  Assinar via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
