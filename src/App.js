import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import SortItems from "./components/SortItems/SortItems";

function App() {
  const showCart = useSelector((state) => state.show);

  return (
    <div className="container">
      <Header />
      <Slider />
      <SortItems />
      <Products />
      {showCart && <Modal />}
    </div>
  );
}

export default App;
