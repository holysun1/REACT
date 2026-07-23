import React from "react";

export default function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "EQUIPAMENTOS DE QUALIDADE",
      description: "Marcas líderes de mercado e tecnologia de ponta.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "CALIBRAÇÃO RASTREADA",
      description: "Rastreabilidade RBC/INMETRO e normas internacionais.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "AGILIDADE E FLEXIBILIDADE",
      description:
        "Atendimento rápido e soluções sob medida para sua necessidade.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "SUPORTE ESPECIALIZADO",
      description: "Equipe técnica qualificada sempre à disposição.",
    },
  ];
  return (
    <section className="w-full bg-slate-900 border-t border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-4 p-2 transition-transform duration-200 hover:translate-y"
          >
            {/* Círculo do Ícone */}
            <div className="shrink-0 p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60 shadow-inner">
              {badge.icon}
            </div>

            {/* Textos */}
            <div className="flex flex-col">
              <h4 className="text-xs font-bold tracking-wider text-slate-100 uppercase mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {badge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
