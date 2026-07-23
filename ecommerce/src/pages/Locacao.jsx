import HomeImage from "../assets/HomeImage.png";
import LocacaoGrid from "../components/LocacaoGrid";

export default function Locacao() {
  return (
    <main className="flex-1 w-full  py-12 ">
      <section className=" left-0 right-0 overflow-hidden">
        <img
          src={HomeImage}
          alt="Banner Principal"
          className="w-full h-auto max-h-100 object-cover block"
        />
      </section>
      <LocacaoGrid />
    </main>
  );
}
