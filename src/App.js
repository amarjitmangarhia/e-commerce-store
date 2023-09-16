import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";

import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";

function App() {
  const showCart = useSelector((state) => state.show);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/featured_product" element={<FeaturedProject />}></Route>

        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      {showCart && <Modal />}
    </div>
  );
}

export default App;
