export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800 text-sm">
      <section className="w-full py-8 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          {/* Lado Esquerdo: Texto informativo */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-amber-500">
              Venha nos visitar!
            </h3>
            <p className="text-zinc-300">
              Prefere retirar o seu pedido quentinho direto no balcão? Estamos
              localizados no coração de Itapetininga.
            </p>
            <div className="text-sm text-zinc-400 space-y-1">
              <p>📍 R. Dr. Coutinho, 836 - Centro, Itapetininga - SP</p>
              <p>📞 (15) 3273-3182</p>
            </div>
          </div>

          {/* Lado Direito: O Mapa incorporado */}
          <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
            <iframe
              title="Mapa Casa da Vó"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7117901831357!2d-48.03868902448119!3d-23.57879246223318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cc5e0dcfbe21%3A0x4262c542a5dee601!2sRestaurante%20e%20Pizzaria%20Casa%20da%20V%C3%B3%20-%20Itapetininga!5e0!3m2!1spt-BR!2sbr!4v1783345928870!5m2!1spt-BR!2sbr"
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
          <p>Segunda a Sexta: 11h às 14h e 19h ás 23:30h</p>
          <p>Sábado: 11h às 14h</p>
          <p>Domingo: 19h às 23:30h</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <p className="mb-2">WhatsApp: (15) 99848-3400</p>
          <p>E-mail: contato@casadavó.com.br</p>
        </div>
      </div>

      <hr className="border-zinc-800 my-8 max-w-6xl mx-auto" />

      {/* Informações Obrigatórias - Padrão CNPJ / Empresa Brasileira */}
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left md:flex md:justify-between text-xs text-zinc-500 gap-4">
        <div className="mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} CASA DA VÓ. Todos os direitos
            reservados.
          </p>
          <p className="mt-1 font-medium text-zinc-400">
            CASA DA VÓ RESTAURANTE E MARMITARIA LTDA
          </p>
        </div>
        <div className="md:text-right">
          <p className="font-medium text-zinc-400">CNPJ: 19.978.607/0001-79</p>
          <p className="mt-1">
            R. Dr. Coutinho, 836 - Centro, Itapetininga - SP, 18200-358
          </p>
        </div>
      </div>
    </footer>
  );
}
