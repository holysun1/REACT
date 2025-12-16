import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { v4 as uuid } from "uuid";

const feedData = [
  {
    id: uuid(),
    title: "Notícia 1",
    category: "ITEM 1",
    image: image1,
    featured: true, // ITEM PRÍNCIPAL
  },
  {
    id: uuid(),
    title: "Notícia 2",
    category: "ITEM 2",
    image: image2,
    featured: true,
  },
  {
    id: uuid(),
    title: "Notícia 3",
    category: "ITEM 3",
    image: image3,
    featured: true,
  },
  {
    id: uuid(),
    title: "Nóticia 4",
    category: "ITEM 4",
    image: image4,
    featured: true,
  },
];

export default feedData;
