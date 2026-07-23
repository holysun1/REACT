import CategoryGrid from "../assets/CategoryGrid.jpg";
import servicoLocacao from "../assets/servicoLocacao.jpg";
import instrumentacao from "../assets/instrumentacao.png";
import mecanicaIndustrial from "../assets/mecanicaIndustrial.png";
import eletricaIndustrial from "../assets/eletricaIndustrial.jpg";
import refrigeracaoIndustrial from "../assets/refrigeracaoIndustrial.jpg";

export const categoriesData = [
  {
    id: 1,
    category: "Locação",
    title: "Locação de Equipamentos",
    description:
      "Instrumentos de alta precisão disponíveis para contratos de curto e longo prazo com disponibilidade imediata.",
    image: servicoLocacao,
    path: "/locacao",
  },
  {
    id: 2,
    category: "Calibração",
    title: "Serviços de Calibração",
    description:
      "Laboratório especializado com rastreabilidade RBC/INMETRO para garantir a confiabilidade dos seus medidores.",
    image: CategoryGrid,
    path: "/calibrador",
  },
  {
    id: 3,
    category: "Equipamentos",
    title: "Catálogo de Produtos",
    description:
      "Confira nossa linha completa de multímetros, osciloscópios, calibradores e padrões de pressão.",
    image: CategoryGrid,
    path: "/equip",
  },
];

export const rentalCategories = [
  {
    id: 1,
    title: "INSTRUMENTAÇÃO INDUSTRIAL",
    description:
      "Calibradores, comunicadores, detectores, analisadores e muito mais.",
    image: instrumentacao, // A imagem grande que vai no fundo
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    path: "/equip?category=Instrumentação+Industrial",
  },
  {
    id: 2,
    title: "MECÂNICA INDUSTRIAL",
    description:
      "Ferramentas, torquímetros, bombas, extratores e soluções mecânicas.",
    image: mecanicaIndustrial,
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    path: "/equip?category=",
  },
  {
    id: 3,
    title: "ELÉTRICA INDUSTRIAL",
    image: eletricaIndustrial,
    description:
      "Padrões de pressão, bombas manuais e termômetros de referência rastreados.",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    path: "/equip?category=Elétrica+Industrial",
  },
  {
    id: 4,
    title: "SISTEMAS DE REFRIGERAÇÃO INDUSTRIAL",
    description:
      "Análise de bancada avançada com equipamentos de banda larga e geradores de função.",
    image: refrigeracaoIndustrial,
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    path: "/equip?category=sinais",
  },
];
