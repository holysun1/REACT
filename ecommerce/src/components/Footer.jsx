import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid Principal de Informações */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Coluna 1: Sobre / Marca */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-black tracking-tight text-emerald-400">
              Dev<span className="text-slate-100">Store</span>
            </h3>
            <p className="text-xs text-slate-500 max-w-xs">
              Tecnologia, vestuário e acessórios para desenvolvedores de alta
              performance. O melhor ecossistema para o seu setup.
            </p>
          </div>

          {/* Coluna 2: Contato & Atendimento */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-slate-200">
              Atendimento ao Cliente
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span>📧</span> contato@devstore.com.br
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> (11) 4003-0000
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span> Seg a Sex, das 09h às 18h
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Dados Legais */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-slate-200">Informações Legais</h4>
            <ul className="space-y-1 text-xs text-slate-500 leading-relaxed">
              <li>DevStore Comércio Digital Ltda.</li>
              <li>
                <b>CNPJ:</b> 12.345.678/0001-99
              </li>
              <li>
                <b>Endereço:</b> Av. Paulista, 1000, Bloco 2 - Bela Vista
              </li>
              <li>São Paulo - SP | CEP: 01310-100</li>
            </ul>
          </div>
        </div>

        {/* Divisor Inferior */}
        <div className="mt-12 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {currentYear} DevStore. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Políticas de Privacidade
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
