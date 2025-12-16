import tecavancada from "../assets/tecavancada.jpg";
import economia from "../assets/economia.jpg";
import esportes from "../assets/esportes.jpg";
import image4 from "../assets/image4.jpg";
import politica from "../assets/politica.jpg";
import politicanacional from "../assets/politicanacional.jpg";
import culinariasaudavel from "../assets/culinariasaudavel.jpg";
import olimpiadas from "../assets/olimpiadas.jpg";

import { v4 as uuid } from "uuid";

const NewsData = [
  {
    id: uuid(),
    title: "Tecnologia Avançada",
    category: "ITEM 1",
    image: tecavancada,
    featured: true, // ITEM PRÍNCIPAL
  },
  {
    id: uuid(),
    title: "Economia",
    category: "ITEM 2",
    image: economia,
    featured: true,
  },
  {
    id: uuid(),
    title: "Esporte",
    category: "ITEM 3",
    image: esportes,
    featured: true,
  },
  {
    id: uuid(),
    title: "Mundo",
    category: "ITEM 4",
    image: image4,
    featured: true,
  },
  {
    id: uuid(),
    title: "Esportes Radicais",
    category: "ITEM 5",
    image: image4,
    featured: false, // ITEM SECUNDÁRIO - Ñ APARECE NA HOME PAGE
  },
  {
    id: uuid(),
    title: "Olimpíadas",
    category: "ITEM 6",
    image: olimpiadas,
    featured: true, // ITEM SECUNDÁRIO - Ñ APARECE NA HOME PAGE
  },
  {
    id: uuid(),
    title: "Política Internacional",
    category: "ITEM 7",
    image: politica,
    featured: true,
  },
  {
    id: uuid(),
    title: "Política Nacional",
    category: "ITEM 8",
    image: politicanacional,
    featured: true,
  },
  {
    id: uuid(),
    title: "Culinária Saudável",
    category: "ITEM 9",
    image: culinariasaudavel,
    featured: true,
  },
];

export default NewsData;
