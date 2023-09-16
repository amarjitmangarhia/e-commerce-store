import React from 'react'
import Header from '../Header/Header'
import image1 from "../../img/i9_1.jpg"
import image2 from "../../img/i9_2.jpg"
import image3 from "../../img/i9_3.jpg"
import image4 from "../../img/i9_4.jpg"
import image5 from "../../img/i9_5.jpg"
import productImage from "../../img/featured_product.jpg"

import classes from "../FeaturedProject/FeaturedProject.module.css"

const FeaturedProject = () => {
  return (
    <div className={classes.featuredProject}>
    <Header />
    {/* <Slider /> */}
    <div className={classes.content}>
    <h2>Blazzing Speed</h2>
    <p className={classes.desc}>...with Intel Core i9</p>

    <table>
        <tr>
            <th>Brand</th>
            <td>Intel</td>
        </tr>
        <tr>
            <th>CPU manufacturer</th>
            <td>Intel</td>
        </tr> <tr>
            <th>CPU model</th>
            <td>	1.2GHz Cortex A8 Processor</td>
        </tr> <tr>
            <th>CPU speed</th>
            <td>3 GHz</td>
        </tr> <tr>
            <th>Platform</th>
            <td>Windows 10</td>
        </tr>
        
    </table>

    <h3>About this item</h3>
    <div className={classes.aboutLi}>
        <div className={classes.productimage}>
        <img src={productImage}></img>
        </div>
        <ul>
            <li>10 Cores / 20 Threads</li>
            <li>Socket type LGA 1200</li>
            <li>Up to 5. 3 GHz unlocked</li>
            <li>Compatible with Intel 400 series chipset based motherboards</li>
            <li>Intel Turbo Boost Max Technology 3. 0 support</li>
            <li>Intel Optane Memory support</li>
        </ul>
    </div>

    <p className={classes.fromTheManufacturer}>From the manufacturer</p>

    <div className={classes.images}>
        <img src={image1} alt='featuredImage1' />
        <img src={image2} alt='featuredImage2' />
        <img src={image3} alt='featuredImage3' />
        <img src={image4} alt='featuredImage4' />
        <img src={image5} alt='featuredImage5' />
    </div>
    
    <div className={classes.priceDesc} style={{fontSize: "20px"}}>
    <p>Buy New: <strike>$630</strike> <strong style={{fontSize: "30px"}}> $599 + free shipping</strong> </p>
    <p>Order Today! Get Delieved By 20th Sept</p>
    </div>

    <div className={classes.buyNow}>
        <button className={classes.buy}>Buy now</button>
        <button className={classes.aToC}>Add To Cart</button>
    </div>
    </div>

    </div>
  )
}

export default FeaturedProject