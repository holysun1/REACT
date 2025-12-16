import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import { v4 as uuid } from "uuid";

const NewsData = [
  {
    id: uuid(),
    title: "Notícia Tech",
    category: "ITEM 1",
    image: image1,
    featured: true, // ITEM PRÍNCIPAL
  },
  {
    id: uuid(),
    title: "Notícia Economia",
    category: "ITEM 2",
    image: image2,
    featured: true,
  },
  {
    id: uuid(),
    title: "Notícia Esporte",
    category: "ITEM 3",
    image: image3,
    featured: true,
  },
  {
    id: uuid(),
    title: "Notícia Mundo",
    category: "ITEM 4",
    image: image4,
    featured: true,
  },
  {
    id: uuid(),
    title: "Notícia Tech 2 ",
    category: "ITEM 1",
    image: image4,
    featured: false, // ITEM SECUNDÁRIO - Ñ APARECE NA HOME PAGE
  },
  {
    id: uuid(),
    title: "Notícia Tech 2 ",
    category: "ITEM 1",
    image: image1,
    featured: true, // ITEM SECUNDÁRIO - Ñ APARECE NA HOME PAGE
  },
  {
    id: uuid(),
    title: "Notícia 1",
    category: "ITEM 4",
    image: image2,
    featured: true,
  },
  {
    id: uuid(),
    title: "Notícia 2 ",
    category: "ITEM 1",
    image: image5,
    featured: true,
  },
  {
    id: uuid(),
    title: "Notícia 3 ",
    category: "ITEM 1",
    image: image6,
    featured: true,
  },
];

export default NewsData;
