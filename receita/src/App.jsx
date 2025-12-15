import "./App.css";
import SideBar from "./MenuLateral/SideBar";

function App() {
  return (
    <div className="bg-white w-screen h-screen flex justify-center">
      <div className="w-[500px] p-5">
        <h1 className="justify-center text-center border rounded-4xl bg-amber-300 font-bold h-[100px]">
          RECEITAS
        </h1>
      </div>
      <div className="p-4 absolute left-0 top-5">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
