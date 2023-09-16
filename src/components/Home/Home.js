import React from 'react'
import Header from "../Header/Header";
import Slider from "../Slider/Slider"

import Products from "../Products/Products";

import SortItems from "../SortItems/SortItems";
import { Routes, Route } from 'react-router-dom';
import FeaturedProject from '../FeaturedProject/FeaturedProject';

            

const Home = () => {
  return (
    <>
    <Header />
    <Slider />
    <SortItems />
    <Products />

    <Routes>
    </Routes>


    </>

  )
}

export default Home