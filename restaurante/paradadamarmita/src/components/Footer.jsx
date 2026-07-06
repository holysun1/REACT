export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-10 border-t border-zinc-800 text-sm">
      <section id="contato" className="w-full py-2 bg-zinc-900 scroll-mt-20 ">
        <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
          Contato
        </h2>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          {/* Lado Esquerdo: Texto informativo */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-zinc-200">
              Venha nos visitar!
            </h3>
            <p className="text-zinc-300">
              Prefere retirar o seu pedido quentinho direto no balcão? Estamos
              localizados no coração de Itapetininga.
            </p>
            <div className="text-sm text-zinc-400 space-y-1">
              <p>
                📍 R. Cel. Afonso, 172 - B - Centro, Itapetininga - SP,
                18200-175
              </p>
              <p>📞 (15) 99686-5032</p>
            </div>
          </div>

          {/* Lado Direito: O Mapa incorporado */}
          <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5129299029145!2d-48.046668499999996!3d-23.585930599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cddeca2223f3%3A0x173749ffc5bb7c3b!2sParada%20da%20Marmita%20I%20Marmitex%20e%20Churrascaria%20I%20Itapetininga!5e0!3m2!1spt-BR!2sbr!4v1783347542571!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <p className="leading-relaxed text-zinc-400">
            O sabor da comida caseira e saudável no conforto da sua casa ou
            trabalho. Marmitas selecionadas com carinho.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Funcionamento</h4>
          <p>Segunda a Sábado: 10:30h às 14h - 19 às 23:30h</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <p className="mb-2">WhatsApp: (15) 99686-5032</p>
          <p>E-mail: EMAILDAEMPRESA@AQUI.COM.BR</p>
        </div>
      </div>

      <hr className="border-zinc-800 my-8 max-w-6xl mx-auto" />

      {/* Informações Obrigatórias - Padrão CNPJ / Empresa Brasileira */}
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left md:flex md:justify-between text-xs text-zinc-500 gap-4">
        <div className="mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Parada da Marmita I Marmitex e
            Churrascaria I Todos os direitos reservados.
          </p>
          <p className="mt-1 font-medium text-zinc-400">
            Parada da Marmita I Marmitex e Churrascaria I
          </p>
        </div>
        <div className="md:text-right">
          <p className="font-medium text-zinc-400">
            CNPJ: CNPJ DA EMPRESA AQUI
          </p>
          <p className="mt-1">
            R. Cel. Afonso, 172 - B - Centro, Itapetininga - SP, 18200-175
          </p>
        </div>
      </div>
    </footer>
  );
}
