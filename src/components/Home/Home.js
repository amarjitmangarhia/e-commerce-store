import React from 'react'
import Header from "../Header/Header";
import Slider from "../Slider/Slider"

import Products from "../Products/Products";

import SortItems from "../SortItems/SortItems";
import Footer from '../Footer/Footer';

            

const Home = () => {
  return (
    <div>
    <Header />
    <Slider />
    <SortItems />
    {/* <Products /> */}
    <Footer />

    </div>

  )
}

export default Home