
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import Default from "./components/Default/Default"
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact"; 
import { useEffect, useState } from "react";

function App() {
  const showCart = useSelector((state) => state.show);
  const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/")
//     .then((res) => console.log(res.json()))
    
// }, []);


  return (
    <div className="container">
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/featured_product" element={<FeaturedProject />}></Route>
        <Route path="/about" element={<About />} ></Route> 
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:id" element={<Default />}></Route>

        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      {showCart && <Modal />}
    </div>
  );
}

export default App;
