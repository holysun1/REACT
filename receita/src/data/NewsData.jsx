import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const NewsData = [
  {
    id: 1,
    title: "Notícia Tech",
    category: "ITEM 1",
    image: image1,
    featured: true, // ITEM PRÍNCIPAL
  },
  {
    id: 2,
    title: "Notícia Economia",
    category: "ITEM 2",
    image: image2,
    featured: true,
  },
  {
    id: 3,
    title: "Notícia Esporte",
    category: "ITEM 3",
    image: image3,
    featured: true,
  },
  {
    id: 4,
    title: "Notícia Mundo",
    category: "ITEM 4",
    image: image4,
    featured: true,
  },
  {
    id: 5,
    title: "Notícia Tech 2 ",
    category: "ITEM 1",
    image: image4,
    featured: false, // ITEM SECUNDÁRIO - Ñ APARECE NA HOME PAGE
  },
  {
    id: 5,
    title: "Notícia Tech 2 ",
    category: "ITEM 1",
    image: image4,
    featured: false, // ITEM SECUNDÁRIO - Ñ APARECE NA HOME PAGE
  },
  {
    id: 4,
    title: "Notícia 1",
    category: "ITEM 4",
    image: image4,
    featured: false,
  },
  {
    id: 5,
    title: "Notícia 2 ",
    category: "ITEM 1",
    image: image4,
    featured: false,
  },
  {
    id: 5,
    title: "Notícia 3 ",
    category: "ITEM 1",
    image: image4,
    featured: false,
  },
];

export default NewsData;
