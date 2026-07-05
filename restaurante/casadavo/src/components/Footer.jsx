export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">CASA DA VÓ</h3>
          <p className="leading-relaxed text-zinc-400">
            O sabor da comida caseira e saudável no conforto da sua casa ou
            trabalho. Marmitas selecionadas com carinho.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Funcionamento</h4>
          <p className="mb-2">Segunda a Sexta: 11h às 14h</p>
          <p>Sábado: 11h às 15h</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <p className="mb-2">WhatsApp: (15) 99999-9999</p>
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
          <p className="font-medium text-zinc-400">CNPJ: 00.000.000/0001-00</p>
          <p className="mt-1">
            Rua das Flores, 123 - Centro - Itapetininga/SP - CEP: 18200-000
          </p>
        </div>
      </div>
    </footer>
  );
}
